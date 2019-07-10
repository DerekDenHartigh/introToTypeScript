"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./talker/hello");
//or // import * from './talker/hello' as...;
var moment_1 = __importDefault(require("moment"));
console.log(moment_1.default().format('LLLL'));
console.log(hello_1.hello("Derek"));
//# sourceMappingURL=index.js.map