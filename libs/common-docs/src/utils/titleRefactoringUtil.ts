export function checkHTMLExtension(link: string): string {
    return link.split('.html')[0];
}

export function titleRefactoring(title: string): string {
    let res = title.replace(/[^a-zA-Z 0-9\'\-]/gm, "-");
    res = res.replace(/[\s*]/gm, "-");
    res = res.replace(/()\--*/gm, "-");
    res = res.replace(/\'/gm, "");
    res = res.replace(/\/-/gm, "");
    res = res.replace(/\-*$/gm, "");
    return res.toLowerCase();
}