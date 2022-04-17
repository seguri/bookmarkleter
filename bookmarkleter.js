const UglifyJS = require('uglify-js');

const jQueryWrap = code => `void function() {
  function onload($) {${code}};
  if (!window.jQuery) {
    const s = document.createElement('script');
    s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    s.onload = function() {onload(jQuery)};
    document.body.appendChild(s);
  } else {
    onload(window.jQuery);
  }
}();`;

module.exports = exports = (code, options = {}) => {
  let result = code;

  if (options.jquery || options.jQuery) {
    result = jQueryWrap(result);
  } else if (options.iife) {
    result = `void function() {${result}}();`;
  }

  if (options.minify) {
    result = UglifyJS.minify(result).code;
  }

  return `javascript:${result}`;
};
