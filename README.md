# bookmarkleter

Create bookmarklets in your browser with a simple copy and paste.

**https://seguri.github.io/bookmarkleter/**

Thanks to [@chriszarate](https://github.com/chriszarate) for the original work.

## Building UglifyJS for the browser

    cd $(mktemp -d)
    npm init --yes
    npm i uglify-js
    echo "$(jq '.scripts.build = "uglifyjs --self -c -m -o uglifyjs.js"' package.json)" > package.json
    npm run build
    cp uglifyjs.js $OLDPWD/

