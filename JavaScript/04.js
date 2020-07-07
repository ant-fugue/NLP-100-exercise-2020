const str = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."
console.log(Array.from(str.split(' ')).map((elem, i, self) => {
    let arr = [];
    if(i === 0 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 14 || i === 15 || i === 18) 
    arr.push({[i+1] : self[i][0]});
    else arr.push({[i+1] : self[i].slice(0,2)})
    return arr;
}));

