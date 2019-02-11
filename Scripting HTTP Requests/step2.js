const https = require('https');

const dataChunks = [];

function getAndPrintHTMLChunks() {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html',
  };

  https.get(requestOptions, (response, error) => {
    response.setEncoding('utf8');

    response.on('data', (data) => {
      if (!error && response.statusCode === 200) {
        dataChunks.push(`${data}`);
      } else {
        console.log('something went wrong');
      }
    });

    response.on('end', () => {
      console.log('Response stream complete.');
      dataChunks.forEach((item) => {
        console.log(item);
      });
    });
  });
}

getAndPrintHTMLChunks();
