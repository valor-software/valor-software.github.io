"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSlicePipe = void 0;
const core_1 = require("@angular/core");
let CustomSlicePipe = class CustomSlicePipe {
    transform(value, symbolsAmount = 40) {
        if (!value || !symbolsAmount) {
            return value;
        }
        const myReg = new RegExp("^.{" + symbolsAmount + "}\\w*");
        const a = value.match(myReg);
        let res = a === null || a === void 0 ? void 0 : a[0];
        if (res && res.length && res.length > symbolsAmount) {
            const textArray = res === null || res === void 0 ? void 0 : res.split(' ');
            res = textArray === null || textArray === void 0 ? void 0 : textArray.slice(0, (textArray === null || textArray === void 0 ? void 0 : textArray.length) - 1).join(' ');
        }
        if ((res === null || res === void 0 ? void 0 : res.length) && (res === null || res === void 0 ? void 0 : res.length) < value.length) {
            res = `${res} ...`;
        }
        return res || value;
    }
};
CustomSlicePipe = __decorate([
    core_1.Pipe({ name: 'customSlice' })
], CustomSlicePipe);
exports.CustomSlicePipe = CustomSlicePipe;
//# sourceMappingURL=customSlice.pipe.js.map