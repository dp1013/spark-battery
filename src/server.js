const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5173;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // replace with your email
      pass: 'your-email-password', // replace with your email password or app-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: '312divyamsvjc@gmail.com', // replace with recipient email
    subject: 'New Message from Contact Form',
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
