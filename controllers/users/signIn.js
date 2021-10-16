const { User } = require('../../models');
const { NotFound, BadRequest } = require('http-errors');
const { sendSuccessRes } = require('../../utils');

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.verify) {
    throw new NotFound(`User with email ${email} do not exist or not verify`);
  }

  if (!user.comparePassword(password)) {
    throw new BadRequest('Invalid password');
  }
  const { _id } = user;
  const token = user.createToken();
  const updateUser = await User.findByIdAndUpdate(_id, { token });
  sendSuccessRes(res, { user: updateUser, message: 'Success signin' }, 200);
};

module.exports = signIn;
