import {
    Directive,
    HostListener,
    Output,
    EventEmitter, ElementRef, Input, OnChanges, SimpleChanges
} from "@angular/core";
import { IArticle } from "./articles.list";


@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: "[sortBlogs]"
})
export class SortBlogsDirective {
    @Input() set activeItem(value: string[]) {
        this.sortItems(value);
    };

    @Input() items?: IArticle[];

    @Output() changedArticles: EventEmitter<IArticle[]> = new EventEmitter();

    sortItems(value: string[]) {
        if (!value.length) {
            this.changedArticles.emit([]);
            return;
        }

        const files = new Set<IArticle>();
        value.map(val => {
            const filterRes: IArticle | undefined = this.items?.find((item: IArticle) => item.domains.includes(val) || item.language === val);
            if (filterRes) {
                files.add(filterRes);
            }
        });
        this.changedArticles.emit([...files]);
    }


}
