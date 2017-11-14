var mongoose = require('mongoose');
var WidgetSchema = require("./widget.schema.server");
var PageModel = require("../page/page.model.server");
var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);


WidgetModel.createWidget = createWidget;
WidgetModel.findWidgetByPageId = findWidgetByPageId;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;

module.exports = WidgetModel;

function createWidget(pageId, widget) {
  var newWidget = null;
  return WidgetModel.create(widget)
    .then(function (widget) {
      newWidget = widget;
      PageModel.findPageByID(pageId)
        .then(function (page) {
          page.widgets.push(newWidget);
          return page.save();
        });
    });
}

function findWidgetByPageId(pageId) {
  return WidgetModel.find({pageId: pageId})
    .populate('pageId')
    .exec();
}

function findWidgetById(widgetId) {
  return WidgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  return WidgetModel.deleteOne({_id: widgetId});
}
