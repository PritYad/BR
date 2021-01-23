import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-mq-accordion',
  templateUrl: './mq-accordion.component.html',
  styleUrls: ['./mq-accordion.component.scss']
})
export class MqAccordionComponent implements OnInit {

  @Input() heading: string;
  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleAccordion() {
    // this.onOpen.emit();
  }

}
