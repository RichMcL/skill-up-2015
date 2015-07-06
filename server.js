var port = 8080;
var express = require('express');

var app = express();

app.use(express.static(__dirname));

var users = [
    {
        username: "mario",
        password: "mario"
    }
];

app.post("/login", function(req, res){
    res.send('XHR Response!');
});

app.listen(port);
console.log('Listening on port ' + port);