import { Component, Inject, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import {
	checkHTMLExtension,
	GetArticlesService,
	IArticle,
	OLD_ROUTES_FROM_OLD_SITE
} from '@valor-software/common-docs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'article',
	styleUrls: ['./article.component.scss'],
	templateUrl: './article.component.html'
})
export class ArticleComponent implements OnDestroy {
	changeBreadCrumbTitle?: { path: string, title: string }[];
	article?: IArticle;
	$routEvents?: Subscription;
	linksFromOldSite?: { [key: string]: string };

	constructor(
		private router: Router,
		private getArticleServ: GetArticlesService,
		private sanitizer: DomSanitizer,
		@Inject(OLD_ROUTES_FROM_OLD_SITE) linkList: { [key: string]: string },
	) {
		this.linksFromOldSite = linkList;
		this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
			this.checkRoutePath();
		});

		if (!this.article) {
			this.checkRoutePath();
		}
	}

	checkRoutePath() {
		let artTitle = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;
		if (!artTitle) {
			this.router.navigate(['404']);
		}

		if (artTitle) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			artTitle = this.linksFromOldSite[artTitle] ? this.linksFromOldSite[artTitle] : artTitle;
			artTitle = checkHTMLExtension(artTitle);
			this.getArticleServ.getArticleRequest(artTitle).pipe(
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				switchMap((art) => {
					this.article = art;
					this.changeBreadCrumbTitle = [{
						path: this.router.parseUrl(this.router.url).root.children.primary.segments[1].path,
						title: art.title
					}];
					return this.getArticleServ.getHTMLSource(artTitle);
				}),
				catchError(error => {
					if (!this.article) {
						this.router.navigate(['404']);
					}
					return of();
				})
			).subscribe(res => {
				if (this.article) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					this.article.content = res;
					this.addScriptsToHead();
				}
			}, error => {
				this.router.navigate(['404']);
			});
		}
	}

	checkHTML(html: string) {
		return this.sanitizer.bypassSecurityTrustHtml(html);
	}

	routLink(event: any) {
		const element = event.target;

		if (element.nodeName === 'A' && element.getAttribute('routerLink')) {
			event.preventDefault();
			const link = element.getAttribute('routerLink');
			this.router.navigate([link]);
		}

		if (element.nodeName === 'A' && element.getAttribute('href')) {
			const link = element.getAttribute('href');
			if (link.includes('#')) {
				event.preventDefault();
				let url = this.router.url;
				if (url.indexOf('#') > -1) {
					url = url.substring(0, url.indexOf('#'));
				}

				if (url.indexOf('%23') > -1) {
					url = url.substring(0, url.indexOf('%23'));
				}

				if (link) {
					this.router.navigate([url.trim() + '/'], { fragment: link.replace('#', '') });
				}
			}
		}
	}

	ngOnDestroy() {
		this.$routEvents?.unsubscribe();
		this.removeOldMicroDAta();
	}

	addScriptsToHead() {
		this.removeOldMicroDAta();
		const head = document.getElementsByTagName('head')[0];
		const script = document.createElement('script');
		script.setAttribute('id', 'article-micro-data');
		script.setAttribute('type', 'application/ld+json');
		script.innerHTML = `
            {
            "@context": "https://schema.org/",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://valor-software.com${this.router.url}"
            },
            "headline": "${this.article?.title}",
            "description": "${this.article?.seoDescription}",
            "image": {
                "@type": "ImageObject",
                "url": "https://valor-software.com/${this.article?.bgImg}",
                "width": "",
                "height": ""
            },
            "author": {
                "@type": "Organization",
                "name": "${this.article?.author}"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Valor Software",
                "logo": {
                "@type": "ImageObject",
                "url": "https://valor-software.com/assets/img/valor_img/valor-logo.svg",
                "width": "",
                "height": ""
                }
            },
            "datePublished": "${this.article?.date}"
            }
        `;
		head.insertBefore(script, head.firstChild);
	}

	removeOldMicroDAta() {
		const oldMicroDAta = document.getElementById('article-micro-data');
		if (oldMicroDAta) {
			oldMicroDAta.remove();
		}
	}
}