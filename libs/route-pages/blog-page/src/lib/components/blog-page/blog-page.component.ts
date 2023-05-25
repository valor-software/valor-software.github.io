import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BuilderService } from '@builder.io/angular';
import { Builder } from '@builder.io/sdk';
import { BuilderIoAdminApiClient } from '@valor-software/common-docs';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'blog-page',
	templateUrl: './blog-page.component.html',
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {
	noBuilderPageForUrl = false;

	article?: any;
	model = 'blog-article';

	constructor(
		private readonly builderService: BuilderService,
		private readonly builderIoAdminApiClient: BuilderIoAdminApiClient
	) {
	}

	async ngOnInit() {
		const handle = 'your-article-handle';

		try {
			this.article = await this.builderService.get(this.model, {
				query: {
					'data.handle': handle
				},
				options: {
					includeRefs: true
				}
			}).promise();
		} catch (err) {
			console.error(err);
		}

		await this.builderIoAdminApiClient.getAllModels().then(result => console.log('result', result));
	}
}