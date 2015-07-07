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
        password: "mario",
        name: "Mario",
        games: [{ title: "Super Mario Bros. 3", beat: false }, { title: "Super Mario 64", beat: true }, { title: "Super Smash Bros. Melee", beat: false }]
    },
    {
        username: "luigi",
        password: "luigi",
        name: "Luigi",
        games: [{ title: "Super Mario Bros. 2", beat: true }, { title: "Luigi's Mansion", beat: false }, { title: "Mario Kart 64", beat: false }]
    }
];

var authenticatedUser;

/**
 * EXERCISE #3
 * Create a resource for /heartbeat to test Express
 */

// heartbeat function goes here

app.post("/login", function (req, res) {
    /**
     * EXERCISE #6
     * Complete the login function by sending appropriate responses
     */
    var user = req.body;

    if (!user || !user.username || !user.password) {
        // TODO missing parameters, return a 422
    }

    var usernameMatch = _.find(users, function (u) {
        return u.username === user.username;
    });

    if (!usernameMatch || usernameMatch.password !== user.password) {
        // TODO invalid credentials, return a 401
    } else {
        authenticatedUser = _.omit(usernameMatch, 'password');
        // TODO success, return a 200 and the authenticatedUser object

    }
});

app.post("/logout", function (req, res) {
    authenticatedUser = null;

    res.status(200).send();
});

app.get("/users/current", function (req, res) {
    if (authenticatedUser) {
        res.status(200).send(authenticatedUser);
    } else {
        res.status(404).send();
    }
});

app.post("/users/current/games", function (req, res) {
    var game = req.body;

    if (!game || !game.title) {
        res.status(422).send();
    } else if (authenticatedUser) {
        authenticatedUser.games.push(game);
        res.status(200).send();
    } else {
        res.status(401).send();
    }
});

app.put("/users/current/games", function (req, res) {
    var game = req.body;

    if (!game || !game.title) {
        res.status(422).send();
    } else if (authenticatedUser) {
        var gameMatch = _.find(authenticatedUser.games, { title: game.title });
        if (gameMatch) {
            gameMatch.beat = !gameMatch.beat;
            res.status(200).send();
        } else {
            res.status(404).send();
        }
    } else {
        res.status(401).send();
    }
});

app.listen(port);
console.log('Listening on port ' + port);