import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqAccordionComponent } from './mq-accordion.component';

describe('MqAccordionComponent', () => {
  let component: MqAccordionComponent;
  let fixture: ComponentFixture<MqAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
