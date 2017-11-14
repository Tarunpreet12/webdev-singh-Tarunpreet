module.exports= function (app) {

  module.exports = function (app) {
    var multer = require('multer');
    var upload = multer({dest: __dirname + '/../../public/uploads'});

    var widgetModel = require("../model/widget/widget.model.server");
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findWidgetByPageId);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);


    function createWidget(req, res) {
      var pageId = req.params["pageId"];
      var widget = req.body;
      widget.pageId = pageId;
      widgetModel.createWidget(widget)
        .then(function (widget) {
          res.json(widget);
        });
    }


    function updateWidget(req, res) {
      var widgetId = req.params["widgetId"];
      var widget = req.body;

      widgetModel.updateWidget(widgetId, widget)
        .then(function (status) {
          res.json(status);
        });
    }

    function deleteWidget(req, res) {
      var widgetId = req.params["widgetId"];
      widgetModel.deleteWidget(widgetId)
        .then(function (w) {
          res.json(w);
        });
    }


    function findWidgetByPageId(req, res) {
      var pageId = req.params["pageId"];
      widgetModel.findWidgetByPageId(pageId)
        .then(function (widgets) {
          if (widgets) {
            res.json(widgets);
          }
          else {
            res.status(404).send({error: "Widget not Found"});
          }
        });
    }

    function findWidgetById(req, res) {
      var widgetId = req.params["widgetId"];
      widgetModel.findWidgetById(widgetId)
        .then(function (widget) {
          if (widget) {
            res.json(widget);
          }
          else {
            res.status(404).send({error: "widget not found for page"});
          }
        });
    }


  }
}
