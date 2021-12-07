import { BlogPageComponent } from "./blog-page.component";
import { ArticleComponent } from "./article.component";

export const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: BlogPageComponent
            },
            {
                path: 'article',
                component: ArticleComponent
            }
        ]
    }
];

