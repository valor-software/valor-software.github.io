'use strict'

const fs = require('fs-extra')
const path = require('path');
const Asciidoctor = require('asciidoctor');
const asciidoctor = Asciidoctor();
const articlesList = new Set();
let articleOrder = new Set();
const articlesFolderPath = path.resolve(process.cwd(), 'assets/articles');

(async () => {
    const files = await fs.readdir(articlesFolderPath, { withFileTypes: true });
    const folders = files.filter( item => item.isDirectory());
    const arr = folders.map(async (folder) => {
        const dirName = folder.name.substring(5);

        const folderFiles = (await (fs.readdir(`${articlesFolderPath}/${folder.name}`, {withFileTypes: true}))).map(async file => {
            const extension = path.extname(file.name).split('.')[1];
            if ( extension === 'adoc') {
                const content = await fs.readFile(`${articlesFolderPath}/${folder.name}/${file.name}`, 'utf8');
                const htmlContent = await asciidoctor.convert(content);
                if (!fs.existsSync(`apps/valor-software-site/src/assets/articles/${dirName}`)) {
                    await fs.mkdir(`apps/valor-software-site/src/assets/articles/${dirName}`).catch(() => {return})
                }

                await fs.writeFile(`apps/valor-software-site/src/assets/articles/${dirName}/${dirName}.html`, htmlContent, 'utf-8')
            }

            if (extension === 'json') {
                const jsonData = await fs.readJSON(`${articlesFolderPath}/${folder.name}/${file.name}`);
                articleOrder.add({
                    name: folder.name,
                    order: jsonData.order,
                    title: jsonData.title
                });
                if (!fs.existsSync(`apps/valor-software-site/src/assets/articles/${dirName}`)) {
                    await fs.mkdir(`apps/valor-software-site/src/assets/articles/${dirName}`).catch(() => {return})
                }

                await fs.copyFile(`${articlesFolderPath}/${folder.name}/${file.name}`, `apps/valor-software-site/src/assets/articles/${dirName}/${dirName}.json`)
            }

            if (extension !== 'adoc' && extension !== 'html' && extension !== 'json') {
                if (!fs.existsSync(`apps/valor-software-site/src/assets/articles/${dirName}`)) {
                    await fs.mkdir(`apps/valor-software-site/src/assets/articles/${dirName}`).catch(() => {return})
                }

                await fs.copyFile(`${articlesFolderPath}/${folder.name}/${file.name}`, `apps/valor-software-site/src/assets/articles/${dirName}/${file.name}`)
            }
        });
        await Promise.all(folderFiles)
    });

    await Promise.all(arr);
    let titleList = new Set();
    // @ts-ignore
    const orderArr = [...articleOrder].sort((a, b) => b.order - a.order);
    const artList = orderArr.map(async article => {
        // @ts-ignore
        articlesList.add(article.name);
        // @ts-ignore
        titleList.add(article.title);
    });
    await Promise.all(artList);
    // @ts-ignore
    const text = [...articlesList].map(JSON.stringify).reduce((prev, next) => `${prev}, ${next}`);
    // @ts-ignore
    const titleText = [...titleList].map(JSON.stringify).reduce((prev, next) => `${prev}, ${next}`);
    const arrContent = `export const articlesRefactoringTitlesList = [${text}];\nexport const articlesList = [${titleText}];\nconst orderNumberForNextArticle = ${artList.length + 1};`;
    fs.writeFileSync(`apps/valor-software-site/src/assets/articles/articlesList.ts`, arrContent, 'utf-8');
})();
