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

var authenticatedUser;

app.post("/login", function (req, res) {
    console.log(req.body);
    var user = req.body;

    if (!user || !user.username || !user.password) {
        res.status(422).send();
    }

    var usernameMatch = _.find(users, function (u) {
        return u.username === user.username;
    });

    if (usernameMatch.password !== user.password) {
        res.status(401).send();
    }

    authenticatedUser = _.omit(usernameMatch, 'password');
    res.status(200).send(authenticatedUser);
});

app.get("/users/current", function (req, res) {
    if (authenticatedUser) {
        res.status(200).send(authenticatedUser);
    }

    res.status(404).send();
});

app.listen(port);
console.log('Listening on port ' + port);