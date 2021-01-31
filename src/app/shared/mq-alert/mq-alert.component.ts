import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mq-alert',
  template: `
  <div *ngIf="showAlert">
    <p class="mq-box" [ngClass]="{
        'mq-box__success ' : type === 'success',
        'mq-box__error ' : type === 'error',
        'mq-box__warning ' : type === 'warning',
        'mq-box__primary ' : type === 'primary'
        }">
        <span>{{message}}</span>
        <span>
          <img src="../../assets/media/delete.svg" alt="bus_logo" class="mq-box__close" (click)="close()"/>
        </span>
    </p>
  </div>
  `,
  styleUrls: ['./mq-alert.component.scss']
})
export class MqAlertComponent implements OnInit {
  @Input() showAlert: boolean;
  @Input() message = '';
  @Input() type = 'success';

  ngOnInit() {
    console.log(this.showAlert);
  }

  close() {
    this.showAlert = false;
  }

}
