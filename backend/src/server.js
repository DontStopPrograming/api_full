"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
require("dotenv/config");
var user_1 = require("../interface/user");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var port = process.env.PORT || 3000;
app.get('/api/user', function (req, res) {
    res.json(user_1.users);
    console.log(user_1.users);
});
app.get('/api/user/:id', function (req, res) {
    var id = req.params.id;
    var user = user_1.users.find(function (user) { return user.id === id; });
    if (!user) {
        res.status(404).send({ message: 'User not found' });
    }
    else {
        res.json(user);
    }
});
app.listen(port, function () {
    console.log("Running in port ".concat(port));
});
