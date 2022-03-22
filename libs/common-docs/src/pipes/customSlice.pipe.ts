import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customSlice'})
export class CustomSlicePipe implements PipeTransform {
    transform(value?: string, symbolsAmount = 40): string | undefined {
        if (!value || !symbolsAmount) {
            return value;
        }

        const myReg = new RegExp("^.{" + symbolsAmount + "}\\w*");
        const a = value.match(myReg);

        let res = a?.[0];
        if (res && res.length && res.length > symbolsAmount) {
            const textArray = res?.split(' ');
            res = textArray?.slice(0, textArray?.length - 1).join(' ');
        }

        if (res?.length && res?.length < value.length) {
            res = `${res} ...`;
        }

        return res || value;
    }
}