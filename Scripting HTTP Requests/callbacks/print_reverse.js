const getHTML = require('./http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html',
};

function printUpperCase(html) {
  html.forEach((element) => {
    console.log(
      `${element} \n`
        .split()
        .reverse()
        .join(),
    );
  });
}

getHTML(requestOptions, printUpperCase);
