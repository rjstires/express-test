var path = require("path");

module.exports = function (express) {

  express.response.renderTemplate = function (directory, view, options, callback) {
    var app = this.req.app;
    var done = callback;
    var opts = options || {};
    var req = this.req;
    var self = this;

    // support callback function as second arg
    if (typeof options === 'function') {
      done = options;
      opts = {};
    }

    // merge res.locals
    opts._locals = self.locals;

    // default callback to respond
    done = done || function (err, str) {
        if (err) return req.next(err);
        self.send(str);
      };

    // render
    view = path.resolve(directory, 'views', view);
    app.render(view, opts, done);
  };

};