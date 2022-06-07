import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {filter} from "rxjs/operators";
import {NavigationEnd, Router, UrlSegment} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {GetArticlesService} from "./getArticles.service";
import { GetPortfolioService } from "@valor-software/portfolio";

const ex: {[key: string] : { nameType: 'meta' | 'title', name: string, nameValue: string, content: string }[]} = {
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
            content:'We provide enterprise-level service, covering all areas of software development: iOS, Android, and Web, as well as offering professional UX/UI expertise'
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
    'projects': [
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
    'articles': [
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

enum routeValues {
    default = '/',
    clients = 'clients',
    services = 'services',
    blog = 'articles',
    portfolio = 'projects',
    careers = 'careers'

};

@Injectable({providedIn: 'platform'})
export class SeoService {
    metaList: typeof ex = ex;
    $routEvents: Subscription;

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
        private router: Router,
        private getArticle: GetArticlesService,
        private getPortfolio: GetPortfolioService
    ){
        this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            const url = this.router.parseUrl(this.router.url).root.children?.primary?.segments;
            this.initCurrentTags(this.editRouteUrl(url));
        });
    }

    editRouteUrl(value: UrlSegment[]): string {
        if (!value) {
            return routeValues.default;
        }

        if (value?.length > 1) {
            let info;
            if (value[0].path === 'blog') {
                this.getBlogInfo(value[1].path).subscribe(res => {
                    this.initCurrentTagsWithParams({
                        title: res.title,
                        description: res.seoDescription
                    });
                });
            }

            if (value[0].path === 'projects') {
                this.getProjectInfo(value[1].path)?.subscribe(res => {
                    this.initCurrentTagsWithParams({
                        title: res.name,
                        description: res.description
                    });
                });
            }

            if (value[0].path === 'clients') {
                const tags = this.metaList[`${value[0].path}/${value[1].path}`];
                if (tags?.length) {
                    this.addTags(tags);
                }
            }

            return '';
        }

        return routeValues[value[0].path as keyof typeof routeValues];

    }

    private initCurrentTags(route?: string) {
        const tags = this.metaList[route as keyof typeof ex];
        if (tags?.length) {
            this.addTags(tags);
        }
    }

    addTags(tags: { nameType: 'meta' | 'title', name: string, nameValue: string, content: string }[]) {
        tags.map(item => {
            const nameValue = item.nameValue.includes(':') ? `'${item.nameValue}'` : item.nameValue;
            if (this.checkTag(`${item.name}=${nameValue}`, item.nameType)) {
                const obj: { [prop: string]: string; } = {
                    [item.name]: item.nameValue, content: item.content
                };
                item.nameType === 'meta' ? this.metaTagService.updateTag(obj) : this.titleService.setTitle(item.content);
            } else {
                const obj: { [prop: string]: string; } = {
                    [item.name]: item.nameValue, content: item.content
                };
                item.nameType === 'meta' ? this.metaTagService.addTag(obj) : this.titleService.setTitle(item.content);
            }
        });
    }

    checkTag(value: string, type: 'meta' | 'title'): boolean {
        const tag = type === 'meta' ? this.metaTagService.getTag(value) : this.titleService.getTitle();
        return !!tag;
    }

    getBlogInfo(title: string): Observable<any> {
        return this.getArticle.getArticleRequest(title);
    }

    getProjectInfo(title: string): Observable<any> | undefined {
        const index = this.getPortfolio.getTitleIndex(title);
        if (!index) {
           return;
        }

        return this.getPortfolio.getPortfolioRequest(index?.toString());
    }

    initCurrentTagsWithParams(value: {title: string, description: string}) {
        const model: { nameType: 'meta' | 'title', name: string, nameValue: string, content: string }[] = [
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

}