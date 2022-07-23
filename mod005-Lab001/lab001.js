/* var numeroActual = 0;
do {
    var numeroActual = Number(prompt("Ingrese un numero actual"));
    var suma = suma + numeroActual;
    } while ((continuar=confirm("Desea seguir ingresando numeros?")));
alert("Total Ingresado: " + suma); */

let numeroActual = 0;
let suma = 0;
do {
    numeroActual = Number(prompt("Ingrese un numero actual"));
    suma += numeroActual;
    } while ((continuar=confirm("Desea seguir ingresando numeros?")));
alert("Total Ingresado: " + suma);

