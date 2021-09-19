const Joi = require('joi');

const validationMessage = { 'any.required': 'missing required name field' };

const contactValidation = Joi.object({
  name: Joi.string().min(1).max(30).required().messages(validationMessage),
  email: Joi.string().email().required().messages(validationMessage),
  phone: Joi.string().min(7).required().messages(validationMessage),
});

module.exports = contactValidation;
