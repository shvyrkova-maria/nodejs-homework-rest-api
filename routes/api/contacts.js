const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch (error) {}
});

router.get('/:contactId', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch (error) {}
});

router.post('/', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch (error) {}
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch (error) {}
});

router.patch('/:contactId', async (req, res, next) => {
  try {
    res.json({ message: 'template message' });
  } catch (error) {}
});

module.exports = router;
