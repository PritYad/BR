import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqAccordionComponent } from './mq-accordion/mq-accordion.component';
import { FirstThreeBoldPipe } from './pipes/first-three-bold.pipe';
import { BusStatusPipe } from './pipes/bus-status.pipe';
import { MqAlertComponent } from './mq-alert/mq-alert.component';

@NgModule({
  declarations: [MqAccordionComponent, FirstThreeBoldPipe, BusStatusPipe, MqAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [MqAccordionComponent, FirstThreeBoldPipe, BusStatusPipe, MqAlertComponent]
})
export class SharedModule { }
