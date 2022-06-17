import { Injectable } from '@angular/core';

@Injectable({providedIn: 'platform'})
export class BlogArticlesRouteService {

    getRouteLink(title: string): string {
        return this.getRefactoredLink(title);
    }

    getRefactoredLink(title: string): string {
        let link = title;
        while (link.match(' ' || ':' || '–' || '—' || '&')) {
            link = link.replace(' ', '_');
            link = link.replace(':', '');
            link = link.replace('–', '_');
            link = link.replace('—', '_');
            link = link.replace('&', '_');
        }

        return link;
    }
}
