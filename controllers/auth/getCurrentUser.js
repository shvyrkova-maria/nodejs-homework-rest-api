const { Contact } = require('../../models');
const { BadRequest } = require('http-errors');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const getCurrentUser = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.find({ owner: _id });
  if (!result) {
    throw new BadRequest('Failure');
  }
  sendSuccessRes(res, { result, message: 'Success' }, 200);
};
module.exports = getCurrentUser;
