import { Pipe, PipeTransform } from '@angular/core';
import { Domains } from '../models';

@Pipe({ name: 'domainName' })
export class DomainNamePipe implements PipeTransform {

	transform(domains: string[]): string {
		if (!domains.length) {
			return '';
		}

		return domains.map(domain => Domains[domain]).filter(Boolean)
			.join(` <span class="vertical-separator">|</span> `);
	}
}