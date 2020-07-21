const fs = require('fs');

const lineCount = () => {
    let counter = 0;
    let data = fs.readFileSync('../sources/popular-names.txt', 'utf8');
    // 改行を読み取ってデータを行ごとに分割、一行配列に押し込むたびにカウンターをインクリメント
    [...data.split(/\n/)].forEach(elem => counter++)
    return counter;
}

console.log(lineCount());

