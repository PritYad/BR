import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mq-accordion',
  templateUrl: './mq-accordion.component.html',
  styleUrls: ['./mq-accordion.component.scss']
})
export class MqAccordionComponent implements OnInit {

  @Input() heading: string;
  constructor() { }

  ngOnInit() {
  }

}
