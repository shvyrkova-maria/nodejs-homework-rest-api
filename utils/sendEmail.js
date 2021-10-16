const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sentEmail = async data => {
  const email = { ...data, from: 'shvyrkovamaria@gmail.com' };
  try {
    await sgMail.send(email);
    console.log('Email sent');
  } catch (error) {
    console.log(error);
  }
};

module.exports = sentEmail;
