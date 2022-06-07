export function titleRefactoring(link: string): string {
    // eslint-disable-next-line no-useless-escape
    while(link.match(' '|| ':' || '_' || '–' || '—' || '&' || ',' || '#' || '$' || '%' || '*' || '+' || '\'' || `\'` || '/' || ';' || '=' || '?' || '!' || '@' || '[' || ']' || '(' || ')' || `'` || '--')) {
        // eslint-disable-next-line no-useless-escape
        link = link.replace(`\'`, '');
        link = link.replace('!', '');
        link = link.replace('.','-');
        link = link.replace(' ','-');
        link = link.replace(':','-');
        link = link.replace('_','-');
        link = link.replace('—','-');
        link = link.replace('.','-');
        link = link.replace('&','-');
        link = link.replace(',','-');
        link = link.replace('#','-');
        link = link.replace('$','-');
        link = link.replace('%','-');
        link = link.replace('*','-');
        link = link.replace('+','-');
        link = link.replace('\'','-');
        link = link.replace('/','-');
        link = link.replace(';','-');
        link = link.replace('=','-');
        link = link.replace('?','-');
        link = link.replace('@','-');
        link = link.replace('[','-');
        link = link.replace(']','-');
        link = link.replace('(','-');
        link = link.replace(')','-');
        link = link.replace(`'`,'');
        link = link.replace(`–`,'-');
        link = link.replace('--','-');
    }
    return link.replace(/-$/, '').toLowerCase();
}

export function checkHTMLExtension(link: string): string {
    return link.split('.html')[0];
}