import {
    AnimationBuilder,
    AnimationFactory,
    AnimationPlayer
} from '@angular/animations';

import {
    AfterViewChecked,
    Directive,
    ElementRef,
    HostBinding,
    Renderer2,
    Input
} from '@angular/core';

import {
    collapseAnimation,
    expandAnimation,
    partlyExpandAnimation
} from './collapse-animations';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[collapse]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        '[class.collapse]': 'true'
    }
})
export class ShowHideDirective implements AfterViewChecked {
    @Input()
    set collapse(value: boolean) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }

    get collapse(): boolean {
        return this.isExpanded;
    }

    @Input() partlyClose = false;

    @HostBinding('class.in')
    @HostBinding('class.show')

    isExpanded = true;
    collapseNewValue = true;
    // hidden
    @HostBinding('attr.aria-hidden') isCollapsed = false;
    // stale state
    @HostBinding('class.collapse') isCollapse = true;
    // animation state
    @HostBinding('class.collapsing') isCollapsing = false;

    private _display = 'block';
    private _isAnimationDone?: boolean;
    private _player?: AnimationPlayer;
    private _stylesLoaded = false;

    private _COLLAPSE_ACTION_NAME = 'collapse';
    private _EXPAND_ACTION_NAME = 'expand';
    private _PARTLY_CLOSE_ACTION_NAME = 'partlyCollapsed';

    private readonly _factoryCollapseAnimation: AnimationFactory;
    private readonly _factoryExpandAnimation: AnimationFactory;

    constructor(
        private _el: ElementRef,
        private _renderer: Renderer2,
        _builder: AnimationBuilder
    ) {
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }

    ngAfterViewChecked(): void {
        this._stylesLoaded = true;

        if (!this._player || !this._isAnimationDone) {
            return;
        }

        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }

    /** allows to manually toggle content visibility */
    toggle(): void {
        if (this.isExpanded) {
            this.hide();
        } else {
            this.show();
        }
    }

    /** allows to manually hide content */
    hide(): void {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;

        // this.collapses.emit(this);

        this._isAnimationDone = false;

        this.animationRun(this.partlyClose ? this._PARTLY_CLOSE_ACTION_NAME : this._COLLAPSE_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed) {
                this.show();
                return;
            }
            this._renderer.setStyle(this._el.nativeElement, 'display', this.partlyClose ? this._display : 'none');
        });
    }
    /** allows to manually show collapsed content */
    show(): void {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);

        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;

        this._isAnimationDone = false;
        this.animationRun(this._EXPAND_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed) {
                this.hide();

                return;
            }
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        });
    }

    animationRun(action: string) {
        if (!this._stylesLoaded) {
            return (callback: () => void) => callback();
        }

        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');

        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;

        if (this._player) {
            this._player.destroy();
        }

        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();

        return (callback: () => void) => this._player?.onDone(callback);
    }
}
