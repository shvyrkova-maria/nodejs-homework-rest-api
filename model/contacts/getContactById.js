const listContacts = require('./listContacts');

const getContactById = async contactId => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(contact => String(contact.id) === contactId);
    if (!contact) {
      return null;
    }
    return contact;
  } catch (error) {
    return error.message;
  }
};

module.exports = getContactById;
