const express = require('express');
const router = express.Router();
// const listContacts = require('../../model/contacts/listContacts');
// const getContactById = require('../../model/contacts/getContactById');
// const addContact = require('../../model/contacts/addContact');
// const removeContactById = require('../../model/contacts/removeContactById');
// const updateContact = require('../../model/contacts/updateContact');
const {
  listContacts,
  getContactById,
  addContact,
  removeContactById,
  updateContact,
} = require('../../model/contacts/index');
// проверить экспорты и импорты, почему не видит в индексе

router.get('/', async (req, res, next) => {
  try {
    const results = await listContacts();
    res.json({
      status: 'success',
      code: 200,
      data: { results },
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
    if (!result) {
      const error = new Error('Not found');
      error.status = 404;
      throw error;
    }
    res.json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const result = await addContact(req.body);
    res.json({
      status: 'success',
      code: 201,
      data: { result },
      message: 'Contact added',
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await removeContactById(contactId);
    if (!result) {
      const error = new Error('Not found');
      error.status = 404;
      throw error;
    }
    res.json({
      status: 'success',
      code: 200,
      message: `Contact with id ${contactId} delete`,
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      const error = new Error(`Contact with id ${contactId} not found`);
      error.status = 404;
      throw error;
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
