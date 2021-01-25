import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busStatus'
})
export class BusStatusPipe implements PipeTransform {

  STATUS = {
    onTime: 'On Time',
    late: 'Late',
    early: 'Early',
    unknown: 'Unknown'
  };

  transform(value: any): any {
    if (this.isBusOnTime(value)) {
      return `<span class="text-success">${this.STATUS.onTime}</span>`;
    } else if (this.isBusLate(value)) {
      return `<span class="text-primary">${this.STATUS.late}</span>`;
    } else if (this.isBusEarly(value)) {
      return `<span class="text-error">${this.STATUS.early}</span>`;
    } else if (this.isUnknown(value)) {
      return `<span class="text-secondary">${this.STATUS.unknown}</span>`;
    } else {
      return `<span class="text-error"> - </span>`;
    }
  }

  isBusOnTime(row: string | number) {
    return row > 0 && row < 300;
  }

  isBusLate(row: string | number) {
    return row > 300;
  }

  isBusEarly(row: string | number) {
    return row < 0;
  }

  isUnknown(row: string | number) {
    return row === null || row === undefined || row.toString().toLowerCase() === 'unknown';
  }

}
