var express = require('express');
var app = express();
var greetedNames = [];
//create a route
app.get('/greetings/:name', function (req, res) {
   res.send('Hello, ' + req.params.name);
   greetedNames.push(req.params.name);
});



// route for greeted names
app.get('/greeted', function(req, res){
res.send(greetedNames)
})
//route for the counter/username to show how many times a user has been greeted
app.get('/counter/username', function(req, res){
  res.
})

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
