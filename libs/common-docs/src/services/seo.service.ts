import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { GetArticlesService } from "./getArticles.service";
import { GetPortfolioService } from "./getPortfolio.service";
import { filter } from "rxjs/operators";
import { NavigationEnd, Router, UrlSegment } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { checkHTMLExtension } from "../utils/titleRefactoringUtil";
import { OLD_ROUTES_FROM_OLD_SITE } from "../tokens/linksFromOldSite.token";

const ex: { [key: string]: { nameType: 'meta' | 'title', name: string, nameValue: string, content: string }[] } = {
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
    'services/quality-assurance': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Valor provides an organized and comprehensive approach towards quality assurance because testing is not a project phase, it actually drives the development forward.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Quality Assurance - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Valor provides an organized and comprehensive approach towards quality assurance because testing is not a project phase, it actually drives the development forward.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Quality Assurance - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Valor provides an organized and comprehensive approach towards quality assurance because testing is not a project phase, it actually drives the development forward.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Quality Assurance - Valor Software'
        }
    ],
    'services/devops': [
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
            content: 'DevOps - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'As the development world is getting even more agile, organizations need to follow to keep pace with the users’ expectations and needs. Valor Software will help you satisfy your audience’s insatiable desire for the newest features and get a competitive advantage with digital transformation.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'DevOps - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'As the development world is getting even more agile, organizations need to follow to keep pace with the users’ expectations and needs. Valor Software will help you satisfy your audience’s insatiable desire for the newest features and get a competitive advantage with digital transformation.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'DevOps - Valor Software'
        }
    ],
    'services/software-engineering': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Staying ahead of the technology curve, we cover frontend, backend, and mobile development. Get an advanced and easily-maintainable product that grants high responsiveness and a smooth user journey.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Software Engineering - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Staying ahead of the technology curve, we cover frontend, backend, and mobile development. Get an advanced and easily-maintainable product that grants high responsiveness and a smooth user journey.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Software Engineering - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Staying ahead of the technology curve, we cover frontend, backend, and mobile development. Get an advanced and easily-maintainable product that grants high responsiveness and a smooth user journey.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Software Engineering - Valor Software'
        }
    ],
    'services/design': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Designing solutions with users in mind, we strive to make their journey an intuitive and breathtaking adventure. Therefore before proceeding with UI, we help you define the frustrations of your audience and cover them with optimal UX.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Design - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Designing solutions with users in mind, we strive to make their journey an intuitive and breathtaking adventure. Therefore before proceeding with UI, we help you define the frustrations of your audience and cover them with optimal UX.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Design - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Designing solutions with users in mind, we strive to make their journey an intuitive and breathtaking adventure. Therefore before proceeding with UI, we help you define the frustrations of your audience and cover them with optimal UX.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Design - Valor Software'
        }
    ],
    'services/support-&-Maintenance': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'Valor can help you in various ways, starting from the support of solutions that leverage open-source technologies up to the scale of your enterprise-level systems and the transformation of your customer service with artificial intelligence (AI).'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Support & Maintenance - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'Valor can help you in various ways, starting from the support of solutions that leverage open-source technologies up to the scale of your enterprise-level systems and the transformation of your customer service with artificial intelligence (AI).'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Support & Maintenance - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'Valor can help you in various ways, starting from the support of solutions that leverage open-source technologies up to the scale of your enterprise-level systems and the transformation of your customer service with artificial intelligence (AI).'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Support & Maintenance - Valor Software'
        }
    ],
    'services/product-ownership-and-project-management': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'A product owner is a person who always knows what’s the next turn that the product should take to succeed. Valor’s PO will help you transform your product vision into user stories and ensure your solution moves towards higher user satisfaction and draws new loyal audiences. While PO looks at a project from the product value perspective, the project manager is up to every single organizational detail. Valor’s PM will take charge of the product delivery process and help every team member perform at their best.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Product Ownership and Project Management - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'A product owner is a person who always knows what’s the next turn that the product should take to succeed. Valor’s PO will help you transform your product vision into user stories and ensure your solution moves towards higher user satisfaction and draws new loyal audiences. While PO looks at a project from the product value perspective, the project manager is up to every single organizational detail. Valor’s PM will take charge of the product delivery process and help every team member perform at their best.'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Product Ownership and Project Management - Valor Software'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'A product owner is a person who always knows what’s the next turn that the product should take to succeed. Valor’s PO will help you transform your product vision into user stories and ensure your solution moves towards higher user satisfaction and draws new loyal audiences. While PO looks at a project from the product value perspective, the project manager is up to every single organizational detail. Valor’s PM will take charge of the product delivery process and help every team member perform at their best.'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Product Ownership and Project Management - Valor Software'
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
    ],
    'press-release/rs-pack-rust-based-web-bundler': [
        {
            nameType: 'meta',
            name: 'name',
            nameValue: 'description',
            content: 'The Rust-Based Web Bundler that Combines High Performance with webpack Interoperability'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:title',
            content: 'Announcing Rspack: A new and high-performance frontend bundler'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'og:description',
            content: 'The Rust-Based Web Bundler that Combines High Performance with webpack Interoperability'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:title',
            content: 'Announcing Rspack: A new and high-performance frontend bundler'
        },
        {
            nameType: 'meta',
            name: 'property',
            nameValue: 'twitter:description',
            content: 'The Rust-Based Web Bundler that Combines High Performance with webpack Interoperability'
        },
        {
            nameType: 'title',
            name: 'title',
            nameValue: 'title',
            content: 'Announcing Rspack: A new and high-performance frontend bundler'
        }
    ]
};

enum routeValues {
    default = '/',
    clients = 'clients',
    services = 'services',
    articles = 'articles',
    projects = 'projects',
    careers = 'careers',
    pressRelease = 'press-release',

};

@Injectable({ providedIn: 'platform' })
export class SeoService {
    metaList: typeof ex = ex;
    $routEvents: Subscription;
    brokenArticlesRoutes?: { [key: string]: string };

    constructor(
        private titleService: Title,
        private metaTagService: Meta,
        private router: Router,
        private getArticle: GetArticlesService,
        private getPortfolio: GetPortfolioService,
        @Inject(OLD_ROUTES_FROM_OLD_SITE) linkList: { [key: string]: string },
    ) {
        this.brokenArticlesRoutes = linkList;
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
            if (value[0].path === 'articles') {
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

            if (value[0].path === 'services') {
                const tags = this.metaList[`${value[0].path}/${value[1].path}`];
                if (tags?.length) {
                    this.addTags(tags);
                }
            }


            if (value[0].path === 'press-release') {
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
        let requestLink = title;
        if (this.brokenArticlesRoutes && this.brokenArticlesRoutes[title]) {
            requestLink = this.brokenArticlesRoutes[title];
        }

        return this.getArticle.getArticleRequest(checkHTMLExtension(requestLink));
    }

    getProjectInfo(title: string): Observable<any> | undefined {
        return this.getPortfolio.getPortfolioRequest(checkHTMLExtension(title));
    }

    initCurrentTagsWithParams(value: { title: string, description: string }) {
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