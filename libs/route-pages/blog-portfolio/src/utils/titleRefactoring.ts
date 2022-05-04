export function titleRefactoring (link: string): string {
    while(link.match(' '|| ':' || '–' || '—' || '&')) {
        link = link.replace(' ','_');
        link = link.replace(':','');
        link = link.replace('–','_');
        link = link.replace('—','_');
        link = link.replace('&','_');
        link = link.replace('\'','_');
    }
    return link;
}