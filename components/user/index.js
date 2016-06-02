module.exports = function (app) {
  var express = require('express');
  var router = express.Router();

  // Controllers
  var userController = require('./user.controller.js');

  /* GET users listing. */
  router.route('/')
    .get(userController.index)
    .post(userController.create)
    .all(userController.views.users);

  router.route('/:user_id')
    .get(userController.read)
    .patch(userController.update)
    .delete(userController.remove)
    .all(userController.views.user);

  app.use('/users', router);
};
