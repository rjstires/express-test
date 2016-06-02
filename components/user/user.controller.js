var path = require("path");

// Actions
function index(req, res, next) {
  res.locals.title = 'View Users';
  next();
}

function create(req, res, next) {
  res.locals.title = 'Create a User';
  next();
}

function read(req, res, next) {
  res.locals.title = 'Show User';
}

function update(req, res, next) {
  res.locals.title = 'Update User';
}

function remove(req, res, next) {
  res.locals.title = 'Remove User';
}

// Views
function usersView(req, res, next) {
  res.locals.title = 'Last minute change!';
  res.locals.other_local = 'stuff goes here!';

  res.renderTemplate(__dirname, 'index');
}

function userView(req, res, next) {

}

module.exports = {

  // Actions
  index: index,
  create: create,
  read: read,
  update: update,
  remove: remove,

  // Common Views
  views: {
    users: usersView,
    user: userView
  }
};