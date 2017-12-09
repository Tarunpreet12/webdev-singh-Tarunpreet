module.exports = function (app) {

  require("./services/user.service.server.js")(app);
  require("./services/website.service.server.js")(app);
  require("./services/page.service.server.js")(app);
  require("./services/widget.service.server.js")(app);
  require('./test-mongodb/app')(app);
  var db = require('./model/models.server');
};

