# Backend Setup Guide for Contact Form

This guide will help you set up the backend server to handle contact form submissions and send them to Google Sheets and/or Email.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - CORS middleware
- `dotenv` - Environment variables
- `googleapis` - Google Sheets API
- `nodemailer` - Email sending
- `concurrently` - Run frontend and backend together

### 2. Create Environment File

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3001

# Google Sheets API Configuration (Optional)
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here

# Email Configuration (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
CONTACT_EMAIL=cdf@iitgn.ac.in
```

**Important:** Add `.env` to `.gitignore` to keep your credentials safe!

### 3. Configure Google Sheets (Optional)

#### Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one

#### Step 2: Enable Google Sheets API
1. Go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click "Enable"

#### Step 3: Create Service Account
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name it (e.g., "contact-form-service")
4. Click "Create and Continue"
5. Grant it "Editor" role (optional)
6. Click "Done"

#### Step 4: Create JSON Key
1. Click on the created service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" format
5. Download the JSON file

#### Step 5: Extract Credentials
From the downloaded JSON file, copy:
- `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL` in `.env`
- `private_key` → `GOOGLE_PRIVATE_KEY` in `.env` (keep the quotes and `\n`)

#### Step 6: Create and Share Google Sheet
1. Create a new Google Sheet
2. Add headers in Row 1: `Timestamp`, `Name`, `Email`, `Phone`, `Subject`, `Message`
3. Click "Share" button
4. Paste the service account email (from JSON)
5. Give it "Editor" access
6. Copy the Sheet ID from URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
7. Paste Sheet ID to `GOOGLE_SHEET_ID` in `.env`

### 4. Configure Gmail (Optional)

#### Step 1: Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "2-Step Verification" if not already enabled

#### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" as app
3. Select "Other (Custom name)" as device
4. Enter "Contact Form Backend"
5. Click "Generate"
6. Copy the 16-character password
7. Paste to `EMAIL_PASS` in `.env`

#### Step 3: Update Environment Variables
- `EMAIL_USER` = Your Gmail address (used to send emails)
- `EMAIL_PASS` = The app password from Step 2
- `CONTACT_EMAIL` = Where to receive contact form emails (defaults to `cdf@iitgn.ac.in` if not set)

### 5. Run the Server

```bash
# Run only backend server
npm run dev:server

# Run both frontend and backend together
npm run dev:all

# Run only frontend (default)
npm run dev
```

The backend server will start on `http://localhost:3001`

### 6. Test the Setup

Visit `http://localhost:3001/api/health` to check:
- Server status
- Which services are configured (Google Sheets, Email)

## API Endpoints

### POST `/api/contact`
Submit a contact form.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "subject": "Inquiry",
  "message": "Hello, I would like to know more..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "results": {
    "googleSheets": true,
    "email": true
  }
}
```

### GET `/api/health`
Check server health and configuration.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "services": {
    "googleSheets": true,
    "email": true
  }
}
```

## Frontend Configuration

Create or update `.env` in the root (or `src/.env.local`):

```env
VITE_API_URL=http://localhost:3001
```

For production, set it to your deployed backend URL:
```env
VITE_API_URL=https://api.yourdomain.com
```

## Troubleshooting

### Google Sheets Not Working?
- ✅ Check service account email has access to the sheet
- ✅ Verify Sheet ID is correct (the long string in the URL)
- ✅ Make sure headers are in Row 1 of Sheet1
- ✅ Check `GOOGLE_PRIVATE_KEY` includes `\n` for line breaks

### Email Not Sending?
- ✅ Use App Password, not regular Gmail password
- ✅ Make sure 2-Step Verification is enabled
- ✅ Check email service is set correctly (`gmail`, `outlook`, etc.)

### CORS Errors?
- The server accepts all origins in development
- For production, update CORS settings in `server/index.js`

### Port Already in Use?
- Change `PORT` in `.env` to a different port (e.g., 3002)
- Update `VITE_API_URL` in frontend `.env` accordingly

## Production Deployment

1. **Set Environment Variables** on your hosting platform (Vercel, Railway, Heroku, etc.)
2. **Update Frontend Build** with your production API URL
3. **Ensure Backend is Accessible** from your frontend domain
4. **Use HTTPS** for security in production

## Security Notes

- ⚠️ Never commit `.env` file to git
- ⚠️ Keep service account keys secure
- ⚠️ Use environment variables in production
- ⚠️ Enable HTTPS in production
- ⚠️ Consider rate limiting for production

## Need Help?

Check the server logs for detailed error messages. The server will log:
- ✅ Successful submissions to Google Sheets
- ✅ Successful email sends
- ❌ Any errors with detailed messages

