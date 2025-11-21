import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Sheets API
const getGoogleSheetsClient = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
};

// Initialize Email transporter
const getEmailTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send data to Google Apps Script
const sendToAppsScript = async (data) => {
  const appsScriptUrl = process.env.APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyYx3KwGhVz0WEl_x6-PQpdCu-dAxWORffBwrk63QX-IPTCi9kAxNd_1QYHHzrfYLMSHg/exec';
  
  try {
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // Apps Script web apps need this to handle CORS properly
      redirect: 'follow',
    });

    // Apps Script returns plain text or JSON, handle both
    const responseText = await response.text();
    
    // Try to parse as JSON, if fails just check if status is ok
    try {
      const jsonResponse = JSON.parse(responseText);
      return jsonResponse.success !== false;
    } catch {
      // If not JSON, check if status is 200
      return response.ok;
    }
  } catch (error) {
    console.error('❌ Apps Script error:', error.message);
    throw error;
  }
};

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // Validate phone number format (must include country code)
    if (!/^\+\d{11,13}$/.test(phone)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid phone number format. Please include country code (e.g., +91XXXXXXXXXX)' 
      });
    }

    const timestamp = new Date().toISOString();
    const results = {
      googleSheets: false,
      email: false,
      appsScript: false,
    };

    // Prepare data for Apps Script
    const formData = {
      timestamp,
      name,
      email,
      phone,
      subject,
      message,
    };

    // Send to Google Apps Script (Primary method for storing data)
    try {
      await sendToAppsScript(formData);
      results.appsScript = true;
      console.log('✅ Saved to Google Apps Script');
    } catch (appsScriptError) {
      console.error('❌ Apps Script error:', appsScriptError.message);
    }

    // Save to Google Sheets if configured
    if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      try {
        const sheets = getGoogleSheetsClient();
        const range = 'Sheet1!A:F'; // Adjust range as needed

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[timestamp, name, email, phone, subject, message]],
          },
        });

        results.googleSheets = true;
        console.log('✅ Saved to Google Sheets');
      } catch (sheetsError) {
        console.error('❌ Google Sheets error:', sheetsError.message);
      }
    }

    // Send email if configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = getEmailTransporter();
        
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.CONTACT_EMAIL || 'cdf@iitgn.ac.in',
          replyTo: email,
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6366f1;">New Contact Form Submission</h2>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p>
                <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">Submitted on: ${new Date(timestamp).toLocaleString()}</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        results.email = true;
        console.log('✅ Email sent successfully');
      } catch (emailError) {
        console.error('❌ Email error:', emailError.message);
      }
    }

    // Return success if at least one method worked
    if (results.appsScript || results.googleSheets || results.email) {
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully!',
        results,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Unable to process your request. Please try again later.',
      });
    }
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    services: {
      appsScript: !!process.env.APPS_SCRIPT_URL || true, // Default URL is hardcoded
      googleSheets: !!(process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
      email: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
    },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Google Apps Script: ✅ Configured (Primary data storage)`);
  console.log(`📧 Email service: ${process.env.EMAIL_USER ? '✅ Configured' : '❌ Not configured'}`);
  console.log(`📊 Google Sheets (API): ${process.env.GOOGLE_SHEET_ID ? '✅ Configured' : '❌ Not configured'}`);
});

