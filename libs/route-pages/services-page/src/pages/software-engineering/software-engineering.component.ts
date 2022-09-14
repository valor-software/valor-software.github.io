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
            img: 'assets/img/bg-img/services_img/software_engineering/accomplished-projects.png'
        },
        {
            title: '50+ stellar engineers on board',
            img: 'assets/img/bg-img/services_img/software_engineering/stellar-engineers.png'
        },
        {
            title: '13k+ GitHub stars',
            img: 'assets/img/bg-img/services_img/software_engineering/github-stars.png'
        },
        {
            title: '100% job success score on UpWork',
            img: 'assets/img/bg-img/services_img/software_engineering/upwork.png'
        }
    ];

    traitsCards: ITraitsCard[] = [
        {
            title: 'Purpose',
            description: 'We don’t just build software for the sake of building software. We want to bring ideas to life. We are passionate about the quality and human experiences of every product we interact with, and our company’s mission is to deliver solutions that help humanity in some aspect. Learn more on this topic from <strong><u>the page focused on projects for non-profit organizations.</u></strong>',
            img: 'assets/img/bg-img/services_img/software_engineering/traits/purpose.png'
        },
        {
            title: 'Contribution',
            description: 'We know technology, and we’re believers in open-source as a movement. Our belief goes beyond a mission statement and is visible in <strong><u>the multitude of projects we contribute to </strong></u>(both our own and those created by others in the community). We are also financially giving back through our sponsorships on the open collective.',
            img: 'assets/img/bg-img/services_img/software_engineering/traits/contribution.png'
        },
        {
            title: 'Commitment',
            description: 'The vast majority of <strong><u>our clients</strong></u> are referrals. We know what the partnership means, and our commitment to trust and transparency has led to our growth.',
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
                },
                {
                    src: "assets/img/technologies/active/react.png",
                },
                {
                    src: "assets/img/technologies/active/angular.png",
                },
                {
                    src: "assets/img/technologies/others/ngx_bootstrap.png",
                },
                {
                    src: "assets/img/technologies/active/vue.png",
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
                },
                {
                    src: "assets/img/technologies/others/express.png",
                },
                {
                    src: "assets/img/technologies/active/ruby.png",
                },
                {
                    src: "assets/img/technologies/others/rails.png",
                },
                {
                    src: "assets/img/technologies/active/python.png",
                },
                {
                    src: "assets/img/technologies/others/r.png",
                },
                {
                    src: "assets/img/technologies/active/go.png",
                },
                {
                    src: "assets/img/technologies/others/dot_net.png",
                },
                {
                    src: "assets/img/technologies/others/c_sharp.png",
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
                },
                {
                    src: "assets/img/technologies/active/native_script.png",
                },
                {
                    src: "assets/img/technologies/others/ionic.png",
                },
                {
                    src: "assets/img/technologies/others/java.png",
                },
                {
                    src: "assets/img/technologies/others/swift.png",
                }
            ]
        },
    ];
}