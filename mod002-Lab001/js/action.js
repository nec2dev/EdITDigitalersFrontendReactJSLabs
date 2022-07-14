/* Ejercicio 1
Se generará un mensaje de alerta que saludará 
al usuario con un mensaje diferente según el día 
de la semana que sea.
Trabajaremos con getDay() y switch. */

let fechaHoy = new Date();
let diaDeLaSemana = fechaHoy.getDay();
switch(diaDeLaSemana){
    case 0 : alert('Hoy juega boquita!')
    break
    case 1 : alert('Arrancanding la semana')
    break
    case 2 : alert('falta para el finde')
    break
    case 3 : alert('Que bueno, me toca clase con el profe!')
    break
    case 4 : alert('Jueves')
    break
    case 5 : alert('Previa')
    break
    case 6 : alert('Nos vamos a la clande')
    break
    default : alert('Ha ocurrido algo realmente inseperado!')
    break
}