import {
    Directive,
    Output,
    EventEmitter,  Input
} from "@angular/core";
import { IPortfolio } from "@valor-software/portfolio";


@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: "[sortProjects]"
})
export class SortProjectsDirective {
    @Input() set activeItem(value: string[]) {
        this.sortItems(value);
    };
    @Input() items?: IPortfolio[];
    @Output() changedArticles: EventEmitter<IPortfolio[]> = new EventEmitter();

    sortItems(value: string[]) {
        if (!value.length || value.includes('all_projects')) {
            this.changedArticles.emit(this.items);
            return;
        }

        const files = new Set<IPortfolio>();

        value.map(val => {
            let filterRes: IPortfolio[] | undefined = [];
            filterRes = this.items?.filter((item: IPortfolio) => item.sortServices.includes(val));
            if (filterRes?.length) {
                filterRes.map(item => files.add(item));
            }
        });
        this.changedArticles.emit([...files]);
    }
}
