import {ScrollPipe} from './scroll.pipe';

describe('ScrollPipe', () => {
  it('create an instance', () => {
    const pipe = new ScrollPipe();
    expect(pipe).toBeTruthy();
  });

  it('sorts letters of words', () => {
    const pipe = new ScrollPipe();
    expect(pipe.transform('acbd')).toBe('abcd');
  });

  it('keeps first and last letter in place', () => {
    const pipe = new ScrollPipe();
    expect(pipe.transform('dbca')).toBe('dbca');
  });

  it('respects word boundaries', () => {
    const pipe = new ScrollPipe();
    expect(pipe.transform('cd ab')).toBe('cd ab');
  });

  it('sorts all words', () => {
    const pipe = new ScrollPipe();
    expect(pipe.transform('adcbe ehgfi')).toBe('abcde efghi');
  });

  it('ignores case', () => {
    const pipe = new ScrollPipe();
    expect(pipe.transform('aCbd')).toBe('abCd');
    expect(pipe.transform('acBd')).toBe('aBcd');
  });
});
