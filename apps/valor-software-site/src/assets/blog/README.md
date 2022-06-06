# Add new article
<p>
For displaying one article we need two files. <br>One file contains technical characters of article and article's author. This file should be with .json extension. It should be located in folder by path apps/valor-software-site/src/assets/blog/articles.<br>
The second file contains content of the article in adoc format. This file should be with .adoc extension. It should be located in folder by path apps/valor-software-site/src/assets/blog/adoc.<br>
Both these files should have the same filename and different extensions.
</p>

### File naming
<p>
Naming of articles files depends on amount of articles. The oldest article start from 1. So when we are adding a new article we should dedicate tha last number in the folder adoc or articles and add 1 point.

Ex. the last article is 38, so the new article will have filename 39 (38 + 1). As a result we should have two new files:
 
- in folder apps/valor-software-site/src/assets/blog/articles file <strong>39.json</strong>
- in folder apps/valor-software-site/src/assets/blog/adoc file <strong>39.adoc</strong>
</p>

### Structure of file with technical characters of article and article's author
Theses files can contains such fields: 

- **author** (the field is required, the format of field is simple string);
- **domains** (the field is required, the format of field is array of string. This field is used for articles sorting on blog page);
- **language** (the field is required, available values are 'en' or 'pt'. The value depends on the language of article);
- **bgImg** (the field is required, it should contain the string with url path of background image for article);
- **title** (the field is required, the format of field is simple string);
- **date** (the field is required, the format of field is string. There should be value as ex. Fri Apr 1 2022, so weekday month date year. The correct names of months and week days you can find downer);
- **authorImg** (the field is optional, it should contain the string with url path of author's image);
- **position** (the field is optional, it should contain the author's position in company as ex. 'Marketing Content Manager
');
- **seoDescription** (the field is optional, it should contain the small description of article for seo service);

---
#### Available domains

    business_analysis: 'Business Analysis',
    user_research_design: 'User Research & Design',
    dev_quality_assurance: 'Development & Quality Assurance',
    devops_cloud: 'DevOps & Cloud',
    recruitment_pm: 'Recruitment & Project Mgmt.',
    sales_marketing: 'Sales & Marketing',
    other: 'Other'

--- 
as ex.

    {
    "title": "Como o Scully nos ajudou a atingir 99 pontos no Lighthouse para uma plataforma B2C",
    "domains": ["recruitment_pm", "user_research_design", "sales_marketing"],
    "authorImg": "https://assets.website-files.com/5c4c30d0c49ea6746fafc90c/5ca74cfb04fdce15ea9266e2_ava-Ruslan%20Ponuzhdayev.jpg",
    "language": "pt",
    "bgImg": "https://assets.website-files.com/5c4c30d0c49ea6746fafc90c/60d445d24897dc4086b2c80f_Blog-Scully.png",
    "author": "Ruslan Ponuzhdayev",
    "position": "JS Developer",
    "date": "Fri Jul 16 2021 10:45:55 GMT+0000 (Coordinated Universal Time)",
    "seoDescription": "Aceleramos o carregamento geral da página e aumentamos a pontuação do farol da plataforma para 99-100. Além disso, conectar o Google eCommerce Marketing nos ajudou a ver várias áreas de melhoria no site e em aplicativos móveis para agilizar a jornada do usuário. Aprenda com nossa experiência como você pode aumentar o desempenho do site e a visibilidade do seu projeto usando o Scully e o Google Analytics. Além disso, vou ajudá-lo a superar possíveis dificuldades com integrações, uma vez que já passamos por isso :)"
    }

----

[//]: # (### Adoc content)

[//]: # (Fot getting content of the article )