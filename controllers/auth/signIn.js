const { User } = require('../../models');
const { NotFound, BadRequest } = require('http-errors');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new NotFound(`User with email ${email} do not exist`);
  }

  if (!user.comparePassword(password)) {
    throw new BadRequest('Invalid password');
  }
  const { _id } = user;
  const token = user.createToken();
  const updateUser = await User.findByIdAndUpdate(_id, { token });
  sendSuccessRes(
    res,
    {
      user: updateUser,
      message: 'Success signin',
      token,
    },
    200,
  );
};

module.exports = signIn;
