const request = require('request');
const fs = require('fs');

request
  .get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => {
    throw err;
  })
  .on('response', (response) => {
    // Note 3
    console.log('Response Status Code: ', response.statusCode);
    console.log('Response Type', response.headers['content-type']);
  })
  .on('data', () => {
    console.log('downloading image...');
  })
  .on('end', () => {
    console.log('download complete');
  })
  .pipe(fs.createWriteStream('./future.jpg'));
