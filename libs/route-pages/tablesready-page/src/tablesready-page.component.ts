import { Component } from '@angular/core';
import { GetPortfolioService, IPortfolio, ITechnologiesCard } from '@valor-software/common-docs';
import { UtilService } from '@valor-software/common-docs';
import { Observable } from 'rxjs';
import SwiperCore, { Pagination } from "swiper";


SwiperCore.use([Pagination]);


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tablesready-page',
    templateUrl: './tablesready-page.component.html'
})
export class TablesReadyPageComponent {
    project$: Observable<IPortfolio> = this.getProjectsServ.getPortfolioRequest('tablesready');

    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'tablesready',
            title: 'TablesReady'
        }
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
                    src: "assets/img/technologies/others/php.png",
                    title: "PHP"
                },
                {
                    src: "assets/img/technologies/others/node_js.png",
                    title: "Node.js"
                },
                {
                    src: "assets/img/technologies/active/postgresql.png",
                    title: "PostgreSQL"
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
                    src: "assets/img/technologies/active/heroku.png",
                    title: "heroku"
                },

                {
                    src: "assets/img/technologies/active/firebase.png",
                    title: "firebase"
                },
                {
                    src: "assets/img/technologies/active/aws.png",
                    title: "AWS"
                },       
                {
                    src: "assets/img/technologies/others/twilio.png",
                    title: "Twilio"
                },
                {
                    src: "assets/img/technologies/others/recurly.png",
                    title: "Recurly"
                },
                {
                    src: "assets/img/technologies/others/d3.png",
                    title: "D3.js"
                },             
                {
                    src: "assets/img/technologies/others/redis.png",
                    title: "Redis"
                },
                {
                    src: "assets/img/technologies/others/websockets.png",
                    title: "WebSockets",
                },
                {
                    src: "assets/img/technologies/others/socket_io.png",
                    title: "Socket.io",
                }
            ]
        }
    ];
    
    constructor(
        public utilService: UtilService,
        private getProjectsServ: GetPortfolioService
    ) {
    }
}