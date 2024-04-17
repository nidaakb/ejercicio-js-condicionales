/*

Operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Escribe un valor adecuado para la variable 'usuario' y/o 'password' para que se muestre por consola el mensaje "Credenciales correctas, bievenido usuario pepa@gmail.com".

*/

let usuario = "pepa@gmail.com"; // tenemos que cambiar "pepe" por "pepa"
let password = "1995"; // cambiamos 1996 por 1995 para que se cumpla la condicion.

/** NO TOCAR A PARTIR DE AQUÍ  */
if (usuario == "pepa@gmail.com" && password == "1995") {
  console.log("Credenciales correctas, bievenido usuario " + usuario);
}
