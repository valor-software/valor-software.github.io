'use strict'

const fs = require('fs');
const Asciidoctor = require('asciidoctor');
const asciidoctor = Asciidoctor();
const dirFolder = __dirname;
const articlesList = new Set();

fs.readdir(`${dirFolder}/../apps/valor-software-site/src/assets/articles`, { withFileTypes: true }, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    data.map(folder => {
        if (!folder.isDirectory()) {
            return
        }

        fs.readFile(`${dirFolder}/../apps/valor-software-site/src/assets/articles/${folder.name}/${folder.name}.adoc`, 'utf8', (err, content) => {
            const htmlContent = asciidoctor.convert(content);
            articlesList.add(folder.name);
            const text = [...articlesList].map(JSON.stringify).reduce((prev, next) => `${prev}, ${next}`);
            const arrContent = `export const articlesList = [${text}];`
            fs.writeFileSync(`apps/valor-software-site/src/assets/articles/articlesList.ts`, arrContent, 'utf-8');

            fs.appendFile(`apps/valor-software-site/src/assets/articles/${folder.name}/${folder.name}.html`, htmlContent, function (err) {
                if (err) throw err;
                console.log('Saved!', `${folder.name}.html`);
            });
        })
    })
});
