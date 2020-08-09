
const fs = require('fs');

const writeFile = () => {
  data = fs.readFileSync('../sources/popular-names.txt', 'utf8');
  // [[...data.split(/\n/).split(/\t/)]].forEach((elem, i, self) => names.push(elem));
  fs.writeFileSync('../sources/col1.txt', data.split(/\n/).map(elem => elem.split(/\t/)[0]));
  fs.writeFileSync('../sources/col2.txt', data.split(/\n/).map(elem => elem.split(/\t/)[1]));
}

writeFile();
