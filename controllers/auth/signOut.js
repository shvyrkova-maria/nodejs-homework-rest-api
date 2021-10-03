const { User } = require('../../models');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const signOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  sendSuccessRes(res, { message: 'Success signout' }, 204);
};

module.exports = signOut;
