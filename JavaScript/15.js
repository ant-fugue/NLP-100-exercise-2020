const fs = require('fs');

const tail = (n) => {
  let arr = [];
  data = fs.readFileSync('../sources/popular-names.txt', 'utf8').split(/\n/);
  for (let i = n - 1; i >= 0; i--) {
    console.log(data[data.length - 1 - i]);
  }
}

tail(5);