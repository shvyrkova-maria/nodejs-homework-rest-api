const { User } = require('../../models');
const { nanoid } = require('nanoid');
const gravatar = require('gravatar');
const { Conflict } = require('http-errors');
const { sendSuccessRes, sendEmail } = require('../../utils');

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email, { protocol: 'https', s: 250 });

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
  const verifyToken = nanoid(7);
  const newUser = new User({ email, avatarURL, verifyToken });
  newUser.setPassword(password);
  await newUser.save();

  const verifyEmail = {
    to: email,
    subject: 'Please Verify Your Email',
    html: `<p>Let's confirm your email <a href='http://localhost:3000/api/users/verify/${verifyToken}' target='_blank'>${email}</a> and you can start using app.</p>`,
  };

  await sendEmail(verifyEmail);
  sendSuccessRes(res, { user: newUser, message: 'Success signup' }, 201);
};

module.exports = signUp;
