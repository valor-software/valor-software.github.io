'use strict'

const fs = require('fs-extra');
const Asciidoctor = require('asciidoctor');
const asciidoctor = Asciidoctor();
const dirFolder = __dirname;
const articlesList = new Set();
let articleOrder = new Set();

(async () => {
     fs.readdir(`${dirFolder}/../apps/valor-software-site/src/assets/articles`, { withFileTypes: true }).then(async files => {
          const list = files.map(async folder => {
             if (!folder.isDirectory()) {
                 return
             }

             await fs.readFile(`${dirFolder}/../apps/valor-software-site/src/assets/articles/${folder.name}/${folder.name}.adoc`, 'utf8').then(content => {
                 const htmlContent = asciidoctor.convert(content);
                 fs.writeFileSync(`apps/valor-software-site/src/assets/articles/${folder.name}/${folder.name}.html`, htmlContent, 'utf-8');
             }).catch(err => {
                 console.error(err);
                 return;
             })

             await fs.readJson(`${dirFolder}/../apps/valor-software-site/src/assets/articles/${folder.name}/${folder.name}.json`).then(jsonData => {
                 articleOrder.add({
                     name: folder.name,
                     order: jsonData.order,
                     title: jsonData.title
                 })
             }).catch(err => {
                 console.error(err);
                 return;
             });
         })
         await Promise.all(list).then(async val => {
             let titleList = new Set();
             const orderArr = [...articleOrder].sort((a, b) => b.order - a.order);
             const artList = orderArr.map(async article => {
                 articlesList.add(article.name);
                 titleList.add(article.title);
             });


             await Promise.all(artList).then(() => {
                const text = [...articlesList].map(JSON.stringify).reduce((prev, next) => `${prev}, ${next}`);
                const titleText = [...titleList].map(JSON.stringify).reduce((prev, next) => `${prev}, ${next}`);
                const arrContent = `export const articlesRefactoringTitlesList = [${text}];\nexport const articlesList = [${titleText}];\nconst orderNumberForNextArticle = ${artList.length + 1};`;
                fs.writeFileSync(`apps/valor-software-site/src/assets/articles/articlesList.ts`, arrContent, 'utf-8');
             })
         })
     }).catch (err => {
            console.error(err);
            return;
        })
})();
