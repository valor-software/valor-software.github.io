"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeoService = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const router_1 = require("@angular/router");
const ex = {
    '/': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'We provide design, architecture, engineering, product guidance and open source. Leader in the Angular development space since 2013. Creators of ngx-bootstrap.',
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Home - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'We provide design, architecture, engineering, product guidance and open source. Leader in the Angular development space since 2013. Creators of ngx-bootstrap.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Home - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'We provide design, architecture, engineering, product guidance and open source. Leader in the Angular development space since 2013. Creators of ngx-bootstrap.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Home - Valor Software'
        }
    ],
    'services': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'We provide enterprise-level service, covering all areas of software development: iOS, Android, and Web, as well as offering professional UX/UI expertise'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Services - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'We provide enterprise-level service, covering all areas of software development: iOS, Android, and Web, as well as offering professional UX/UI expertise'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Services - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'We provide enterprise-level service, covering all areas of software development: iOS, Android, and Web, as well as offering professional UX/UI expertise'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Services - Valor Software'
        }
    ],
    'portfolio': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'They are people and organizations with ambitious missions. They want to unleash the power of software for their cause or business. We help them envisage, design and deliver.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Portfolio - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'They are people and organizations with ambitious missions. They want to unleash the power of software for their cause or business. We help them envisage, design and deliver.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Portfolio - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'They are people and organizations with ambitious missions. They want to unleash the power of software for their cause or business. We help them envisage, design and deliver.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Portfolio - Valor Software'
        }
    ],
    'careers': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Like to be involved in different projects within your favorite technology? We are glad to offer you employment opportunities you dreamed. We believe that you are talented!'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Careers - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Like to be involved in different projects within your favorite technology? We are glad to offer you employment opportunities you dreamed. We believe that you are talented!'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Careers - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Like to be involved in different projects within your favorite technology? We are glad to offer you employment opportunities you dreamed. We believe that you are talented!'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Careers - Valor Software'
        }
    ],
    'blog': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Useful articles from experienced Valor specialists in various spheres of digital development'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Blog - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Useful articles from experienced Valor specialists in various spheres of digital development'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Blog - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Useful articles from experienced Valor specialists in various spheres of digital development'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Blog - Valor Software'
        }
    ],
    'clients/startups': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Valor Software helps startups solidify their vision, develop a minimum viable product (MVP), and go from idea to value-generating solution. Launch to market with a Cloud-First scale and prepare for fundraising.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Startups - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Valor Software helps startups solidify their vision, develop a minimum viable product (MVP), and go from idea to value-generating solution. Launch to market with a Cloud-First scale and prepare for fundraising.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Startups - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Valor Software helps startups solidify their vision, develop a minimum viable product (MVP), and go from idea to value-generating solution. Launch to market with a Cloud-First scale and prepare for fundraising.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Startups - Valor Software'
        }
    ],
    'clients/smbs': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Seeking a reliable partner who will help your business grow and save costs? Valor Software helps small and medium-sized businesses (SMBs) ramp up teams with needed expertise, migrate from legacy systems, and integrate edge technologies.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'SMBs - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Seeking a reliable partner who will help your business grow and save costs? Valor Software helps small and medium-sized businesses (SMBs) ramp up teams with needed expertise, migrate from legacy systems, and integrate edge technologies.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'SMBs - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Seeking a reliable partner who will help your business grow and save costs? Valor Software helps small and medium-sized businesses (SMBs) ramp up teams with needed expertise, migrate from legacy systems, and integrate edge technologies.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'SMBs - Valor Software'
        }
    ],
    'clients/enterprises': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'We help solve the toughest challenges within your enterprise in a snap of fingers. It doesn’t matter if it’s cloud migration, optimization, implementation of new technologies, or underpinning everything with security.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Enterprises - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'We help solve the toughest challenges within your enterprise in a snap of fingers. It doesn’t matter if it’s cloud migration, optimization, implementation of new technologies, or underpinning everything with security.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Enterprises - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'We help solve the toughest challenges within your enterprise in a snap of fingers. It doesn’t matter if it’s cloud migration, optimization, implementation of new technologies, or underpinning everything with security.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Enterprises - Valor Software'
        }
    ],
    'clients/non-profit': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Valor Software can create unique technology-enabled solutions for socially meaningful purposes and help you raise funds. We deliver the required scope of work within the restricted budget and timeframe and provide post-launch support and maintenance.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Non-profit Organizations - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Valor Software can create unique technology-enabled solutions for socially meaningful purposes and help you raise funds. We deliver the required scope of work within the restricted budget and timeframe and provide post-launch support and maintenance.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Non-profit Organizations - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Valor Software can create unique technology-enabled solutions for socially meaningful purposes and help you raise funds. We deliver the required scope of work within the restricted budget and timeframe and provide post-launch support and maintenance.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Non-profit Organizations - Valor Software'
        }
    ]
};
var routeValues;
(function (routeValues) {
    routeValues["default"] = "/";
    routeValues["clients"] = "clients";
    routeValues["services"] = "services";
    routeValues["blog"] = "blog";
    routeValues["portfolio"] = "portfolio";
    routeValues["careers"] = "careers";
})(routeValues || (routeValues = {}));
;
let SeoService = class SeoService {
    constructor(titleService, metaTagService, router, getArticle, getPortfolio) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.router = router;
        this.getArticle = getArticle;
        this.getPortfolio = getPortfolio;
        this.metaList = ex;
        this.$routEvents = router.events.pipe(operators_1.filter(event => event instanceof router_1.NavigationEnd)).subscribe((event) => {
            var _a, _b;
            const url = (_b = (_a = this.router.parseUrl(this.router.url).root.children) === null || _a === void 0 ? void 0 : _a.primary) === null || _b === void 0 ? void 0 : _b.segments;
            this.initCurrentTags(this.editRouteUrl(url));
        });
    }
    editRouteUrl(value) {
        if (!value) {
            return routeValues.default;
        }
        if ((value === null || value === void 0 ? void 0 : value.length) > 1) {
            let info;
            if (value[0].path === 'blog') {
                this.getBlogInfo(value[1].path).subscribe(res => {
                    this.initCurrentTagsWithParams({
                        title: res.title,
                        description: res.seoDescription
                    });
                });
            }
            if (value[0].path === 'portfolio') {
                this.getProjectInfo(value[1].path).subscribe(res => {
                    this.initCurrentTagsWithParams({
                        title: res.name,
                        description: res.description
                    });
                });
            }
            if (value[0].path === 'clients') {
                const tags = this.metaList[`${value[0].path}/${value[1].path}`];
                if (tags === null || tags === void 0 ? void 0 : tags.length) {
                    this.addTags(tags);
                }
            }
            return '';
        }
        return routeValues[value[0].path];
    }
    initCurrentTags(route) {
        const tags = this.metaList[route];
        if (tags === null || tags === void 0 ? void 0 : tags.length) {
            this.addTags(tags);
        }
    }
    addTags(tags) {
        tags.map(item => {
            const nameValue = item.nameValue.includes(':') ? `'${item.nameValue}'` : item.nameValue;
            if (this.checkTag(`${item.name}=${nameValue}`, item.nameType)) {
                const obj = {
                    [item.name]: item.nameValue, content: item.content
                };
                item.nameType === 'meta' ? this.metaTagService.updateTag(obj) : this.titleService.setTitle(item.content);
            }
            else {
                const obj = {
                    [item.name]: item.nameValue, content: item.content
                };
                item.nameType === 'meta' ? this.metaTagService.addTag(obj) : this.titleService.setTitle(item.content);
            }
        });
    }
    checkTag(value, type) {
        const tag = type === 'meta' ? this.metaTagService.getTag(value) : this.titleService.getTitle();
        return !!tag;
    }
    getBlogInfo(title) {
        return this.getArticle.getArticleRequest(title);
    }
    getProjectInfo(title) {
        return this.getPortfolio.getPortfolioRequest(title);
    }
    initCurrentTagsWithParams(value) {
        const model = [
            {
                nameType: 'meta',
                name: 'name',
                nameValue: 'description',
                content: value.description
            },
            {
                nameType: 'meta',
                name: 'property',
                nameValue: 'og:title',
                content: value.title
            },
            {
                nameType: 'meta',
                name: 'property',
                nameValue: 'og:description',
                content: value.description
            },
            {
                nameType: 'meta',
                name: 'property',
                nameValue: 'twitter:title',
                content: value.title
            },
            {
                nameType: 'meta',
                name: 'property',
                nameValue: 'twitter:description',
                content: value.description
            },
            {
                nameType: 'title',
                name: 'title',
                nameValue: 'title',
                content: value.title
            }
        ];
        this.addTags(model);
    }
};
SeoService = __decorate([
    core_1.Injectable({ providedIn: 'platform' })
], SeoService);
exports.SeoService = SeoService;
//# sourceMappingURL=seo.service.js.map