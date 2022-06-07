"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHTMLExtension = exports.blogTitleRefactoring = void 0;
function blogTitleRefactoring(link) {
    // eslint-disable-next-line no-useless-escape
    while (link.match(' ' || ':' || '_' || '–' || '—' || '&' || ',' || '#' || '$' || '%' || '*' || '+' || '\'' || `\'` || '/' || ';' || '=' || '?' || '!' || '@' || '[' || ']' || '(' || ')' || `'` || '--')) {
        // eslint-disable-next-line no-useless-escape
        link = link.replace(`\'`, '');
        link = link.replace('!', '');
        link = link.replace('.', '-');
        link = link.replace(' ', '-');
        link = link.replace(':', '-');
        link = link.replace('_', '-');
        link = link.replace('—', '-');
        link = link.replace('.', '-');
        link = link.replace('&', '-');
        link = link.replace(',', '-');
        link = link.replace('#', '-');
        link = link.replace('$', '-');
        link = link.replace('%', '-');
        link = link.replace('*', '-');
        link = link.replace('+', '-');
        link = link.replace('\'', '-');
        link = link.replace('/', '-');
        link = link.replace(';', '-');
        link = link.replace('=', '-');
        link = link.replace('?', '-');
        link = link.replace('@', '-');
        link = link.replace('[', '-');
        link = link.replace(']', '-');
        link = link.replace('(', '-');
        link = link.replace(')', '-');
        link = link.replace(`'`, '');
        link = link.replace(`–`, '-');
        link = link.replace('--', '-');
    }
    return link.replace(/-$/, '').toLowerCase();
}
exports.blogTitleRefactoring = blogTitleRefactoring;
function checkHTMLExtension(link) {
    return link.split('.html')[0];
}
exports.checkHTMLExtension = checkHTMLExtension;
//# sourceMappingURL=titleRefactoringUtil.js.map