'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Asciidoctor = require('asciidoctor');

const asciidoctor = Asciidoctor();
const articlesList = new Set();
const articleOrder = new Set();
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
                    await fs.mkdir(`apps/valor-software-site/src/assets/articles/${dirName}`).catch(() => {return;});
                }

                await fs.writeFile(`apps/valor-software-site/src/assets/articles/${dirName}/${dirName}.html`, htmlContent, 'utf-8');
            }

            if (extension === 'json') {
                const jsonData = await fs.readJSON(`${articlesFolderPath}/${folder.name}/${file.name}`);
                articleOrder.add({
                    name: folder.name,
                    order: jsonData.order,
                    title: jsonData.title
                });
                if (!fs.existsSync(`apps/valor-software-site/src/assets/articles/${dirName}`)) {
                    await fs.mkdir(`apps/valor-software-site/src/assets/articles/${dirName}`).catch(() => {return;});
                }

                await fs.copyFile(`${articlesFolderPath}/${folder.name}/${file.name}`, `apps/valor-software-site/src/assets/articles/${dirName}/${dirName}.json`);
            }

            if (extension !== 'adoc' && extension !== 'html' && extension !== 'json') {
                if (!fs.existsSync(`apps/valor-software-site/src/assets/articles/${dirName}`)) {
                    await fs.mkdir(`apps/valor-software-site/src/assets/articles/${dirName}`).catch(() => {return;});
                }

                await fs.copyFile(`${articlesFolderPath}/${folder.name}/${file.name}`, `apps/valor-software-site/src/assets/articles/${dirName}/${file.name}`);
            }
        });
        await Promise.all(folderFiles);
    });

    await Promise.all(arr);
    const titleList = new Set();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const orderArr = [...articleOrder].sort((a, b) => b.order - a.order);
    const artList = orderArr.map(async article => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        articlesList.add(article.name);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        titleList.add(article.title);
    });
    await Promise.all(artList);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const text = [...articlesList].map(JSON.stringify).reduce((prev, next) => `${prev}, ${next}`);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const titleText = [...titleList].map(JSON.stringify).reduce((prev, next) => `${prev}, ${next}`);
    const arrContent = `export const articlesRefactoringTitlesList = [${text}];\nexport const articlesList = [${titleText}];\nconst orderNumberForNextArticle = ${artList.length + 1};`;
    fs.writeFileSync(`apps/valor-software-site/src/assets/articles/articlesList.ts`, arrContent, 'utf-8');
})();
