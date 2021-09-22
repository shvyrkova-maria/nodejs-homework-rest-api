const { NotFound } = require('http-errors');
const contactsOperation = require('../../model/contacts/index');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.updateContact(contactId, req.body);
  if (!result) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }

  sendSuccessRes(res, {
    result,
    message: `Contact update`,
  });
};

module.exports = updateContact;
