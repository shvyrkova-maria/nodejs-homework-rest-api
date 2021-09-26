const { Contact } = require('../../models');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const listContacts = async (req, res) => {
  const results = await Contact.find({}, '_id name email phone favorite');
  sendSuccessRes(res, { results });
};

module.exports = listContacts;
