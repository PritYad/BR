import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesComponent } from './buses.component';

describe('BusesComponent', () => {
  let component: BusesComponent;
  let fixture: ComponentFixture<BusesComponent>;
  const mockData = [
    {
      busId: '42612',
      routeVariant: '891 2 1',
      deviationFromTimetable: 77
    },
    {
      busId: '29016',
      routeVariant: '400 1 1',
      deviationFromTimetable: 340
    },
    {
      busId: '88836',
      routeVariant: 'M20 1 0',
      deviationFromTimetable: -287
    },
    {
      busId: '88836',
      routeVariant: 'M20 1 0',
      deviationFromTimetable: 'UNKNOWN'
    },
    {
      busId: '88836',
      routeVariant: 'M20 1 0',
      deviationFromTimetable: null
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when isBusLate is called', () => {
    it('returns true if deviationFromTimetable is greater than 300', () => {
      expect(component.isBusLate(mockData[1])).toBeTruthy();
    });

    it('returns false if deviationFromTimetable is less than 300', () => {
      expect(component.isBusLate(mockData[0])).toBeFalsy();
    });

    it('returns false if deviationFromTimetable is less than 0', () => {
      expect(component.isBusLate(mockData[2])).toBeFalsy();
    });
  });

  describe('when isBusLate is called', () => {
    it('returns true if deviationFromTimetable is greater than 0 and less than 300', () => {
      expect(component.isBusOnTime(mockData[0])).toBeTruthy();
    });

    it('returns false if deviationFromTimetable is greater than 0 and 300', () => {
      expect(component.isBusOnTime(mockData[1])).toBeFalsy();
    });

    it('returns false if deviationFromTimetable is less than 0', () => {
      expect(component.isBusOnTime(mockData[2])).toBeFalsy();
    });
  });

  describe('when isBusEarly is called', () => {
    it('returns true if deviationFromTimetable is less than 0', () => {
      expect(component.isBusEarly(mockData[2])).toBeTruthy();
    });

    it('returns false if deviationFromTimetable is greater than 0 and 300', () => {
      expect(component.isBusEarly(mockData[1])).toBeFalsy();
    });

    it('returns false if deviationFromTimetable is less than 300', () => {
      expect(component.isBusEarly(mockData[0])).toBeFalsy();
    });
  });

  describe('when isUnknown is called', () => {
    it('returns true if deviationFromTimetable is unknown', () => {
      expect(component.isUnknown(mockData[3], 'deviationFromTimetable')).toBeTruthy();
    });

    it('returns true if deviationFromTimetable is null or undefined', () => {
      expect(component.isUnknown(mockData[4], 'deviationFromTimetable')).toBeTruthy();
    });

    it('returns false if deviationFromTimetable is not null/undefined/unknown', () => {
      expect(component.isUnknown(mockData[0], 'deviationFromTimetable')).toBeFalsy();
    });
  });

  it('getRouteVariantLabel is called, return first three letters of route variant', () => {
    expect(component.getRouteVariantLabel(mockData[0].routeVariant)).toEqual(['891', '2 1']);
  });

});
