# 📧 EmailJS Setup Guide for Book Call Feature

This guide will help you set up EmailJS to send instant confirmation emails when users book a call.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your Gmail account
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

#### Template Subject:
```
Meeting Confirmation - {{meeting_datetime}}
```

#### Template Content (HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .meeting-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb; }
        .meet-button { display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Meeting Confirmed!</h1>
            <p>Your call with Awnish Sharma has been successfully booked</p>
        </div>
        
        <div class="content">
            <p>Hi <strong>{{user_name}}</strong>,</p>
            <p>Thank you for booking a meeting! Here are your confirmed details:</p>
            
            <div class="meeting-details">
                <h3>📅 Meeting Details</h3>
                <p><strong>📧 Your Email:</strong> {{user_email}}</p>
                <p><strong>📱 Phone:</strong> {{user_phone}}</p>
                <p><strong>🏢 Company:</strong> {{user_company}}</p>
                <p><strong>🎯 Purpose:</strong> {{meeting_purpose}}</p>
                <p><strong>📅 Date & Time:</strong> {{meeting_datetime}}</p>
                <p><strong>💬 Message:</strong> {{meeting_message}}</p>
            </div>
            
            <div style="text-align: center;">
                <a href="{{meet_link}}" class="meet-button">
                    🎥 Join Google Meet
                </a>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #1565c0;"><strong>📝 Important:</strong> Please join the meeting at the scheduled time using the Google Meet link above. If you need to reschedule, please reply to this email.</p>
            </div>
            
            <p>Looking forward to our conversation!</p>
            <p>Best regards,<br><strong>Awnish Sharma</strong><br>DevOps Engineer & Cloud Architect</p>
        </div>
        
        <div class="footer">
            <p>📧 awnishprasad99@gmail.com | 📱 +91 9918800821</p>
            <p>This meeting was booked through the portfolio website</p>
        </div>
    </div>
</body>
</html>
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_publicKey123`)

### 5. Update Your Code
Replace the placeholder values in `BookCallSection.tsx`:

```typescript
// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'your_actual_service_id';     // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'your_actual_template_id';   // Replace with your template ID  
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';     // Replace with your public key
```

### 6. Environment Variables (Optional)
For better security, you can use environment variables:

Create `.env.local`:
```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

Then update your code:
```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## 📧 Email Template Variables

The template uses these variables that are automatically filled:

- `{{user_name}}` - User's full name
- `{{user_email}}` - User's email address
- `{{user_phone}}` - User's phone number
- `{{user_company}}` - User's company (or "Not specified")
- `{{meeting_purpose}}` - Purpose of the meeting
- `{{meeting_datetime}}` - Formatted date and time
- `{{meeting_message}}` - Additional message from user
- `{{meet_link}}` - Google Meet link
- `{{admin_email}}` - Your admin email
- `{{booking_timestamp}}` - When the booking was made

## 🎯 How It Works

1. **User fills form** → Enters name, email, date/time, etc.
2. **Form validation** → Checks email format, future date, required fields
3. **EmailJS sends email** → Instant confirmation to both user and admin
4. **Success feedback** → User sees success message and toast notification
5. **Optional redirect** → User can choose to open Google Meet

## ✅ Testing Your Setup

1. Fill out the booking form with your own email
2. Submit the form
3. Check your email for the confirmation
4. Verify all details are correctly populated
5. Test the Google Meet link

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid service ID" error**
   - Double-check your service ID in EmailJS dashboard
   - Make sure it matches exactly in your code

2. **"Invalid template ID" error**
   - Verify your template ID
   - Ensure the template is published/active

3. **"Invalid public key" error**
   - Check your public key in Account settings
   - Make sure there are no extra spaces

4. **Emails not sending**
   - Check EmailJS dashboard for usage limits
   - Verify your Gmail service is connected
   - Check spam folder

5. **Template variables not working**
   - Ensure variable names match exactly (case-sensitive)
   - Check template preview in EmailJS dashboard

## 📊 EmailJS Limits

**Free Plan:**
- 200 emails/month
- 2 email services
- 1 email template

**Paid Plans:**
- Higher email limits
- More services and templates
- Priority support

## 🔒 Security Notes

- EmailJS runs on the frontend, so API keys are visible
- Use environment variables for production
- Consider rate limiting on your form
- Monitor usage in EmailJS dashboard

## 🎉 Success!

Once set up correctly, users will receive beautiful, professional confirmation emails instantly when they book a call, creating a seamless and trustworthy experience!

For any issues, check the browser console for detailed error messages from EmailJS.