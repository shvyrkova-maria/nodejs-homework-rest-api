const Joi = require('joi');

const contactValidation = Joi.object({
  name: Joi.string().min(1).max(30).required,
  email: Joi.string().email().required,
  phone: Joi.string().min(7).required,
});

module.exports = contactValidation;
