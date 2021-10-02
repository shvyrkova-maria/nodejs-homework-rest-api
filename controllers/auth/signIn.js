const { User } = require('../../models');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const signIn = async (req, res) => {
  const result = await User.create(req.body);
  sendSuccessRes(res, { result, message: 'Contact added' }, 201);
};

module.exports = signIn;
