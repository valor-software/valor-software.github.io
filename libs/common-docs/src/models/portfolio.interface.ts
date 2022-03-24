export interface IPortfolio {
    name: string;
    link?: string;
    behanceLink?: string;
    goalsImg?: string;
    solutionsImg?: string;
    webSort?: string[];
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