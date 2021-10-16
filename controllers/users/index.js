const signUp = require('./signUp');
const verify = require('./verify');
const reverify = require('./reverify');
const signIn = require('./signIn');
const signOut = require('./signOut');
const getCurrentUser = require('./getCurrentUser');
const addUserAvatar = require('./addUserAvatar');

module.exports = {
  signUp,
  verify,
  reverify,
  signIn,
  signOut,
  getCurrentUser,
  addUserAvatar,
};
