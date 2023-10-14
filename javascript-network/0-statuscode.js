const request = require('request');


request('http://www.google.com', (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log('code: ' + response.statusCode);
    }
    if (!error && response.statusCode === 301) {
        console.log('code: ' + response.statusCode);
    }
    if (!error && response.statusCode === 204) {
        console.log('code:' + response.statusCode);
    }
    if (!error && response.statusCode === 404) {
        console.log('code:' + response.statusCode);
    }
}); 