import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'nestjs-rspack-cicd-performance',
	templateUrl: './nestjs-rspack-cicd-performance.html',
})
export class NestjsRspackCicdPerformance {
	private readonly _activeTooltip$ = new BehaviorSubject<string | null>(null);

	public readonly activeTooltip$ = this._activeTooltip$.asObservable();

	public readonly additionalLinks = [
		{ src: 'assets/press-releases/icons/discord.svg', href: 'http://bit.ly/3F2nyOX', alt: 'Discord' },
		{ src: 'assets/press-releases/icons/github.svg', href: 'https://github.com/web-infra-dev/rspack', alt: 'Github' },
		{
			src: 'assets/press-releases/icons/rspack.svg',
			href: 'https://github.com/nrwl/nx-labs/tree/main/packages/rspack',
			alt: 'Rspack'
		},
		{ src: 'assets/press-releases/icons/nx.svg', href: 'https://nx.dev/packages/rspack', alt: 'NX' },
		{ src: 'assets/press-releases/icons/twitter.svg', href: 'https://twitter.com/rspack_dev', alt: 'Twitter' }
	];

	public readonly postedByPersons = [
		{
			name: 'Zackary Chapple',
			title: 'Chief Revenue Officer at Valor Software',
			src: 'assets/press-releases/person/zackary-chapple.png',
		},
	];

	public readonly contibutorsPersons = [
		{
			name: 'Antoine Pairet',
			title: 'Founder and CTO at Rosa',
			src: 'assets/press-releases/person/antoine-pairet.png',
		},
		{
			name: 'Katerina Skroumpelou',
			title: 'Senior Software Engineer at Nx',
			src: 'assets/press-releases/person/katerina-skroumpelou.png',
		},
		{
			name: 'Kamil Mysliwiec',
			title: 'Co-Founder Trilon and Creator of NestJS',
			src: 'assets/press-releases/person/kamil-mysliwiec.png'
		},
	];

	public readonly companies = [
		{
			name: 'Nest',
			src: 'assets/press-releases/companies/nest.png',
			href: 'https://nestjs.com/',
		},
		{
			name: 'Nx',
			src: 'assets/press-releases/companies/nx.png',
			href: 'https://nx.dev/',
		},
		{
			name: 'Rosa',
			src: 'assets/press-releases/companies/rosa.svg',
			href: 'https://rosa.be/en/',
		},
		{
			name: 'Valor <wbr>Software',
			src: 'assets/press-releases/companies/valor-software.png',
			href: 'https://valor-software.com/'
		}
	];

	onAdditionalLinkMouseEnter(linkSrc: string): void {
		this._activeTooltip$.next(linkSrc);
	}

	onAdditionalLinkMouseLeave(): void {
		this._activeTooltip$.next(null);
	}
}
