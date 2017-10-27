

module.exports = function(app) {
  app.post('/api/user' , createUser);
  app.get('/api/user', findUser);
  app.get('/api/user/:userId',findUserById );
  app.put('/api/user/:userId', updateUser);
  app.delete('api/user/:userId', deleteUser);
  var users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

function findUserById(req, res) {
  var userId = req.params["userId"];
  var user = users.find(function (user){
    return user._id === userId;
  });
  res.json(user);
}

  function findUser(req, res){
    var username = req.query['username'];
    var password = req.query['password'];
    if(userName && password) {
      finduserByCredentails(req, res);
    }else if (username) {
      findUserByUsername(req, res);
    }
  }

function findUserByUsername(req, res) {
  var username = req.query["username"];
  var user = users.find(function(user){
    return user.username === username;
  });
  res.json(user);
}

  function finduserByCredentails(req,res){
    console.log('yes');
    var username = req.query['username'];
    var password = req.query['password'];
    for(var i=0;i<=users.length;i++)
    {
      if(users[i].username===username && users[i].password===password)
      {
        res.json(users[i]);
        return;
      }
    }
    res.json(null);
  }
  function findUserById(req,res){
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    if(user){
      res.json(user);
    }
    else{
      res.status(404).send({ error: "User not Found" });
    }
  }



function createUser(req, res) {
  var newUser = req.body;
  newUser._id = '' + users.length;
  users.push(newUser);
  res.json(newUser);
}



function updateUser(req, res) {
  var uid = req.params["userId"];
  var newUser = req.body;
  for(var i = 0; i < users.length; i++) {
    if(users[i]._id === uid) {
      users[i]= newUser;
    }
    res.json(users);
  }
}

function deleteUser(req, res) {
  var uid = req.params["userId"];
  for(var i = 0; i < users.length; i++) {
    if(users[i]._id === uid ) {
      users.splice(i, 1);
    }
  }
  res.json(users);
}

};
