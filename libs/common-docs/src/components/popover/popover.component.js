"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverComponent = void 0;
const core_1 = require("@angular/core");
const popover_model_1 = require("../../models/popover.model");
let PopoverComponent = class PopoverComponent {
    constructor() {
        this.show = false;
        this.changeShowClientRoute = new core_1.EventEmitter();
        this.popover_str = popover_model_1.popoverStructure;
    }
    changeShow(value) {
        if (value !== undefined) {
            this.changeShowClientRoute.emit(value);
        }
    }
};
__decorate([
    core_1.Input()
], PopoverComponent.prototype, "show", void 0);
__decorate([
    core_1.Output()
], PopoverComponent.prototype, "changeShowClientRoute", void 0);
PopoverComponent = __decorate([
    core_1.Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'menu-popover',
        templateUrl: './popover.component.html'
    })
], PopoverComponent);
exports.PopoverComponent = PopoverComponent;
//# sourceMappingURL=popover.component.js.map