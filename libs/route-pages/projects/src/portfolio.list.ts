export const PortfolioList = [
    'CareerBuilder',
    'Zuora',
    'Dollar_Street',
    'Liberty_Flights',
    'Souqalmal',
    'Priceshredder',
    'Gapminder_Offline',
    'TablesReady',
    'Breethe__Sleep___Meditation',
    'StackBlitz',
    'Renaizant',
    'Cinnabon',
    'NgTalks',
    'Qualtrax',
    'Hire_the_Fempire',
    'ThisDot',
    'NgAtlanta',
    'Vizabi',
    'Netifi'
];

export interface IPortfolio {
    name: string;
    link?: string;
    behanceLink?: string;
    goalsImg?: string;
    solutionsImg?: string;
    video?:string;
    iframe?: string;
    feedback?: string;
    sortTechnologies: string[];
    previewImg: string;
    description: string;
    goals: string[];
    solutions: string[];
    outcome: string;
    headerImg: string;
    sortServices: string[];
    aspects: {
        type: string[];
        country: string[];
        technology_stack: string[];
        services_provided: string[];
    }
}