export interface IArticle {
    author?: string;
    authorImg?: string;
    secondAuthor?: string;
    secondAuthorImg?: string;
    domains: string[];
    language: string;
    bgImg: string;
    title: string;
    position?: string;
    date: string;
    content: string;
    seoDescription?: string;
    order?: number;
}