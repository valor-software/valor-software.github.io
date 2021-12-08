export const ArticlesList = [
    'ARC___a_new_weapon_against_accessibility_bugs',
    'Setting_up_your_project_on_GCP_fast_using_Terraform_and_Kubernetes',
    'ngx-bootstrap_v7.0.0_is_officially_released!',
    'How_to_deploy_Firebase_Preview_Channels_on_Travis_CI',
    'Scully_Helped_us_Reach_a_99_Lighthouse_Score_for_a_B2C_Platform',
    'Designing_Aggregator_App_from_A_to_Z___Part_2',
    'Designing_Aggregator_App_from_A_to_Z___Part_1',
    'New_year,_new_Valor,_new_you',
    'Incorporating_user_research_on_live_projects___Part_4',
    'Incorporating_user_research_on_live_projects___Part_3',
    'Incorporating_user_research_on_live_projects___Part_2',
    'Incorporating_user_research_on_live_projects___Part_1',
    'Why_you_might_want_to_switch_to_Time_and_Material_from_Fixed_Price',
    'Cross-Site_Scripting_(XSS)_a_QA_Engineer\'s_Guide',
    'Career_Path_for_a_Flat-structured_Сompany'
];

export interface IArticle {
    author?: string;
    authorImg?: string;
    domains: string[];
    language: string;
    bgImg: string;
    title: string;
    position?: string;
    date: string;
    content: string;
}