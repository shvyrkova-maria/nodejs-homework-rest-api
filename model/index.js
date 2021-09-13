const { nanoid } = require('nanoid');
const fs = require('fs/promises');
const path = require('path');
const contacts = require('./contacts.json');

const filePath = path.join(__dirname, '/contacts.json');

// const readData = async () => {
//   try {
//     const data = await fs.readFile('./contacts.json', 'utf-8');
//     return data;
//   } catch (error) {}
// };

const listContacts = async () => contacts;

const getContactById = async contactId => {
  const contacts = await listContacts();
  const contact = contacts.find(contact => contact.id === contactId); // String(contact.id)
  if (!contact) {
    return null;
  }
  return contact;
};

const removeContactById = async contactId => {
  const contacts = await listContacts();
  const contactInx = contacts.findIndex(contact => contact.id === contactId); // String(contact.id)
  if (contactInx === -1) {
    return null;
  }
  contacts.splice(contactInx, 10);
  // перезаписать файл тут
  // await fs.writeFile(filePath, JSON.stringify(contacts, null, 2))
  return 'Contact delete';
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  contacts.push({ id: nanoid(2), name: name, email: email, phone: phone });
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
  // return 'Contact add'; или вернуть контакт?
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const contactInx = contacts.findIndex(contact => contact.id === contactId); // String(contact.id)
  if (contactInx === -1) {
    return null;
  }
  const updateContact = { ...contacts[contactInx], body };
  console.log(updateContact);
  // перезаписать файл тут
};

module.exports = {
  listContacts,
  getContactById,
  removeContactById,
  addContact,
  updateContact,
};
