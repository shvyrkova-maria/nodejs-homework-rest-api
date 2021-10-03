const express = require('express');
const router = express.Router();
const {
  controllerWrapper,
  validation,
  authenticate,
} = require('../../middlewares');
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
router.get('/signout', authenticate, controllerWrapper(ctrl.signOut));
router.get('/current', authenticate, controllerWrapper(ctrl.getCurrentUser));

module.exports = router;
