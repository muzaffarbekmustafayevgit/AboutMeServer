const nodemailer = require("nodemailer");
require("dotenv").config();

const sendActivationEmail = async (to, code) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Muzaffar Auth 👨‍💻" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Aktivatsiya kodingiz",
    html: `<p>Assalomu alaykum! Tasdiqlash kodingiz: <b>${code}</b></p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendActivationEmail };
