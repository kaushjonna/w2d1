const https = require('https');

function getAndPrintHTMLChunks() {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };

  https.get(requestOptions, (response, error) => {
    response.setEncoding('utf8');

    response.on('data', (data) => {
      if (!error && response.statusCode === 200) {
        console.log(`${data}\n`);
      } else {
        console.log('something went wrong');
      }
    });

    response.on('end', () => {
      console.log('Response stream complete.');
    });
  });
}

getAndPrintHTMLChunks();
