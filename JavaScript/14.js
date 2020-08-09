const fs = require('fs');

const head = (n) => {
  data = fs.readFileSync('../sources/popular-names.txt', 'utf8').split(/\n/);
  for (let i = 0; i < n; i++) {
    console.log(data[i]);
  }
}

head(5);