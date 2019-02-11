const https = require('https');

const dataStore = [];

function getAndPrintHTML(options) {
  https.get(options, (response, error) => {
    response.on('data', (data) => {
      if (!error && response.statusCode === 200) {
        dataStore.push(data);
      }
    });

    response.on('end', () => {
      dataStore.forEach((item) => {
        console.log(`${item}\n`);
      });
    });
  });
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html',
};

getAndPrintHTML(requestOptions);
