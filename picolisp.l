(de glue (c l)
  (cond
    ((= 0 (length l)) "")
    ((= 1 (length l)) (car l))
    (T               (pack (car l) c  (glue c (cdr l))))
  ))

# 26oct14jk
# extracts from PicoLisp lib.l, (c) Software Lab. Alexander Burger

(de recur recurse
   (run (cdr recurse)) )

### OOP ###
(de class Lst
   (let L (val (setq *Class (car Lst)))
      (def *Class
         (recur (L)
            (if (atom (car L))
               (cdr Lst)
               (cons (car L) (recurse (cdr L))) ) ) ) ) )

(de object ("Sym" "Val" . @)
   (putl "Sym")
   (def "Sym" "Val")
   (while (args)
      (put "Sym" (next) (next)) )
   "Sym" )

(de extend X
   (setq *Class (car X)) )

# Class variables
(de var X
   (if (pair (car X))
      (put (cdar X) (caar X) (cdr X))
      (put *Class (car X) (cdr X)) ) )

(de var: X
   (apply meta X This) )

