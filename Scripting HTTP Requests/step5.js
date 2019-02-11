const https = require('https');

const dataStore = [];

module.exports = function getHTML(options, callback) {
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
};
