import { FirstThreeBoldPipe } from './first-three-bold.pipe';

describe('FirstThreeBoldPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstThreeBoldPipe();
    expect(pipe).toBeTruthy();
  });
});
