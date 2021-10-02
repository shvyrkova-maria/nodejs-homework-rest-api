const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { validationMessage, emailRegExp } = require('./validationExp');

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlenght: 6,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegExp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true },
);

const userValidation = Joi.object({
  password: Joi.string().min(6).required().messages(validationMessage),
  email: Joi.string()
    .email()
    .required()
    .pattern(emailRegExp)
    .messages(validationMessage),
  subscription: Joi.string().valid('starter', 'pro', 'business'),
  token: Joi.string(),
});

const User = model('user', userSchema);

module.exports = { User, userValidation };
