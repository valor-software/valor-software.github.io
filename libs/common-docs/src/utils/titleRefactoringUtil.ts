export function blogTitleRefactoring(link: string): string {
    while(link.match(' '|| ':' || '_' || '—' || '&' || ',' || '#' || '$' || '%' || '*' || '+' || '\'' || `\'` || '/' || ';' || '=' || '?' || '!' || '@' || '[' || ']' || '(' || ')' || `'` || '--')) {
        link = link.replace(`\'`, '')
        link = link.replace('!', '')
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
        link = link.replace(']','-')
        link = link.replace('(','-')
        link = link.replace(')','-')
        link = link.replace(`'`,'')
        link = link.replace('--','-');
    }

    return link.toLowerCase();
}

export function checkHTMLExtension(link: string): string {
    return link.split('.html')[0];
}