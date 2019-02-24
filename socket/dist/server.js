"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var socketIo = require("socket.io");
var RTTServer = /** @class */ (function () {
    function RTTServer() {
        this.createApp();
        this.configuration();
        this.createServer();
        this.sockets();
        this.listen();
    }
    RTTServer.prototype.createApp = function () {
        this.app = express();
    };
    RTTServer.prototype.createServer = function () {
        this.server = http_1.createServer(this.app);
    };
    RTTServer.prototype.sockets = function () {
        this.io = socketIo(this.server);
    };
    RTTServer.prototype.configuration = function () {
        this.port = process.env.PORT || RTTServer.PORT;
    };
    RTTServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log("Running server on port ", _this.port);
        });
        this.io.on("connect", function (socket) {
            console.log("connected client on port", _this.port);
            socket.on("message", function (res) {
                console.log("[server]response", JSON.stringify(res));
                _this.io.emit("message", res);
            });
            socket.on("disconnect", function () {
                console.log("Bye");
            });
        });
    };
    RTTServer.prototype.getApp = function () {
        return this.app;
    };
    RTTServer.PORT = 8080;
    return RTTServer;
}());
exports.RTTServer = RTTServer;
