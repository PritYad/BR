import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqAccordionComponent } from './mq-accordion/mq-accordion.component';
import { MqTableComponent } from './mq-table/mq-table.component';

@NgModule({
  declarations: [MqAccordionComponent, MqTableComponent],
  imports: [
    CommonModule
  ],
  exports: [MqAccordionComponent, MqTableComponent]
})
export class SharedModule { }
