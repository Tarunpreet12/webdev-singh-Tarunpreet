module.exports= function (app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);


  var websites = [{_id:"123",name:"facebook",developerId:"456",description:"social media"},
                  {_id:"234",name:"edx",developerId:"456",description:"education"},
                  {_id:"456",name:"instagram",developerId:"345",description:"picutres gallery"},
                  {_id:"678",name:"snapchat",developerId:"789",description:" snap video"}];




  function findWebsitesByUser(req, res) {
    var userId = req.params["userId"];
    var web =  websites.filter(function (website) {
      return website.developerId === userId;
    });
    if(web){
      res.json(web);
    }
    else{
      res.status(404).send({ error: "Searched Website not Found" });
    }
  }


  function findWebsiteById(req, res){
    var websiteId = req.params["websiteId"];
    var web = websites.find(function (website) {
      return website._id === websiteId;
    });
    if(web){
      res.json(web);
    }
    else{
      res.status(404).send({ error: "Website not Found" });
    }
  }


  function createWebsite(req, res){
    var webId= Math.random().toString();
    var website = req.body;
    website._id = webId;
    websites.push(website);
    console.log(website);
    res.json({"web_id":webId});
  }

  function updateWebsite(req, res){
    var websiteId = req.params["websiteId"];
    var update = websites.find(function (website) {
      return website._id === websiteId;
    });
    update.name = req.body.name;
    update.description= req.body.description;
    res.json(update);
  }

  function deleteWebsite(req, res){
    var websiteId = req.params["websiteId"];
    var w = websites.find(function (website) {
      return website._id === websiteId;
    });

    var index = websites.indexOf(w);
    websites.splice(index,1);
    res.json(w);
  }

}
