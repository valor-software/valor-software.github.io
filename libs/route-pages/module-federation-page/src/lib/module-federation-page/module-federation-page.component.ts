import { ChangeDetectionStrategy, Component } from '@angular/core';

interface AllianceEffect {
	title: string;
	description: string;
	img: string;
	linkText?: string;
	link?: string;
}

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'module-federation-page',
	templateUrl: './module-federation-page.component.html',
	styleUrls: ['./module-federation-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleFederationPageComponent {
	readonly allianceEffects: AllianceEffect[] = [
		{
			title: 'Revolutionizing SaaS',
			description: 'We\'ve launched Medusa, the unique SaaS platform for federated applications.',
			img: 'assets/img/bg-img/module-federation/alliance-effect/revolutionizing-saas.svg',
			linkText: 'Check it out now',
			link: 'https://www.medusa.codes/'
		},
		{
			title: 'Docs central',
			description: 'Our new documentation website, launching soon, will be your go-to for all info!',
			img: 'assets/img/bg-img/module-federation/alliance-effect/docs-central.svg',
			linkText: 'Visit the website',
			link: 'https://module-federation.io/'
		},
		{
			title: 'Resource hub',
			description: 'We\'ve gathered examples, libraries, and codebases for easy access.',
			img: 'assets/img/bg-img/module-federation/alliance-effect/resource-hub.svg',
		},
		{
			title: 'Future vision',
			description: 'We\'ve planned the upcoming releases of Module Federation.',
			img: 'assets/img/bg-img/module-federation/alliance-effect/future-vision.svg',
		},
		{
			title: 'Innovation',
			description: 'Our RFCs introduce universal support, surpassing "Webpack only" limitations.',
			img: 'assets/img/bg-img/module-federation/alliance-effect/innovation.svg',
		},
		{
			title: 'Tech evolution',
			description: 'Our shift to TypeScript and Nx has boosted our coding efficiency.',
			img: 'assets/img/bg-img/module-federation/alliance-effect/tech-evolution.svg',
		},
		{
			title: 'Quality commitment',
			description: 'We\'ve integrated automation tests in Module Federation and repositories like Snowflake.',
			img: 'assets/img/bg-img/module-federation/alliance-effect/quality-commitment.svg',
		},
		{
			title: 'Team power',
			description: 'Module Federation is now a team effort, enhancing its potential.',
			img: 'assets/img/bg-img/module-federation/alliance-effect/team-power.svg',
		},
	];

	whyValorItems: { description: string, img: string }[] = [
		{
			description: 'Our expertise in implementing Module Federation is proven by our success with Fortune 25 companies and billion-dollar eCommerce businesses. Our CEO, Dmitriy Shekhovtsov, an avid Open Source supporter, pioneered the first Angular component library beyond Google (ngx-bootstrap) and was instrumental in integrating Webpack Module Federation with the Angular CLI.',
			img: 'assets/img/bg-img/module-federation/why-valor/expertise.svg',
		},
		{
			description: 'As comprehensive solution providers in Module Federation, our services span software development, QA, DevOps, UX design, product ownership, and project management, all customized to support your Module Federation objectives.',
			img: 'assets/img/bg-img/module-federation/why-valor/solution.svg',
		},
		{
			description: 'Our global team, strengthened by our robust recruitment strategies in top tech markets, specializes in Module Federation, ensuring we\'re always ready to scale and adapt to your specific needs.',
			img: 'assets/img/bg-img/module-federation/why-valor/team.svg',
		}
	];

}