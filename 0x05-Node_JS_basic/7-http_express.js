const { readFile } = require('fs');
const express = require('express');

const app = express();
function countStudents (path) {
  const students = {};
  const fields = {};
  let fileLength = 0;
  return new Promise((resolve, reject) => {
    readFile(path, (err, content) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = content.toString().split('\r\n');
        for (let i = 0; i < lines.length; i++) {
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

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (request, response) => {
  countStudents(process.argv[2]).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(1245, () => {
});

module.exports = app;
