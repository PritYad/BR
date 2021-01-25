import { BusStatusPipe } from './bus-status.pipe';

describe('BusStatusPipe', () => {
  const mockData = [
    77,
    340,
    -287,
    'UNKNOWN',
    null
  ];
  it('create an instance', () => {
    const pipe = new BusStatusPipe();
    expect(pipe).toBeTruthy();
  });

  describe('when isBusLate is called', () => {
    it('returns true if deviationFromTimetable is greater than 300', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusLate(mockData[1])).toBeTruthy();
    });

    it('returns false if deviationFromTimetable is less than 300', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusLate(mockData[0])).toBeFalsy();
    });

    it('returns false if deviationFromTimetable is less than 0', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusLate(mockData[2])).toBeFalsy();
    });
  });

  describe('when isBusLate is called', () => {
    it('returns true if deviationFromTimetable is greater than 0 and less than 300', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusOnTime(mockData[0])).toBeTruthy();
    });

    it('returns false if deviationFromTimetable is greater than 0 and 300', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusOnTime(mockData[1])).toBeFalsy();
    });

    it('returns false if deviationFromTimetable is less than 0', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusOnTime(mockData[2])).toBeFalsy();
    });
  });

  describe('when isBusEarly is called', () => {
    it('returns true if deviationFromTimetable is less than 0', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusEarly(mockData[2])).toBeTruthy();
    });

    it('returns false if deviationFromTimetable is greater than 0 and 300', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusEarly(mockData[1])).toBeFalsy();
    });

    it('returns false if deviationFromTimetable is less than 300', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isBusEarly(mockData[0])).toBeFalsy();
    });
  });

  describe('when isUnknown is called', () => {
    it('returns true if deviationFromTimetable is unknown', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isUnknown(mockData[3])).toBeTruthy();
    });

    it('returns true if deviationFromTimetable is null or undefined', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isUnknown(mockData[4])).toBeTruthy();
    });

    it('returns false if deviationFromTimetable is not null/undefined/unknown', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.isUnknown(mockData[0])).toBeFalsy();
    });
  });

  describe('when transform is called', () => {
    it('returns On time along with class when value is greater than 0 and less than 300', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.transform(mockData[0])).toEqual(`<span class="text-success">${pipe.STATUS.onTime}</span>`);
    });

    it('returns Late along with class if value is greater than 300', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.transform(mockData[1])).toEqual(`<span class="text-primary">${pipe.STATUS.late}</span>`);
    });

    it('returns early along with class if value is less than 0', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.transform(mockData[2])).toEqual(`<span class="text-error">${pipe.STATUS.early}</span>`);
    });

    it('returns unknow along with class if value is null/undefined/unknown', () => {
      const pipe = new BusStatusPipe();
      expect(pipe.transform(mockData[3])).toEqual(`<span class="text-secondary">${pipe.STATUS.unknown}</span>`);
    });

  });
});
