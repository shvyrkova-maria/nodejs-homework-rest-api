const { Schema, model } = require('mongoose');
const Joi = require('joi');
const {
  validationMessage,
  emailRegExp,
  phoneRegExp,
} = require('./validationExp');

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      minlenght: 2,
      maxlenght: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegExp,
      minlenght: 7,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: phoneRegExp,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

const contactValidation = Joi.object({
  name: Joi.string().min(2).max(30).required().messages(validationMessage),
  email: Joi.string()
    .email()
    .required()
    .pattern(emailRegExp)
    .messages(validationMessage),
  phone: Joi.string()
    .min(7)
    .required()
    .pattern(phoneRegExp)
    .messages(validationMessage),
  favorite: Joi.boolean(),
});

const contactStatusValidation = Joi.object({
  favorite: Joi.boolean().required().messages(validationMessage),
});

const Contact = model('contact', contactSchema);

module.exports = { Contact, contactValidation, contactStatusValidation };
