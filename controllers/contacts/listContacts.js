const contactsOperation = require('../../model/contacts/index');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const listContacts = async (req, res) => {
  const results = await contactsOperation.listContacts();
  sendSuccessRes(res, { results });
};

module.exports = listContacts;
