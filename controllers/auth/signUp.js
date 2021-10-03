const { User } = require('../../models');
const { Conflict } = require('http-errors');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const signUp = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }

  const newUser = new User({ email });
  newUser.setPassword(password);
  await newUser.save();

  sendSuccessRes(res, { user: newUser, message: 'Success signup' }, 201);
};

module.exports = signUp;
