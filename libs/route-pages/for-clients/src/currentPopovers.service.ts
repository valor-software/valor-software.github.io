import { Injectable } from '@angular/core';

@Injectable({providedIn: 'platform'})
export class CurrentPopoversService {
    private _currentPopover?: {title: string, subTitle?: string, list: string[]};

    set currentPopover(item: {title: string, subTitle?: string, list: string[]}) {
        this._currentPopover = item;
    }

    getCurrentPopover(): {title: string, subTitle?: string, list: string[]} | undefined {
        return this._currentPopover;
    }


}