import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kana'
})
export class KanaPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let str = value.replace(/[\u30a1-\u30f6]/g, (match) => {
      var chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
    });
    return str;
  }

}
