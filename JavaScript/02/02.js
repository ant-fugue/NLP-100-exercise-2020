// 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
// 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．

// ネットの答え
// [...'パトカー'].map((v, i) => v + 'タクシー'[i])
let str1 = Array.from('パトカー');
let str2 = Array.from('タクシー');
let str3 = [];
// const str4 = str1[0].concat(str2[0]);
// const str4 = str1.forEach(element => element.concat(str2);

for (let i = 0; i < str1.length; i++) {
    str3[i] = str1[i].concat(str2[i]);
}

// const str3 = str1.forEach(element => element.concat(str2));