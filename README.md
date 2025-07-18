# Awnish Sharma - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring contact forms and meeting booking functionality.

## Features

### 📩 Contact Form
- **Email Integration**: Uses EmailJS to send emails directly to awnishprasad99@gmail.com
- **SMS Notifications**: Sends SMS alerts via Twilio to +91 9918800821
- **Form Validation**: Client-side validation with user-friendly error messages
- **Success Feedback**: Toast notifications for successful submissions

### 📅 Book a Call
- **Date/Time Selection**: Interactive calendar with react-datepicker
- **Meeting Redirect**: Automatically redirects to Google Meet (https://meet.google.com/zrd-jejn-pva)
- **Dual Notifications**: 
  - Admin notifications via email and SMS
  - User confirmation via email and SMS
- **Meeting Reminders**: Automated reminder system

### 🎨 Design Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll-based animations
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Modern UI**: Glassmorphism effects, gradients, and micro-interactions

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

# Gmail Configuration
GMAIL_USER=your_gmail@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 2. EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail recommended)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Update the environment variables

### 3. Twilio Setup

1. Create an account at [Twilio](https://www.twilio.com/)
2. Get your Account SID and Auth Token from the console
3. Purchase a phone number or use the sandbox for testing
4. Update the environment variables

### 4. Gmail App Password

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Use this password in the `GMAIL_APP_PASSWORD` environment variable

### 5. Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## API Endpoints

### `/api/send-contact-sms`
- **Method**: POST
- **Purpose**: Sends SMS notification for contact form submissions
- **Body**: `{ name, email, message }`

### `/api/book-meeting`
- **Method**: POST
- **Purpose**: Handles meeting bookings with email and SMS notifications
- **Body**: `{ name, email, phone, company, purpose, dateTime, selectedTime, message, meetingLink }`

## Deployment

The application is configured for deployment on:
- **Netlify** (recommended)
- **Vercel**
- **Any static hosting service**

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form, React DatePicker
- **Email**: EmailJS, Nodemailer
- **SMS**: Twilio
- **Build Tool**: Vite
- **Deployment**: Netlify

## Contact Information

- **Email**: awnishprasad99@gmail.com
- **Phone**: +91 9918800821
- **LinkedIn**: [Awnish Sharma](https://linkedin.com/in/awnish-sharma-b9b089212)
- **GitHub**: [Awnishprasad99](https://github.com/Awnishprasad99)

## License

This project is licensed under the MIT License.# awnish-portfolio
