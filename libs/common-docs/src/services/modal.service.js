"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let ModalService = class ModalService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.state = new rxjs_1.BehaviorSubject(false);
    }
    open(component) {
        if (this.componentRef) {
            return;
        }
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.attachView(this.componentRef.hostView);
        document.body.appendChild(this.componentRef.location.nativeElement);
        this.state.next(true);
    }
    close() {
        if (!this.componentRef) {
            return;
        }
        this.state.next(false);
        setTimeout(() => {
            if (this.componentRef) {
                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.componentRef = undefined;
            }
        }, 300);
    }
};
ModalService = __decorate([
    core_1.Injectable({
        providedIn: 'platform',
    })
], ModalService);
exports.ModalService = ModalService;
//# sourceMappingURL=modal.service.js.map