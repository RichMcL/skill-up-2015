var port = 8080;
var express = require('express');
var bodyParser = require("body-parser");
var _ = require('lodash');

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

var users = [
    {
        username: "mario",
        password: "mario"
    }
];

app.post("/login", function(req, res){
    console.log(req.body);
    var user = req.body;

    var userMatch = _.find(users, function(u) {
        return u.username === user.username;
    });

    res.send(userMatch);
});

app.listen(port);
console.log('Listening on port ' + port);