import { Component } from '@angular/core';
import { ITechnologiesCard } from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { DeliverableCard } from './deliverable-card.component';

SwiperCore.use([Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'breethe-page',
    templateUrl: './breethe-page.component.html'
})
export class BreethePageComponent {
    technologiesCard: ITechnologiesCard[] = [
        {
            smJustify: 'center',
            lgJustify: 'start',
            technologies: [
                {
                    src: "assets/img/technologies/active/native_script.png",
                    title: "NativeScript"
                },
                {
                    src: "assets/img/technologies/active/angular.png",
                    title: "Angular 14"
                },
                {
                    src: "assets/img/technologies/active/core_js.png",
                    title: "core-js"
                },
                {
                    src: "assets/img/technologies/active/jquery.png",
                    title: "jQuery"
                },
                {
                    src: "assets/img/technologies/active/ngrx.png",
                    title: "NgRx"
                },
                {
                    src: "assets/img/technologies/active/nx.png",
                    title: "Nx"
                },
            ]
        }
    ];

    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'breethe',
            title: 'breethe'
        }
    ];

    deliverablesList: DeliverableCard[] = [
        {
            title: "Building a NativeScript App for Android",
            descriptions: [`We went with Angular 7 (and upgraded to Angular 14 by the moment of writing this story), and with
        the help of NativeScript, compiled the Angular application into native mobile apps with a single
        codebase for both, Android and iOS versions. With this bundle, NativeScript is providing a mechanism
        to compile Angular applications to native applications for a mobile platform. NativeScript provides
        APIs' proxy to mobile native APIs, such as camera access, audio, and video playing access, storage,
        files, access to hardware buttons, etc`],
            imgs: ['assets/img/bg-img/breethe_page/native-script-bg.png'],
            impact:
                [
                    ['Native-like performance'],
                    ['Cross-platform and easily maintainable app'],
                    ['Direct access to native APIs'],
                    ['Regular updates of NativeScript versions following newest OS releases']
                ]
        },
        {
            title: 'Reproducing the iOS App Design',
            descriptions: ['At this stage, we implemented the Android version design equal to the iOS version with correspondent functionality and adjusted the designs to Android specifics. The app rating shows that the user flow of Breethe can become a meditative process itself :)'],
            imgs: ['assets/img/bg-img/breethe_page/ios-design-1.png', 'assets/img/bg-img/breethe_page/ios-design-2.png'],
            impact:
                [
                    ['Breethe became a leader in best guided meditation apps in 2022'],
                    ['The application audience has grown                    ']
                ]
        },
        {
            title: 'Adding New Functionality',
            descriptions: ['The team added plenty of new features to improve the usability. We provided access to camera, audio and video playing, storage, files, etc. through NativeScript API’s proxy to mobile native APIs.'],
            imgs: ['assets/img/bg-img/breethe_page/new-functionality-1.png', 'assets/img/bg-img/breethe_page/new-functionality-2.png'],
            impact:
                [
                    ['Users’ lives just got easier and the satisfaction grew!'],
                    ['The application quality has been improved'],
                    ['Breethe is prepared for further user acquisition']
                ]
        }
    ];

    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        mousewheel: {
            releaseOnEdges: true
        },
        initialSlide: 0,
        slideToClickedSlide: true,
        pagination: {
            clickable: true
        },

    };

}