export function titleRefactoring(title: string): string {
    let res = title.replace(/[^a-zA-Z 0-9\'\-]/gm, "-");
    res = res.replace(/[\s*]/gm, "-");
    res = res.replace(/()\--*/gm, "-");
    res = res.replace(/\'/gm, "");
    res = res.replace(/\/-/gm, "");
    res = res.replace(/\-*$/gm, "");
    return res.toLowerCase();
}