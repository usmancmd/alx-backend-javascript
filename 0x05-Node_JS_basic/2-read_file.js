const fs = require('fs');

function countStudents (path) {
  const students = {};
  const fields = {};
  let fileLength = 0;
  try {
    const content = fs.readFileSync(path, 'utf-8');
    const lines = content.toString().split('\r\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] !== '') {
        fileLength += 1;
        const field = lines[i].toString().split(',');
        // console.log(field[3])
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    // console.log(lines)
    const NoOfStudent = fileLength - 1;
    console.log(`Number of students: ${NoOfStudent}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (e) {
    throw Error('Cannot load the database');
    // console.log("Cannot load the database")
  }
}

module.exports = countStudents;
