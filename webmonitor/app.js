const https = require('https');

const options = {
    hostname: process.env.TARGET,
    method: process.env.METHOD
  };

console.log('** webmonitor ** Webseite: %s; http-Methode: %s; %dms Interval', options.hostname, options.method, process.env.INTERVAL);
  
let i = 1;
let start = new Date().getTime();
setInterval(() => {    
    start = new Date().getTime();
    console.log('Request Nummer: %d; um %d', i++, start);
    var req = https.request(options, (res) => {
        var end = new Date().getTime();    
        var duration = end-start;    
        console.log('Response Status: %s um %d; Dauer: %dms', res.statusCode, end, duration);
    });
    req.on('error', (e) => {
        console.error(e);
      });
    req.end();
}, process.env.INTERVAL)