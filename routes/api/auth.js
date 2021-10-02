const express = require('express');
const router = express.Router();
const { controllerWrapper, validation } = require('../../middlewares');
const { userValidation } = require('../../models/user');
const ctrl = require('../../controllers/auth');

router.post(
  '/signup',
  validation(userValidation),
  controllerWrapper(ctrl.signUp),
);
router.post(
  '/signin',
  validation(userValidation),
  controllerWrapper(ctrl.signIn),
);
router.get('/signout', controllerWrapper(ctrl.signOut));

module.exports = router;
