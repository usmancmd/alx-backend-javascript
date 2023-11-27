const fs = require('fs');

function countStudents(path) {
  const students = {};
  const fields = {};
  let fileLength = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, content) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
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
        const numberOfStudents = fileLength - 1;
        console.log(`Number of students: ${numberOfStudents}`);
        for (const key of Object.keys(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${fields[key]}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(content);
      }
    });
  });
}

module.exports = countStudents;
