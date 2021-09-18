const { nanoid } = require('nanoid');
const fs = require('fs/promises');
const path = require('path');
const listContacts = require('./listContacts');
const filePath = path.join(__dirname, '../contacts.json');

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(2),
      name: name,
      email: email,
      phone: phone,
    };
    contacts.push(newContact);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    return error.message;
  }
};

module.exports = addContact;
