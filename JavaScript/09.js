// 09. Typoglycemia
// スペースで区切られた単語列に対して，各単語の先頭と末尾の文字は残し，
// それ以外の文字の順序をランダムに並び替えるプログラムを作成せよ．ただし，長さが４以下の単語は並び替えないこととする．適当な英語の文（例えば"I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."）を与え，その実行結果を確認せよ．

const str = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."

const randomSort = (arr, start, end) => {
    let randomIndex;
    let temp;
    for (let i = start; i < end; i++) {
        randomIndex = Math.floor(Math.random() * end);
        temp = arr[start];
        arr[start] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

const typoglycemia = (str) => {
    let newStr = Array.from(str.split(/\s/));
    return newStr.map(elem => {
        if (4 < elem.length) return randomSort([...elem], 1, elem.length - 2)
        else return [...elem];
    });
}

console.log(randomSort([1, 2, 3, 4, 5], 0, 4));
console.log(typoglycemia(str));

