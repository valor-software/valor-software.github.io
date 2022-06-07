"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleRefactoring = void 0;
function titleRefactoring(link) {
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
exports.titleRefactoring = titleRefactoring;
//# sourceMappingURL=titleRefactoring.js.map