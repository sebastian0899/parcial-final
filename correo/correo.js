const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

function sendMail(email,createObjet){
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'creacion gorra',
        text: 'se creo la gorra ' + createObjet,
      };
      
      // Crea un objeto Transporter
const transporter = nodemailer.createTransport({
    service: 'SMTP',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user:process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
  });
     
      // Envía el correo electrónico
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log(info);
        }
      });
}

module.exports = {sendMail}
