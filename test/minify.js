const assert = require('assert');
const bookmarkleter = require('../bookmarkleter');

describe('minify', () => {
  describe('disabled', () => {
    it('should not minify the code', () => {
      const code = 'function add(first, second) { return first + second; }';
      const expected =
        'javascript:function add(first, second) { return first + second; }';
      assert.equal(expected, bookmarkleter(code));
    });
  });
  describe('enabled', () => {
    it('should minify the code', () => {
      const code = 'function add(first, second) { return first + second; }';
      const expected = 'javascript:function add(n,d){return n+d}';
      assert.equal(expected, bookmarkleter(code, {minify: true}));
    });
  });
});
