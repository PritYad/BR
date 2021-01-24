import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mq-accordion',
  templateUrl: './mq-accordion.component.html',
  styleUrls: ['./mq-accordion.component.scss']
})
export class MqAccordionComponent {

  @Input() heading: string;
  @Input() isOpen: boolean = false;

}
