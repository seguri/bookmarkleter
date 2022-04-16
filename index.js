const iife = document.getElementById("iife")
const jquery = document.getElementById("jquery")
const minify = document.getElementById("minify")
const bookmarkletName = document.getElementById("bookmarkletName")
const code = document.getElementById("code")
const outputText = document.getElementById("outputText")
const link = document.getElementById("link")

onBookmarkletNameChange = (event) => {
  link.textContent = bookmarkletName.value
}

onCodeChange = (event) => {
  const minified = UglifyJS.minify(code.value).code
  outputText.innerHTML = minified
  link.href = `javascript:void function(){${minified}}()`
}

bookmarkletName.addEventListener('change', onBookmarkletNameChange)
code.addEventListener('change', onCodeChange)

onBookmarkletNameChange()
onCodeChange()