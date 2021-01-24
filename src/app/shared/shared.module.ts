import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqAccordionComponent } from './mq-accordion/mq-accordion.component';

@NgModule({
  declarations: [MqAccordionComponent],
  imports: [
    CommonModule
  ],
  exports: [MqAccordionComponent]
})
export class SharedModule { }
