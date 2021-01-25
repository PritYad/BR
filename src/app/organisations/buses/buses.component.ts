import { Component, Input } from '@angular/core';
import { BusData } from 'src/app/models/organisation';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html'
})
export class BusesComponent {

  @Input() data = [];

  headers = ['Bus ID', 'Route Variant', 'Status'];

  constructor() { }

}
