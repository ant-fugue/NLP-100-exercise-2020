// 「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．

let arr = [...'パタトクカシーー'];

const odd = (x) => (x % 2 == 1);

const f = (lst) => {
    let arr = [];
    for (let i = 0; i < lst.length; i++) {
        if (i % 2 == 0) {
            arr.push(lst[i]);
        }
    }
    return arr;
}

console.log(f(arr));
console.log(arr);

// const filter = (predi, lst) => {
//     if (lst == null) {
//         return lst;
//     } else if (predi == lst[0]) {
//         return lst.concat(lst[0], filter(predi, lst.shift()));
//     } else {
//         return lst.filter(predi, lst.shift());
//     }
// }

// (define (f lst)
//   (let loop ((i 0) (tmp1 '()) (tmp2 lst))
//     (cond ((null? tmp2) (reverse tmp1))
//           ((= (modulo i 2) 0) (loop (+ i 1) (cons (car tmp2) tmp1) (cdr tmp2)))
//           (else (loop (+ i 1) tmp1 (cdr tmp2))))))

// (define (product initial final body)
//   (if (> initial final)
//       1
//       (* (body initial)
//          (product (++ initial) final body))))

