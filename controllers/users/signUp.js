const { User } = require('../../models');
const gravatar = require('gravatar');
const { Conflict } = require('http-errors');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email, { protocol: 'https', s: 250 });

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }

  const newUser = new User({ email, avatarURL });
  newUser.setPassword(password);
  await newUser.save();

  sendSuccessRes(res, { user: newUser, message: 'Success signup' }, 201);
};

module.exports = signUp;
