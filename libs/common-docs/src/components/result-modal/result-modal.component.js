"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultModalComponent = void 0;
const core_1 = require("@angular/core");
let ResultModalComponent = class ResultModalComponent {
};
__decorate([
    core_1.Input()
], ResultModalComponent.prototype, "type", void 0);
__decorate([
    core_1.Input()
], ResultModalComponent.prototype, "errorMessage", void 0);
ResultModalComponent = __decorate([
    core_1.Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'result-modal',
        templateUrl: './result-modal.component.html'
    })
], ResultModalComponent);
exports.ResultModalComponent = ResultModalComponent;
//# sourceMappingURL=result-modal.component.js.map