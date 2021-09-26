const express = require('express');
const router = express.Router();
const { controllerWrapper, validation } = require('../../middlewares');
const { contactValidation } = require('../../models/contact');
const ctrl = require('../../controllers/contacts');

router.get('/', controllerWrapper(ctrl.listContacts));

router.get('/:contactId', controllerWrapper(ctrl.getContactById));

router.post(
  '/',
  validation(contactValidation),
  controllerWrapper(ctrl.addContact),
);

router.patch(
  '/:contactId',
  validation(contactValidation),
  controllerWrapper(ctrl.updateContact),
);

router.delete('/:contactId', controllerWrapper(ctrl.removeContactById));

module.exports = router;
