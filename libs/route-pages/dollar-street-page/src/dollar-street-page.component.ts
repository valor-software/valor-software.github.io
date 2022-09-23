import { Component } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { GetPortfolioService, IPortfolio, UtilService } from '@valor-software/common-docs';
import { Observable } from 'rxjs';
import { ITechnologiesCard } from '@valor-software/common-docs';

SwiperCore.use([Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'dollar-street-page',
    templateUrl: './dollar-street-page.component.html'
})
export class DollarStreetPageComponent {
    project$: Observable<IPortfolio> = this.getProjectsServ.getPortfolioRequest('dollar-street');

    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'dollar-street',
            title: 'Dollar Street'
        }
    ];

    admPanelImpactList = [
        ["Simple and user-friendly platform with great navigation"],
        ["Easy to manage admin panel that allows updating content effortlessly"],
        ["Cool platform’s look and feel"]
    ];

    angularTransactionImpactList = [
        ["Stabilized platform and enabled its good performance", "on extremely huge amounts of data"],
        ["Improved scalability and performance"],
        ["Simplified maintenance of Dollar Street"]
    ];

    newFeaturesList = [
        ["Improved perception of the website content with the video feature added"],
        ["Powerful analytical environment implemented"],
        ["Streamlined UX and more insights into people’s lives with the extended filter"],
        ["Multiple language support – 16 languages!"]
    ];

    technologies: ITechnologiesCard[] = [
        {
            smJustify: 'between',
            lgJustify: 'start',
            technologies: [
                {
                    src: "assets/img/technologies/others/java_script.png",
                    title: "JavaScript"
                },
                {
                    src: "assets/img/technologies/others/type_script.png",
                    title: "TypeScript"
                },
                {
                    src: "assets/img/technologies/others/mongo_db.png",
                    title: "MongoDB"
                },
                {
                    src: "assets/img/technologies/others/angular_js.png",
                    title: "AngularJs"
                },
                {
                    src: "assets/img/technologies/active/angular.png",
                    title: "Angular"
                },
                {
                    src: "assets/img/technologies/others/aws_white.png",
                    title: "AWS"
                },
                {
                    src: "assets/img/technologies/others/jcp.png",
                    title: "JCP"
                },
                {
                    src: "assets/img/technologies/others/node_js.png",
                    title: "Node.js"
                },
                {
                    src: "assets/img/technologies/active/nest_js.png",
                    title: "Nest.Js"
                },
                {
                    src: "assets/img/technologies/others/aws_s3.png",
                    title: "AWS S3"
                },
                {
                    src: "assets/img/technologies/others/docker_white.webp",
                    title: "Docker"
                },
                {
                    src: "assets/img/technologies/active/angular.png",
                    title: "Angular CLI"
                },
                {
                    src: "assets/img/technologies/others/image_magic.png",
                    title: "ImageMagic"
                },
                {
                    src: "assets/img/technologies/others/cloud_flare.png",
                    title: "Cloudflare"
                },
                {
                    src: "assets/img/technologies/others/firebase_functions.png",
                    title: "Firebase Cloud Functions",
                    wrapText: true
                }
            ]
        }
    ];

    constructor(
        public utilService: UtilService,
        private getProjectsServ: GetPortfolioService
    ) { }

}