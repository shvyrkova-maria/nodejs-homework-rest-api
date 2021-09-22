const { NotFound } = require('http-errors');
const contactsOperation = require('../../model/contacts/index');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.getContactById(contactId);
  if (!result) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }
  sendSuccessRes(res, { result });
};

module.exports = getContactById;
