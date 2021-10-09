const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { validationMessage, emailRegExp } = require('./validationExp');
require('dotenv').config();
const { SECRET_KEY } = process.env;

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
    avatarURL: {
      type: String,
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
  avatarURL: Joi.string(),
});

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password);
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.createToken = function () {
  const payload = { _id: this._id };
  return jwt.sign(payload, SECRET_KEY);
};

const User = model('user', userSchema);

module.exports = { User, userValidation };
