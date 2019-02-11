const getHTML = require('./step5');

function printHTML(html) {
  html.forEach((item) => {
    console.log(`${item}\n`);
  });
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html',
};

getHTML(requestOptions, printHTML);
