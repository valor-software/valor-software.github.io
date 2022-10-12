import { Component } from '@angular/core';
import { ITechnologiesCard } from '@valor-software/common-docs';
import SwiperCore, { Pagination } from "swiper";
import { IServicesHeader } from '../../components/service-header-card/service-header-card.component';
import { ITraitsCard } from '../../components/traits-cards/traits-cards.component';

SwiperCore.use([Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'software-engineering',
    templateUrl: './software-engineering.component.html'
})
export class SoftwareEngineeringComponent {

    servicesHeader: IServicesHeader = {
        title: 'Software Engineering',
        descriptions: ['Staying ahead of the technology curve, we cover frontend, backend, and mobile development. Get an advanced and easily-maintainable product that grants high responsiveness and a smooth user journey.'],
        img: 'assets/img/bg-img/services_img/services_2.svg',
        button: {
            title: 'Get a free session with an expert'
        },
        bradCrumb: {
            path: 'software-engineering',
            title: 'Software Engineering'
        }
    };

    headerCards: ITraitsCard[] = [
        {
            title: '100+ accomplished projects',
            img: 'assets/img/bg-img/services_img/software_engineering/accomplished-projects.png',
            url: '/projects'
        },
        {
            title: '50+ stellar engineers on board',
            img: 'assets/img/bg-img/services_img/software_engineering/stellar-engineers.png',
            url: 'https://www.linkedin.com/search/results/people/?currentCompany=%5B%225214417%22%5D&network=%5B%22F%22%5D&origin=COMPANY_PAGE_CANNED_SEARCH&sid=1s'
        },
        {
            title: '13k+ GitHub stars',
            img: 'assets/img/bg-img/services_img/software_engineering/github-stars.png',
            url: 'https://github.com/orgs/valor-software/repositories'
        },
        {
            title: '100% job success score on UpWork',
            img: 'assets/img/bg-img/services_img/software_engineering/upwork.png',
            url: 'https://www.upwork.com/ag/valorsoftware/'
        }
    ];

    traitsCards: ITraitsCard[] = [
        {
            title: 'Purpose',
            description: 'We don’t just build software for the sake of building software. We want to bring ideas to life. We are passionate about the quality and human experiences of every product we interact with, and our company’s mission is to deliver solutions that help humanity in some aspect. Learn more on this topic from <a href="/clients/non-profit" target="_blank"><b><u>the page focused on projects for non-profit organizations.</u></b></a>',
            img: 'assets/img/bg-img/services_img/software_engineering/traits/purpose.png'
        },
        {
            title: 'Contribution',
            description: 'We know technology, and we’re believers in open-source as a movement. Our belief goes beyond a mission statement and is visible in <a href="https://github.com/orgs/valor-software/repositories" target="_blank"><b><u>the multitude of projects we contribute to</u></b></a> (both our own and those created by others in the community). We are also financially giving back through our sponsorships on the open collective.',
            img: 'assets/img/bg-img/services_img/software_engineering/traits/contribution.png'
        },
        {
            title: 'Commitment',
            description: 'The vast majority of <a href="/projects" target="_blank"><b><u>our clients</u></b></a> are referrals. We know what the partnership means, and our commitment to trust and transparency has led to our growth.',
            img: 'assets/img/bg-img/services_img/software_engineering/traits/commitment.png'
        },

    ];

    technologiesCards: ITechnologiesCard[] = [
        {
            title: 'Frontend',
            smJustify: 'between',
            lgJustify: 'start',
            technologies: [
                {
                    src: "assets/img/technologies/others/type_script.png",
                    tooltip: 'TypeScript'

                },
                {
                    src: "assets/img/technologies/active/react.png",
                    tooltip: 'React'
                },
                {
                    src: "assets/img/technologies/active/angular.png",
                    tooltip: 'Angular'
                },
                {
                    src: "assets/img/technologies/others/ngx_bootstrap.png",
                    tooltip: 'ngx-bootStrap'
                },
                {
                    src: "assets/img/technologies/active/vue.png",
                    tooltip: 'Vue'
                }
            ]
        },
        {
            title: 'Backend',
            smJustify: 'between',
            lgJustify: 'start',
            technologies: [
                {
                    src: "assets/img/technologies/active/nest_js.png",
                    tooltip: 'Nest.js'
                },
                {
                    src: "assets/img/technologies/others/express.png",
                    tooltip: 'Express'
                },
                {
                    src: "assets/img/technologies/active/ruby.png",
                    tooltip: 'Ruby'
                },
                {
                    src: "assets/img/technologies/others/rails.png",
                    tooltip: 'Ruby on Rails'
                },
                {
                    src: "assets/img/technologies/active/python.png",
                    tooltip: 'Python'
                },
                {
                    src: "assets/img/technologies/others/r.png",
                    tooltip: 'Rust'
                },
                {
                    src: "assets/img/technologies/active/go.png",
                    tooltip: 'Go'
                },
                {
                    src: "assets/img/technologies/others/dot_net.png",
                    tooltip: '.NET'
                },
                {
                    src: "assets/img/technologies/others/c_sharp.png",
                    tooltip: 'C Sharp'
                },
            ]
        },
        {
            title: 'Mobile',
            smJustify: 'between',
            lgJustify: 'start',
            technologies: [
                {
                    src: "assets/img/technologies/active/react_native.png",
                    tooltip: 'React Native'
                },
                {
                    src: "assets/img/technologies/active/native_script.png",
                    tooltip: 'NativeScript'
                },
                {
                    src: "assets/img/technologies/others/ionic.png",
                    tooltip: 'Ionic'
                },
                {
                    src: "assets/img/technologies/others/java.png",
                    tooltip: 'Java'
                },
                {
                    src: "assets/img/technologies/others/swift.png",
                    tooltip: 'Swift'
                }
            ]
        },
    ];
}