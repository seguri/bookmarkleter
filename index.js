const bookmarkleter = require('./bookmarkleter');

const iife = document.getElementById('iife');
const jquery = document.getElementById('jquery');
const minify = document.getElementById('minify');
const bookmarkletName = document.getElementById('bookmarkletName');
const code = document.getElementById('code');
const outputText = document.getElementById('outputText');
const link = document.getElementById('link');

onBookmarkletNameChange = event => {
  link.textContent = bookmarkletName.value;
};

onCodeChange = event => {
  const options = {
    iife: iife.checked,
    jquery: jquery.checked,
    minify: minify.checked,
  };
  const result = bookmarkleter(code.value, options);
  outputText.innerHTML = result;
  link.href = result;
};

iife.addEventListener('change', onCodeChange);
jquery.addEventListener('change', onCodeChange);
minify.addEventListener('change', onCodeChange);
bookmarkletName.addEventListener('change', onBookmarkletNameChange);
code.addEventListener('change', onCodeChange);

onBookmarkletNameChange();
onCodeChange();
