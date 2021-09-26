const { Contact } = require('../../models');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  sendSuccessRes(res, { result, message: 'Contact added' }, 201);
};

module.exports = addContact;
