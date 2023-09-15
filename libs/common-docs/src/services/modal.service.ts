import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    Injectable,
    Injector,
    Type,
} from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'platform',
})
export class ModalService<T> {
    private componentRef: ComponentRef<T> | undefined;
    modalDisplayState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    open(component: Type<T>): void {
        if (this.componentRef) {
            return;
        }

        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory<T>(component)
            .create(this.injector);

        this.appRef.attachView(this.componentRef.hostView);
        document.body.appendChild(this.componentRef.location.nativeElement);
        this.modalDisplayState.next(true);
    }

    close(): void {
        if (!this.componentRef) {
            return;
        }
        this.modalDisplayState.next(false);
        setTimeout(()=> {
            if(this.componentRef) {
                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.componentRef = undefined;
            }
        },300);
    }
}