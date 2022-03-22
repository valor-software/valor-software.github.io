import {
    Directive,
    HostListener,
    Output,
    EventEmitter, ElementRef, Input, OnChanges, SimpleChanges
} from "@angular/core";
import { IArticle } from "@valor-software/common-docs";

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: "[sortBlogs]"
})
export class SortBlogsDirective {
    _items?: IArticle[];
    _activeItem: string[] = [];
    @Input() set activeItem(value: string[]) {
        this.sortItems(value);
    };
    @Input() set items (value: IArticle[]) {
        this._items = value;
        this.sortItems(this._activeItem);
    };
    @Output() changedArticles: EventEmitter<IArticle[]> = new EventEmitter();

    sortItems(value: string[]) {
        if (!value.length) {
            this.changedArticles.emit(this._items);
            return;
        }

        const files = new Set<IArticle>();
        const lang = value.includes('pt') ? 'pt' : 'en';
        const langFiles: IArticle[] | undefined = this._items?.filter((item: IArticle) => item.language === lang);
        if (value.length === 1 && langFiles?.length) {
            langFiles.map(item => files.add(item));
            this.changedArticles.emit([...files]);
            return;
        }

        value.map(val => {
            let filterRes: IArticle[] | undefined = [];
            filterRes = langFiles?.filter((item: IArticle) => item.domains.includes(val));
            if (filterRes?.length) {
                filterRes.map(item => files.add(item));
            }
        });
        this.changedArticles.emit([...files]);
    }
}
