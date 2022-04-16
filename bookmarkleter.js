const UglifyJS = require('uglify-js')

module.exports = exports = (code, options={}) => {
  let result = code

  if (options.minify) {
    result = UglifyJS.minify(code).code
  }

  return `javascript:${result}`
}

