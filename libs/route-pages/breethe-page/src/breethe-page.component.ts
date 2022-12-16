import { Component, OnInit } from '@angular/core';
import { ITechnologiesCard } from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { DeliverableCard } from './deliverable-card.component';

SwiperCore.use([Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'breethe-page',
    templateUrl: './breethe-page.component.html'
})

export class BreethePageComponent implements OnInit {
    audioIsPlaying = false;

    technologiesCard: ITechnologiesCard[] = [
        {
            smJustify: 'evenly',
            lgJustify: 'start',
            technologies: [
                {
                    src: "assets/img/technologies/active/ngrx.png",
                    title: "NgRx"
                },
                {
                    src: "assets/img/technologies/others/jquery.png",
                    title: "jQuery"
                },
                {
                    src: "assets/img/technologies/others/core_js.png",
                    title: "core-js"
                },
                {
                    src: "assets/img/technologies/others/angular_14.png",
                    title: "Angular 14"
                },
                {
                    src: "assets/img/technologies/active/native_script.png",
                    title: "NativeScript"
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
            title: "1. Building a NativeScript App for Android",
            descriptions: [`Sleep tracks, hypnotherapy sessions, masterclasses, music, and nature sounds playlists are just a few of the numerous things you can find in Breethe. Valor suggested using NativeScript to build a single code base that would equally support iOS and Android versions to simplify the development, management, and scaling of the app.`],
            imgs: ['assets/img/bg-img/breethe_page/native-script-bg.png'],
            fullWidthImg: true,
            impact:
                [
                    ['Native-like performance'],
                    ['Cross-platform and easily maintainable app'],
                    ['Direct access to native APIs'],
                    ['Regular updates of NativeScript versions following newest OS releases']
                ]
        },
        {
            title: '2. Reproducing the iOS App Design',
            descriptions: ['At this stage, we implemented the Android version design equal to the iOS version with correspondent functionality and adjusted the designs to Android specifics. The app rating shows that the user flow of Breethe can become a meditative process itself :)'],
            imgs: ['assets/img/bg-img/breethe_page/ios-design.png'],
            impact:
                [
                    ['Breethe became a leader in best guided meditation apps in 2022'],
                    ['The application audience has grown                    ']
                ]
        },
        {
            title: 'Adding New Functionality',
            descriptions: ['The team added plenty of new features to improve the usability. We provided access to camera, audio and video playing, storage, files, etc. through NativeScript API’s proxy to mobile native APIs.'],
            imgs: ['assets/img/bg-img/breethe_page/new-functionality.png'],
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

    ngOnInit(): void {
        const audio = document.querySelector('audio');
        if (audio) {
            audio.play();
            audio.addEventListener('playing', () => {
                this.audioIsPlaying = true;
            });
            audio.addEventListener('pause', () => {
                this.audioIsPlaying = false;
            });

        }
    }

}