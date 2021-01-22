import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqTableComponent } from './mq-table.component';

describe('MqTableComponent', () => {
  let component: MqTableComponent;
  let fixture: ComponentFixture<MqTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
