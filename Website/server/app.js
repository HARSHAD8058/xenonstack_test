require(dotenv).config()
const nodeMailer = require('nodemailer')

const transporter = await nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.PASSWORD,
  }
});