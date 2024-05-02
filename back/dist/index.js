"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var envs_1 = __importDefault(require("./config/envs"));
server_1.default.listen(envs_1.default, function () {
    console.log("server listening on  https://localhost:".concat(envs_1.default));
});
