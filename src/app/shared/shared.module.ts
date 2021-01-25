import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqAccordionComponent } from './mq-accordion/mq-accordion.component';
import { FirstThreeBoldPipe } from './pipes/first-three-bold.pipe';
import { BusStatusPipe } from './pipes/bus-status.pipe';

@NgModule({
  declarations: [MqAccordionComponent, FirstThreeBoldPipe, BusStatusPipe],
  imports: [
    CommonModule
  ],
  exports: [MqAccordionComponent, FirstThreeBoldPipe, BusStatusPipe]
})
export class SharedModule { }
