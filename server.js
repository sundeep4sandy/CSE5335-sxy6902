var express  = require('express');
var app = express();
var fs = require('fs');
app.set('port', (process.env.PORT || 5000));

app.get('/getData',function(req,res){
    fs.readFile("data.json",'utf8',function(err,data){
    console.log(data);
    res.end(data);
     });
})

app.get('/', function(request, response) {
  response.sendFile( __dirname + "/" + "index.html" );
});

app.get('/main.ctrl.js', function(request, response) {
  response.sendFile( __dirname + "/" + "main.ctrl.js" );
});
app.get('/app.js', function(request, response) {
  response.sendFile( __dirname + "/" + "app.js" );
});
app.get('/graph.js', function(request, response) {
  response.sendFile( __dirname + "/" + "graph.css" );
});

var server = app.listen(app.get('port'), function () {
     console.log('Node app is running on port', app.get('port'));
})