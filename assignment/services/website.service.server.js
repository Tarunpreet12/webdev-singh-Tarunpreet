module.exports= function (app) {

  var websiteModel = require("../model/website/website.model.server");
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);


  // var websites = [{_id:"123",name:"facebook",developerId:"456",description:"social media"},
  //                 {_id:"234",name:"edx",developerId:"456",description:"education"},
  //                 {_id:"456",name:"instagram",developerId:"345",description:"picutres gallery"},
  //                 {_id:"678",name:"snapchat",developerId:"789",description:" snap video"}];
  //



  function findWebsitesByUser(req, res) {
    var userId = req.params["userId"];
    websiteModel
      .findWebsitesByUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  }


  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    websiteModel
      .findWebsiteById(websiteId)
      .then(function (websites) {
        res.json(websites);
      });
  }


  function createWebsite(req, res){
    var website = req.body;
    var userId = req.params['userId'];
    website.developerId = userId;
    websiteModel
      .createWebsite(userId, website)
      .then(function (website) {
        websiteModel
          .findAllWebsitesForUser(userId)
          .then(function (websites) {
            res.json(websites);
          });
      });
  }

  function updateWebsite(req, res){
    var website = req.body;
    var websiteId = req.params['websiteId'];
    websiteModel
      .updateWebsite(websiteId, website)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function deleteWebsite(req, res){
    var websiteId = req.params['websiteId'];
    websiteModel
      .deleteWebsite(websiteId)
      .then(function (websites) {
        "use strict";
        res.json(websites);
      });
  }

}
