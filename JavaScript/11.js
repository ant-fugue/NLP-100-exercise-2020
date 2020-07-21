const fs = require('fs');

const tabToSpace = () => {
    const data = fs.readFileSync('../sources/popular-names.txt', 'utf8');
    const result = [...data.split(/\n/)].map(elem => elem.replace(/\t/g, /\s/));
    return result;
}

console.log(tabToSpace());