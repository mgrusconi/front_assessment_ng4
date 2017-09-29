import { NormalizePipe } from './normalize.pipe';

describe('NormalizePipe', () => {
  it('Testing Behavior', () => {
    const pipe = new NormalizePipe();
    let str = 'Test String';
    let str2 = 'teststring';
    expect(pipe.transform(str)).toEqual(str2);
  });
});