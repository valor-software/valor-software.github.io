import { Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-not-found',
    template: `
        <section class="landing-section !pb-0" style="min-height: 100%; height: 100vh;">
            <div class="container flex justify-between pt-16 lg:pt-0" style="min-height: 100%;">
                <div class="lg:max-w-600 flex justify-center items-center lg:items-start flex-col">
                    <h1 class="text-light_title_col text-8xl leading-100 md:text-250 md:leading-250 mb-4 font-bold">404</h1>
                    <p class="leading-40 text-grey_font_col text-center lg:text-left text-large font-bold mb-6">Ooops! You weren’t supposed to see this.</p>
                    <p class="text-base leading-6 text-light_title_col text-center lg:text-left">The page you’re looking for no longer exist. Return to the previous page and remember: you haven’t seen anything! </p>
                    <button class="btn-pink w-full md:w-auto flex justify-center mt-8">
                        <a [routerLink]="'/'"  class="w-full flex justify-center items-center">Go to the main page <img src="assets/img/icons/arrow.svg" class="ml-2" alt=""></a>
                    </button>
                </div>
                <div class="hidden lg:flex items-end">
                    <img src="assets/img/bg-img/404.svg" alt="not found page">
                </div>
            </div>
        </section>
    `
})
export class NotFoundComponent {

}