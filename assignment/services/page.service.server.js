module.exports= function (app) {

  var pageModel = require("../model/page/page.model.server");
  app.post("/api/website/:websiteId/page",createPage);
  app.get("/api/website/:websiteId/page" ,findPageByWebsiteId);
  app.get("/api/page/:pageId",findPageByID);
  app.put("/api/page/:pageId",updatePage);
  app.delete("/api/page/:pageId",deletePage);
  // var pages = [
  //   {_id:"321",name:"post1",websiteId:"123",description:"Lorem NVLFNB"},
  //   {_id:"432",name:"Blog",websiteId:"123",description:"Lorem 124 5325"},
  //   {_id:"313",name:"post3",websiteId:"123",description:"Lorem sdjslaf"}
  // ];

  function  createPage(req,res){
    var page = req.body;
    var websiteId = req.params['websiteId'];
    pageModel
      .createPage(websiteId, page)
      .then(function (page) {
        pageModel
          .findPageByWebsiteId(websiteId)
          .then(function (pages) {
            res.json(pages);
          });
      });
  }

  function updatePage(req,res){

    var pageId = req.params["pageId"];
    var page = req.body;
    pageModel.updatePage(pageId, page).then(function(updatepage){
    res.json(updatepage);
    });
  }

  function  deletePage(req,res){
    var pageId = req.params["pageId"];
    pageModel.deletePage(pageId).then(function(deletepage){
      res.json(deletepage);
    })
  }

  function findPageByWebsiteId(req,res){
    var websiteId = req.params["websiteId"];
    pageModel.findPageByWebsiteId(websiteId).then(function (websiteallpages) {
      res.json(websiteallpages);
    });
  }

  function  findPageByID(req,res) {
    var pageId = req.params["pageId"];
    pageModel.findPageByID(pageId).then(function(mypage){
      res.json(mypage);
    });
  }

}
