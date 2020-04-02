;01

(define (iota min max)
  (if (> min max)
      '()
      (cons min
            (iota (+ min 1) max))))

(define filter
  (lambda (predi lst)
    (cond ((null? lst) '())
          ((predi (car lst))
           (cons (car lst)
                 (filter predi (cdr lst))))
          (else  (filter predi (cdr lst))))))

(define remove
  (lambda (predi lst)
    (cond ((null? lst) '())
          ((predi (car lst))
           (remove predi (cdr lst)))
          (else (cons (car lst)
                      (remove predi (cdr lst)))))))

;; 01
(define (f lst)
  (let loop ((i 0) (tmp1 '()) (tmp2 lst))
    (cond ((null? tmp2) (reverse tmp1))
          ((= (modulo i 2) 0) (loop (+ i 1) (cons (car tmp2) tmp1) (cdr tmp2)))
          (else (loop (+ i 1) tmp1 (cdr tmp2))))))

;; 02


(define alpha '(a b c))
(define beta  '(d e f))

(define flatten
  (lambda (lst)
    (cond ((null? lst) '())
          ((pair? lst)
             (append (flatten (car lst))
                     (flatten (cdr lst))))
          (else (list lst)))))

(define (02ans lst1 lst2)
  (flatten (map list lst1 lst2)))

;; 03
(define 03pro "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.")

;; 08
(define (08func charactor)
  (let ((x (char->integer charactor)))
    (if (and (<= 97 x) (<= x 122))
        (integer->char (+ x 121))
        'as_it_is)))
        
    