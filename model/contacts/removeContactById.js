const fs = require('fs/promises');
const path = require('path');
const listContacts = require('./listContacts');
const filePath = path.join(__dirname, '../../db/contacts.json');

const removeContactById = async contactId => {
  try {
    const contacts = await listContacts();
    const contactInx = contacts.findIndex(
      contact => String(contact.id) === contactId,
    );
    if (contactInx === -1) {
      return null;
    }
    contacts.splice(contactInx, 1);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
    return 'Contact delete';
  } catch (error) {
    return error.message;
  }
};

module.exports = removeContactById;
