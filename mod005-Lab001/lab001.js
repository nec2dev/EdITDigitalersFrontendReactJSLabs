var numeroActual = 0;
do {
    var numeroActual = Number(prompt("Ingrese un numero actual"));
    var suma = suma + numeroActual;
    } while ((continuar=confirm("Desea seguir ingresando numeros?")));
alert("Total Ingresado: " + suma);