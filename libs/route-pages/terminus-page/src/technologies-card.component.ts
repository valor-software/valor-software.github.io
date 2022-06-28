import { Component } from '@angular/core';

const technologiesCards: ITechnologiesCard[] = [
  {
    title: 'Frontend',
    technologies: [
      {
        src: "assets/img/bg-img/terminus_page/angular_logo.svg",
        title: "Angular 11"
      },
      {
        src: "assets/img/bg-img/terminus_page/ngrx_logo.svg",
        title: "NgRx"
      },
      {
        src: "assets/img/bg-img/terminus_page/amcharts_logo.svg",
        title: "amCharts"
      },
      {
        src: "assets/img/bg-img/terminus_page/jest_logo.svg",
        title: "Jest"
      },
      {
        src: "assets/img/bg-img/terminus_page/cypress_logo.svg",
        title: "Cypress"
      }
    ]
  },

  {
    title: 'Backend',
    technologies: [
      {
        src: "assets/img/bg-img/terminus_page/ruby_logo.svg",
        title: "Ruby"
      },
      {
        src: "assets/img/bg-img/terminus_page/aws_logo.svg",
        title: "Amazon Athena",
        wrapText: true
      },

      {
        src: "assets/img/bg-img/terminus_page/postgresql_logo.svg",
        title: " PostgreSQL"
      },
      {
        src: "assets/img/bg-img/terminus_page/rspec_logo.svg",
        title: "RSpec"
      },
      {
        src: "assets/img/bg-img/terminus_page/go_logo.svg",
        title: "Go"
      }
    ]
  }
];

export interface ITechnologiesCard {
  title: string;
  technologies: ITechnologies[];
}

export interface ITechnologies {
  title: string;
  src: string;
  wrapText?: boolean;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'technologies-card',
  templateUrl: './technologies-card.component.html'
})
export class TechnologiesCardComponent {
  technologiesCards: ITechnologiesCard[] = technologiesCards;
}