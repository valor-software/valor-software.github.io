import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from "swiper";
import { DeliverableCard, ITechnologiesCard } from '@valor-software/common-docs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

SwiperCore.use([Pagination, Autoplay]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blackout-page',
    templateUrl: './blackout-page.component.html',
    styleUrls: ['./blackout-page.component.scss'],
})
export class BlackoutPageComponent implements OnInit {
    videoUrl: SafeResourceUrl = '';
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
                    src: "assets/img/technologies/active/angular.png",
                    title: "Angular 7"
                },
                {
                    src: "assets/img/technologies/active/native_script.png",
                    title: "NativeScript"
                }
            ]
        }
    ];

    isLightOff = false;
    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'blackout',
            title: 'Blackout'
        }
    ];

    deliverablesList: DeliverableCard[] = [
        {
            title: "1. Made application release-ready",
            descriptions: [`To prepare Blackout for “the Red Carpet” and the meeting with its demanding audience, we introduced particular improvements. The app response initially made users wait for way too long. Also, among other things, lamps switched lights abruptly which was a blocker for a successful shooting process.`],
            imgs: ['assets/img/bg-img/blackout_page/delivery_1.png'],
            fullWidthImg: true,
            impact:
                [
                    ['Reduced lag and latency which allowed smooth app operation'],
                    ['Made lamps react to users requests faster and smoothly switch between different combinations of lights.']
                ]
        },
        {
            title: '2. Development of new features',
            hierarchyList: [{
                title: 'Here are a few of the striking things you can do with the help of Blackout',
                descriptions: ['After Blackout was officially released and got much success, the Valor team continued working on boosting the app’s performance together with fixing code malfunctions, and adding new features for advanced usage.'],
                imgs: ['assets/img/bg-img/blackout_page/delivery_2A.png'],
                subItems: [
                    'Ability to use any amount of universes;',
                    'Ability to connect any amount of Lumenradio MoonLite;',
                    'Create your fixtures along with the ability to use pre-created fixtures from the market;',
                    'Manually manipulate each fixture parameter individually;',
                    'Create rich effects manipulating fixture parameters;',
                    'Create scene setups with states of all fixtures and smoothly switch between them;',
                    'Blackout supports ​​Art-Net and sACN protocols;',
                    'Ability to create groups of fixtures and manipulate them as a single fixture applying effects;',
                    'Create your own macroses to make quick changes of fixtures’ state using a single button.',
                ]
            }],
            fullWidthImg: true,
            descriptions: ['The Valor team has added the ability to connect any number of <a href="https://lumenradio.com/products/moonlite/" target="_blank"><b><u>MoonLite</u></b/></a> lighting control products to the Blackout console. We’ve completely changed and modified the effects engine and the scene processing engine, and enabled fixtures groups functionality from scratch.'],
            imgs: ['assets/img/bg-img/blackout_page/delivery_2B.png'],
            impact:
                [
                    ['Eliminated bugs and malfunctions from core functionalities'],
                    ['Heavily increased the Blackout capacity and added numerous abilities for users.']
                ]
        },

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

    constructor(
        private sanitizer: DomSanitizer
    ) {
    }

    ngOnInit(): void {
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/1aLURAEGVXo');

        let mouseX = 0;
        let mouseY = 0;
        const flashlight = document.getElementById("flashlight");
        const isTouchDevice = () => {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        };

        function getMousePosition(e: any) {
            if (flashlight) {
                mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
                mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
                flashlight.style.setProperty("--Xpos", mouseX + "px");
                flashlight.style.setProperty("--Ypos", mouseY + "px");
            }
        }
        document.addEventListener("mousemove", getMousePosition);
        document.addEventListener("touchmove", getMousePosition);
    }

    private getSafeUrl(url?: string) {
        if (!url) {
            return '';
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}