// 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
// 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．

let str1 = Array.from('パトカー');
let str2 = Array.from('タクシー');
let str3 = [];

const joint = (str1, str2) => {
    let arr = [];
    for (let i = 0; i < str1.length; i++) {
        arr[i] = str1[i].concat(str2[i]);
    }
    return arr.join('');
}

console.log(joint(str1, str2));

