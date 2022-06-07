"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesRouteService = void 0;
const core_1 = require("@angular/core");
let ArticlesRouteService = class ArticlesRouteService {
    constructor(router) {
        this.router = router;
    }
    route(title) {
        let link = title;
        while (link.match(' ' || ':' || '–' || '—')) {
            link = link.replace(' ', '_');
            link = link.replace(':', '');
            link = link.replace('–', '_');
            link = link.replace('—', '_');
            link = link.replace('\'', '_');
        }
        this.router.navigate(['articles', link]);
    }
};
ArticlesRouteService = __decorate([
    core_1.Injectable({ providedIn: 'platform' })
], ArticlesRouteService);
exports.ArticlesRouteService = ArticlesRouteService;
//# sourceMappingURL=articlesRoute.service.js.map