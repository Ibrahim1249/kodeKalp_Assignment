const nodemailer = require("nodemailer")

async function sendMailer(userEmail , loginLink){
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD
      }
    });
    
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: userEmail,
      subject: 'Congratulations You have Successful Registration!',
      html: `
        <p>We're thrilled to have you on board. Your registration was successful.</p>
        <p>To get started, please click the link below to log in:</p>
        <a href="${loginLink}">Log In to Your Account</a>
        <p>Best regards,<br>From Ibrahim!</p>
      `
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Registration email sent: ', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending registration email: ', error);
    return false;
  }
}


module.exports = {
    sendMailer
}