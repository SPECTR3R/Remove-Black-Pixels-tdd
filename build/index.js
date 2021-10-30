"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello World');
var tagRow_1 = __importDefault(require("./models/tagRow"));
var matrix = [
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1]
];
var transpose = function (a) { return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); }); };
var matrix2 = matrix.map(function (row) {
    return (0, tagRow_1.default)(row);
});
var transposedMatrix2 = transpose(matrix2);
transposedMatrix2.forEach(function (row) {
    console.log((0, tagRow_1.default)(row));
});
