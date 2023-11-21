const http = require('http');

const app = http.createServer((request, response) => {
  response.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('server listen on port 1245');
});

module.exports = app;
