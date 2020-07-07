// 「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．

let arr = [...'パタトクカシーー'];

const odd = (x) => (x % 2 == 1);

console.log(arr.filter((elem, i) => i % 2 == 0).join(''));