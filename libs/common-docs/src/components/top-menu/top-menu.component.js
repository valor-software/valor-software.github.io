"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopMenuComponent = void 0;
const core_1 = require("@angular/core");
const contactModal_components_1 = require("../contact-modal/contactModal.components");
let TopMenuComponent = class TopMenuComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.showClientsRoute = false;
        this.showBurgerMenu = false;
    }
    toggleClientsRoute(value) {
        this.showClientsRoute = value !== undefined ? !!value : !this.showClientsRoute;
    }
    openModal() {
        this.modalService.open(contactModal_components_1.ContactModalComponent);
    }
};
TopMenuComponent = __decorate([
    core_1.Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'top-menu',
        templateUrl: './top-menu.component.html'
    })
], TopMenuComponent);
exports.TopMenuComponent = TopMenuComponent;
//# sourceMappingURL=top-menu.component.js.map