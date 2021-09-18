const express = require('express');
const router = express.Router();
const { controllerWrapper, validation } = require('../../middlewares/');
const { contactValidation } = require('../../validationSchemas');
const ctrl = require('../../controllers/contacts');

router.get('/', controllerWrapper(ctrl.listContacts));

router.get('/:contactId', controllerWrapper(ctrl.getContactById));

router.post(
  '/',
  validation(contactValidation),
  controllerWrapper(ctrl.addContact),
);

router.delete('/:contactId', controllerWrapper(ctrl.removeContactById));

router.patch(
  '/:contactId',
  validation(contactValidation),
  controllerWrapper(ctrl.updateContact),
);

module.exports = router;

// const {
//   listContacts,
//   getContactById,
//   addContact,
//   removeContactById,
//   updateContact,
// } = require('../../model/contacts/index');

// router.get('/', async (req, res, next) => {
//   try {
//     const results = await listContacts();
//     res.json({
//       status: 'success',
//       code: 200,
//       data: { results },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await getContactById(contactId);
//     if (!result) {
//       const error = new Error('Not found');
//       error.status = 404;
//       throw error;
//     }
//     res.json({
//       status: 'success',
//       code: 200,
//       data: { result },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/', async (req, res, next) => {
//   try {
//     const result = await addContact(req.body);
//     res.json({
//       status: 'success',
//       code: 201,
//       data: { result },
//       message: 'Contact added',
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await removeContactById(contactId);
//     if (!result) {
//       const error = new Error('Not found');
//       error.status = 404;
//       throw error;
//     }
//     res.json({
//       status: 'success',
//       code: 200,
//       message: `Contact with id ${contactId} delete`,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.patch('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await updateContact(contactId, req.body);
//     if (!result) {
//       const error = new Error(`Contact with id ${contactId} not found`);
//       error.status = 404;
//       throw error;
//     }
//     res.json({
//       status: 'success',
//       code: 200,
//       data: {
//         result,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
