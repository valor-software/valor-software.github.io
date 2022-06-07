"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesBlockComponent = void 0;
const core_1 = require("@angular/core");
const services_model_1 = require("./services.model");
let ServicesBlockComponent = class ServicesBlockComponent {
    constructor(router) {
        this.router = router;
        this.servicesInfList = services_model_1.servicesList;
    }
    routeLink(link) {
        this.router.navigate([`/${link}`]);
    }
};
__decorate([
    core_1.Input()
], ServicesBlockComponent.prototype, "preview", void 0);
ServicesBlockComponent = __decorate([
    core_1.Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'services-block',
        templateUrl: './services-block.component.html'
    })
], ServicesBlockComponent);
exports.ServicesBlockComponent = ServicesBlockComponent;
//# sourceMappingURL=services-block.component.js.map