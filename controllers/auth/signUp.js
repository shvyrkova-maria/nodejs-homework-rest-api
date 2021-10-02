const { User } = require('../../models');
const { Conflict } = require('http-errors');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const signUp = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email ${email} already exist`);
  }

  const newUser = new User({ email });
  newUser.setPassword(password);
  await newUser.save();

  sendSuccessRes(res, { message: 'Success signup' }, 201); // result?
};

module.exports = signUp;
