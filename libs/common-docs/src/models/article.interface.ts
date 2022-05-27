export interface IArticle {
    author?: string;
    id: string;
    authorImg?: string;
    domains: string[];
    language: string;
    bgImg: string;
    title: string;
    position?: string;
    date: string;
    content: string;
    contentUrl?: string;
    seoDescription?: string;
}