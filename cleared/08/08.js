
// const encode = (str, key) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         arr[i] = str.charCodeAt(i) + key;
//     }
//     return arr;
// }

// const decode = (num, key) => {
//     let ans = [];
//     for (let i = 0; i < num.length; i++) {
//         ans[i] = String.fromCharCode(num[i] + key);
//     }
//     return ans;
    
// }
// console.log(encode("cross", 3));
// console.log(decode(encode("cross", 3), -3));

const cypher = (str) => {
    let arr = [];
    let ans = [];
    const a = /[a-z]/;
    for (let i = 0; i < str.length; i++) {
        if (a.test(str[i])) {
            arr[i] = 219 - str.charCodeAt(i);   
        } else {
            arr[i] = str.charCodeAt(i);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        ans[i] = String.fromCharCode(arr[i]);
    }
    return [arr, ans];
}

console.log(cypher("Japan"));