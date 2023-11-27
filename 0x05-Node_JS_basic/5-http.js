const http = require('http');
const { readFile } = require('fs');

function countStudents(path) {
  const students = {};
  const fields = {};
  let fileLength = 0;
  return new Promise((resolve, reject) => {
    readFile(path, (err, content) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = content.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i].trim() !== '') {
            fileLength += 1;
            const field = lines[i].split(',');

            if (students[field[3]]) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            if (fields[field[3]]) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = fileLength - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((output) => {
      response.end(output);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(1245, () => {
});

module.exports = app;
