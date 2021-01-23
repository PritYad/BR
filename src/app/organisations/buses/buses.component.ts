import { Component, Input } from '@angular/core';
import { BusData } from 'src/app/models/organisation';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent {

  @Input() data = [];

  STATUS = {
    onTime: 'On Time',
    late: 'Late',
    early: 'Early',
    unknown: 'Unknown'
  };

  headers = [
    {
      label: 'Bus ID',
      id: 'busId'
    }, {
      label: 'Route Variant',
      id: 'routeVariant'
    }, {
      label: 'Status',
      id: 'deviationFromTimetable',
    }
  ];

  constructor() { }

  isBusOnTime(row: BusData) {
    return row.deviationFromTimetable > 0 && row.deviationFromTimetable < 300;
  }

  isBusLate(row: BusData) {
    return row.deviationFromTimetable > 300;
  }

  isBusEarly(row: BusData) {
    return row.deviationFromTimetable < 0;
  }

  isUnknown(row: BusData, id: string | number) {
    return row[id] === null || row[id] === undefined || row[id].toString().toLowerCase() === 'unknown';
  }

  getRouteVariantLabel(data: string) {
    return data.length > 3 ? [data.substring(0, 3), data.substring(4, data.length)] : [data];
  }

}
