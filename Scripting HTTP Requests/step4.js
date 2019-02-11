const https = require('https');

const dataStore = [];

function getHTML(options, callback) {
  https.get(options, (response, error) => {
    response.on('data', (data) => {
      if (!error && response.statusCode === 200) {
        dataStore.push(data);
      }
    });

    response.on('end', () => {
      callback(dataStore);
    });
  });
}

function printHTML(html) {
  html.forEach((item) => {
    console.log(`${item}\n`);
  });
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html',
};

getHTML(requestOptions, printHTML);
