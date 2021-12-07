export const ArticlesList = [
    'ARC_–_a_new_ weapon_against_accessibility_bugs',
    'Setting_up_your_project_on_GCP_fast_using_Terraform_and_Kubernetes',
    'ngx-bootstrap_v7.0.0_is_officially_released!',
    'How_to_deploy_Firebase_Preview_Channels_on_Travis_CI',
    'Scully_Helped_us_Reach_a_99_Lighthouse_Score_for_a_B2C_Platform',
    'Designing_Aggregator_App_from_A_to_Z_–_Part_2'
];

export interface IArticle {
    author?: string;
    domains: string[];
    language: string;
    bgImg: string;
    title: string;
    position?: string;
    date: string;
    content: string;
}