"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function tagRow(arr) {
    var canBeLeftConnected = !!arr[0];
    var canBeRigthConnected = !!arr[arr.length - 1];
    var newArr = __spreadArray([], arr, true);
    for (var index = 1; index < newArr.length - 2; index++) {
        var num1 = Math.abs(arr[index]);
        var num2 = Math.abs(arr[index + 1]);
        if (num1 === num2 && num1 !== 0 && num1 !== 2) {
            newArr[index] = -num1;
            newArr[index + 1] = -num2;
        }
        if (canBeLeftConnected) {
            if (num1) {
                newArr[index] = 2;
            }
            if (num1 === num2 && num1 !== 0) {
                newArr[index] = 2;
                newArr[index + 1] = 2;
            }
            else {
                canBeLeftConnected = false;
            }
        }
    }
    for (var index = newArr.length - 2; index > 1; index--) {
        if (canBeRigthConnected) {
            var num1 = Math.abs(arr[index]);
            var num2 = Math.abs(arr[index - 1]);
            if (num1) {
                newArr[index] = 2;
            }
            if (num1 === num2 && num1 !== 0) {
                newArr[index] = 2;
                newArr[index - 1] = 2;
            }
            else {
                break;
            }
        }
    }
    return newArr;
}
exports.default = tagRow;
