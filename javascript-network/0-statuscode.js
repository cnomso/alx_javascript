const request = require('request');


request('http://www.google.com', (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log('code:' + response.statusCode);
    }
}); 