import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
	name: 'highlightMatchingLetters',
})
export class HighlightMatchingLettersPipe implements PipeTransform {
	constructor(private readonly domSanitizer: DomSanitizer) {
	}

	transform(value: string, searchTerm: string | null): SafeHtml {
		if (!searchTerm || !value) {
			return this.domSanitizer.bypassSecurityTrustHtml(value);
		}

		const regex = new RegExp(searchTerm, 'gi');
		const highlightedValue = value.replace(regex,
			match => `<span style="color: rgba(226, 78, 99, 1)">${match}</span>`
		);

		return this.domSanitizer.bypassSecurityTrustHtml(highlightedValue);
	}
}