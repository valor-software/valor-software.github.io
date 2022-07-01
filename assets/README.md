# Add new article

<p>
From the start you should create a copy of development branch (default branch). Steps are: </p>

1. Be sure the development branch is already set up
<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/4.png">

2. In the field 'Find or create a branch ...' put the name of your new branch.
3. Click 'create branch: name of your branch'
<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/5.png">

Now your own branch is ready for work.

[//]: # (when you found such file in our github repository you should flow the [steps for editing github document]&#40;#File-editing-in-github&#41;. These steps are described downer.)

<p>
All articles are situated in one folder by path:

  assets/articles

In this folder you can see the list of folders with article's information

For adding new article you should create a new folder. These folders have specific names as ex.<br>

  0001-como-o-scully-nos-ajudou-a-atingir-99-pontos-no-lighthouse-para-uma-plataforma-b2c

The part with numbers - it is the order of the article
The second part of the name - it is modified title of the article

Rule regarding the number naming is 4 digit pattern. If you want to add the new article, you should dedicate the last one (as ex. it is 0039) and plus one, ex:

  0039 + 0001 = 0040

So the number part for folder name is 0040

Rule regarding the title refactoring. To avoid some errors use such service for it https://playcode.io/909527. Just put the title of your new article and copy the result from 'console' section 
As example the title of new article is 'Debugging NgRx in NativeScript with Redux DevTools' the result is - 'debugging-ngrx-in-nativescript-with-redux-devtools'

So, the name of folder for new article should be: 0040-debugging-ngrx-in-nativescript-with-redux-devtools

For displaying one article we need two files. <br>One file contains technical characters of article and article's author. This file should be with .json extension. It should be located in folder which you have created previously for new article.<br>
The second file contains content of the article in adoc format. This file should be with .adoc extension. It should be located in the same place as a file with .json extension.<br>
Both these files can have different names.
</p>

Information how to create new files in github you can find in [steps for creating github document](#File-creating-in-github).

### Structure of file with technical characters of article and article's author
These files can contain such fields: 

- **author** (the field is required, the format of field is simple string);
- **order** (the field is required, the format of field is number. It should be the same as name of the folder. Ex. If number in folder name is 0040 - the order should be 40);
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

#### Available date formats

you can use such date format: Fri Apr 1 2022
Firstly - weekday, then month, date and year

**Available weekdays**:
Mon, Tue, Wed, Thu, Fri, Sat, Sun

**Available months**:
Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec.

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

### Get content in .adoc

<p>The next step is getting article content in adoc extension. To get such content you need to have finished article in your google document. 

To convert content in adoc extension you need plugin https://workspace.google.com/marketplace/app/asciidoc_processor/1023004302050

Firstly, you should install it for your browser. Instruction of using google plugin is here
https://support.google.com/docs/answer/2942256?hl=en&co=GENIE.Platform%3DAndroid#zippy=%2Cuse-add-ons

as a result you will get the converted content</p>

<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/1.png">

Then you copy all content from modal window and paste it into your file with adoc extension.

### Article media

<p>All media files from new article should be located in the same folder as all article's files. There should be also image of author and background images.<br>

(NOTE: all links, which are used in articles, should be remote and available from different websites. If you need to add some media to repository look at the [steps for adding media in github]&#40;#Add-media-in-github&#41;)

</p>

### Creating of pull request

When you finish all work with new article you need to create a pull request. For it you need visit link of pull requests https://github.com/valor-software/valor-software.github.io/pulls

1. Click green button 'New pull request'.
2. The first branch should be 'development' the second one your. If branches are correct then press button 'Create pull request'.

Ex.
<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/10.png">

3. When pull request is created you should wait for passing all check according github actions and as result you will get link of preview channel. You can share with it and show as result for approving.

## Github steps

### File editing in github
- click the button edite file, it looks like

<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/2.png">

- when editing is finished you should commit the changes into your branch. For it you should click button 'Commit changes' in the end of the page

<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/3.png">


### File creating in github
 - Open the folder where you need to create a new file
 - In the right side press the button 'add file' and select 'Create new file'

<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/6.png">

- Put the name of your new file in field 'Name your file ...' and add needed content.
  <img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/7.png">

- Save changes with button 'Commit changes' in the end of the page
  <img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/3.png">

### Add media in github
All media of such repository is situated in folder assets. So if you need to add image or gif you should folow such path:

/apps/valor-software-site/src/assets/images

- Open the folder where you need to create a new file
- In the right side press the button 'add file' and select 'Upload files'

<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/6.png">

- Drag needed file to the field or choose your files
- Save changes with button 'Commit changes' in the end of the page
  <img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/3.png">

For getting remote link of file which you added, you need to open added media file, then click with the right button of mouse on it and choose 'open image in new tab'. Then you can use this url as remote.

### Delete created branch on github

- Visit link with all branches of repository https://github.com/valor-software/valor-software.github.io/branches
- in the list of all branches you should find your branch and click delete branch 

<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/8.png">

After you can see such confirm modal, choose 'Delete'

<img class="mx-auto center-block d-block" alt="example" src="../apps/valor-software-site/src/assets/img/instruction/9.png">

# Adoc refactoring

### Advices:

 - **Links**. More details https://docs.asciidoctor.org/asciidoc/latest/macros/links/ <br>
Link contains two parts, the first one it is link (https://...) and the second one it is the name for displaying (how customer will see it).

Ex. 
  https://...bla.com[the name for customer]

Open links in new tab. Add character '^' in the end of link name.
Ex. 

   https://github.com/valor-software/valor-software.github.io[repository^]

- **Titles**. More details https://docs.asciidoctor.org/asciidoc/latest/document/title/
<br> 
To create titles use character =

Ex. <br>
  == Test title
<br>
Result:<br>
<h2>Test title </h2>

Ex. <br>
==== Test title
<br>
Result:<br>
<h4>Test title </h4>

- **Line cutting**

If you need to cut the line as separate paragraph yse double enter.<br>
If you need to cut the line as a separate paragraph without additional space use  character '+'

Ex. 

  First test line. +
  Second test line.

- **Code displaying**. More information https://docs.asciidoctor.org/asciidoc/latest/verbatim/source-blocks/






