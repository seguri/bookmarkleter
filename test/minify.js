const assert = require('assert');
const bookmarkleter = require('../bookmarkleter');

describe('minify', () => {
  describe('disabled', () => {
    it('should not minify a function declaration', () => {
      const code = 'function add(first, second) { return first + second; }';
      const expected =
        'javascript:function add(first, second) { return first + second; }';
      assert.equal(expected, bookmarkleter(code));
    });
    it('should not minify a log statement', () => {
      const code = 'console.log($.fn.jquery);';
      const expected = 'javascript:console.log($.fn.jquery);';
      assert.equal(expected, bookmarkleter(code));
    });
  });
  describe('enabled', () => {
    it('should minify a function declaration', () => {
      const code = 'function add(first, second) { return first + second; }';
      const expected = 'javascript:function add(n,d){return n+d}';
      assert.equal(expected, bookmarkleter(code, {minify: true}));
    });
    it('should not minify a log statement', () => {
      const code = 'console.log($.fn.jquery);';
      const expected = 'javascript:console.log($.fn.jquery);';
      assert.equal(expected, bookmarkleter(code, {minify: true}));
    });
  });
});
