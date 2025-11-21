# Backend Server for Contact Form

This backend server handles contact form submissions and sends them to Google Sheets and/or Email.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3001

# Google Sheets API Configuration (Optional)
# Get service account credentials from Google Cloud Console
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here

# Email Configuration (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
CONTACT_EMAIL=cdf@iitgn.ac.in
```

### 3. Google Sheets Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google Sheets API
4. Create a Service Account:
   - Go to "IAM & Admin" > "Service Accounts"
   - Click "Create Service Account"
   - Give it a name and click "Create"
   - Grant it "Editor" role (or "Viewer" if you prefer)
   - Click "Done"
5. Create a Key:
   - Click on the created service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Select "JSON" format
   - Download the JSON file
6. Extract credentials from the JSON:
   - Copy `client_email` to `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - Copy `private_key` to `GOOGLE_PRIVATE_KEY`
7. Create a Google Sheet and share it with the service account email (give Editor access)
8. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - The Sheet ID is the long string between `/d/` and `/edit`
9. Add headers to the first row of Sheet1: `Timestamp`, `Name`, `Email`, `Phone`, `Subject`, `Message`

### 4. Gmail Setup (Optional)

1. Go to your Google Account settings
2. Enable 2-Step Verification (if not already enabled)
3. Go to Security > 2-Step Verification > App Passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password to `EMAIL_PASS` in `.env`

**Note:** You can use either Google Sheets, Email, or both. At least one must be configured.

### 5. Running the Server

```bash
# Run only the backend server
npm run dev:server

# Run both frontend and backend together
npm run dev:all
```

The server will start on `http://localhost:3001`

## API Endpoints

### POST `/api/contact`

Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "subject": "Inquiry about programs",
  "message": "Hello, I would like to know more about..."
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

Check server health and configuration status.

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

Update your `.env` file (or create one) in the root directory:

```env
VITE_API_URL=http://localhost:3001
```

For production, set it to your backend URL:
```env
VITE_API_URL=https://your-backend-url.com
```

## Troubleshooting

### Google Sheets Issues
- Make sure the service account email has access to the sheet
- Verify the Sheet ID is correct
- Check that Sheet1 has the correct headers in row 1

### Email Issues
- Verify you're using an App Password, not your regular Gmail password
- Check that 2-Step Verification is enabled
- For other email providers, adjust `EMAIL_SERVICE` accordingly

### CORS Issues
- The server is configured to accept requests from all origins in development
- For production, update CORS settings in `server/index.js`

## Production Deployment

1. Set environment variables on your hosting platform
2. Update `VITE_API_URL` in your frontend build
3. Ensure the backend server is accessible from your frontend domain
4. Consider using environment-specific configurations

