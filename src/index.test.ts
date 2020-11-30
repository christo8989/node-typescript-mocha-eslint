import { hello } from '~/hello';
import { expect } from 'chai';

describe('Test Example', () => {
  it('should say "Hello World!"', () => {
    const actual = hello('World');
    const expected = 'Hello World!';
    expect(actual).to.equal(expected);
  });
});