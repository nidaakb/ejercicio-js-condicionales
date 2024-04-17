/*

Lee la información sobre el operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?

4 es mayor que 3
6 es mayor que 5 

4 es mayor que 3 
-1 es mayor que 0

*/

// if (true && true -- se cumple)
if (4 > 3 && 6 > 5) {
  console.log("Esta condición se cumple");
}

// if (true y false no se va a mostrar esta porque el -1 es menor que 0 por lo tanto habria que poner un "else" o un "not" si queremos que se muestre)
if (4 > 3 && -1 > 0) {
  console.log("Esta condición también se cumple?");
}
