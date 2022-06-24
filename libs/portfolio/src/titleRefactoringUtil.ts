export function titleRefactoring(title: string): string {
    // eslint-disable-next-line no-useless-escape
    let res = title.replace(/[^a-zA-Z 0-9\'\-]/gm, "-");
    res = res.replace(/[\s*]/gm, "-");
    // eslint-disable-next-line no-useless-escape
    res = res.replace(/()\--*/gm, "-");
    // eslint-disable-next-line no-useless-escape
    res = res.replace(/\'/gm, "");
    res = res.replace(/\/-/gm, "");
    // eslint-disable-next-line no-useless-escape
    res = res.replace(/\-*$/gm, "");
    return res.toLowerCase();
}

export function checkHTMLExtension(link: string): string {
    return link.split('.html')[0];
}