const { NotFound } = require('http-errors');
const contactsOperation = require('../../model/contacts/index');
const sendSuccessRes = require('../../utils/sendSuccessRes');

const removeContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.removeContactById(contactId);
  if (!result) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }
  sendSuccessRes(res, {
    message: `Contact with id ${contactId} deleted`,
  });
};

module.exports = removeContactById;
