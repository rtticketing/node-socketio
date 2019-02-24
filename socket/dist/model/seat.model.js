"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RTTUser = /** @class */ (function () {
    function RTTUser(name) {
        this.name = name;
    }
    return RTTUser;
}());
exports.RTTUser = RTTUser;
var RTTSeat = /** @class */ (function () {
    function RTTSeat(from, body) {
        this.from = from;
        this.body = body;
    }
    return RTTSeat;
}());
exports.RTTSeat = RTTSeat;
var RTTResponse = /** @class */ (function () {
    function RTTResponse(connction, seats) {
        this.connction = connction;
    }
    return RTTResponse;
}());
exports.RTTResponse = RTTResponse;
