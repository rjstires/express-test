var path = require("path");

// Actions
function index(req, res, next) {
  next();
}

function create(req, res, next) {
  next();
}

function read(req, res, next) {
  res.locals.user_id = req.params.user_id;
  next();
}

function update(req, res, next) {
  next();
}

function remove(req, res, next) {
  next();
}

// Views
function usersView(req, res, next) {
  res.set('title', 'Show all users.');
  res.renderTemplate(__dirname, 'index');
}

function userView(req, res, next) {
  res.set('title', 'Show a User');
  res.renderTemplate(__dirname, 'show');
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