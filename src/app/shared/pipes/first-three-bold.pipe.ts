import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstThreeBold'
})
export class FirstThreeBoldPipe implements PipeTransform {

  transform(data: string): any {
    if (data.toLowerCase() === 'unknown') {
      return `<span class="text-secondary">Unknown</span>`;
    } else if (!this.isNullOrUndefined(data) && data.length === 3) {
      return `<strong>${data}</strong>`;
    } else if (!this.isNullOrUndefined(data) && data.length > 3) {
      return `<strong> ${data.substring(0, 3)} </strong> ${data.substring(4, data.length)}`;
    }
  }

  isNullOrUndefined(data: string) {
    return data === undefined || data === null;
  }

}
