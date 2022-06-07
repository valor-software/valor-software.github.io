"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetArticlesService = void 0;
const core_1 = require("@angular/core");
const articlesList_token_1 = require("../tokens/articlesList.token");
const titleRefactoringUtil_1 = require("../utils/titleRefactoringUtil");
let GetArticlesService = class GetArticlesService {
    constructor(http, articlesList) {
        var _a;
        this.http = http;
        this.articlesList = articlesList;
        this.apiArray = this.articlesList.map((art, index) => {
            return this.getArticleRequest((index + 1).toString());
        }).reverse();
        if (!((_a = this.refactoredArticleList) === null || _a === void 0 ? void 0 : _a.length)) {
            this.refactoredArticleList = this.articlesList.map(item => {
                return titleRefactoringUtil_1.blogTitleRefactoring(item);
            }).reverse();
        }
    }
    getArticleRequest(art) {
        return this.http.get(`assets/blog/articles/${art}.json`);
    }
    getPreviewArticle() {
        var _a;
        return (_a = this.apiArray) === null || _a === void 0 ? void 0 : _a.slice(0, 3);
    }
    getFullListOfArticles() {
        return this.apiArray;
    }
    getArticlesByNames(value) {
        var _a;
        if (!((_a = this.articlesList) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const articlesList = [...this.articlesList];
        if (articlesList === null || articlesList === void 0 ? void 0 : articlesList.length) {
            return value.map(art => this.getArticleRequest(art));
        }
        return;
    }
    getRefactoredArticlesList() {
        return this.refactoredArticleList;
    }
    getTitleArticleIndex(title) {
        var _a, _b;
        if (!((_a = this.refactoredArticleList) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        let index = (_b = this.refactoredArticleList) === null || _b === void 0 ? void 0 : _b.findIndex(item => item === title || item === titleRefactoringUtil_1.checkHTMLExtension(title));
        if (index || index === 0) {
            index = index + 1;
            return index;
        }
        return;
    }
    getRefactoredTitle(title) {
        return titleRefactoringUtil_1.blogTitleRefactoring(title);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getHTMLSource(link) {
        if (!link) {
            return;
        }
        return this.http.get(`assets/blog/adoc/${link}.adoc`, { responseType: 'text' });
    }
};
GetArticlesService = __decorate([
    core_1.Injectable({ providedIn: 'platform' }),
    __param(1, core_1.Inject(articlesList_token_1.ARTICLES_LIST))
], GetArticlesService);
exports.GetArticlesService = GetArticlesService;
//# sourceMappingURL=getArticles.service.js.map