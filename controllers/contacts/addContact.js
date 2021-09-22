const contactsOperation = require('../../model/contacts/index');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const addContact = async (req, res) => {
  const result = await contactsOperation.addContact(req.body);
  sendSuccessRes(res, { result, message: 'Contact added' }, 201);
};

module.exports = addContact;
