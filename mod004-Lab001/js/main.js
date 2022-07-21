// Ejercicio 1
/* 1. Se generarán 4 botones y se realizará una
sóla función. Cada botón pasará a un color
distinto. La referencia es la de arriba a la
derecha: */
function colorearCaja(color){
    alert('El color es: ' + color);
}
/* 2. Al hacer clic en cada botón, haremos la alerta
que vemos a la derecha. */
let boton = document.getElementsByTagName("button");
for (let i = 0; i < boton.length; i++) {
  boton[i].onclick = function(){
    colorearCaja(this.innerHTML);
  };
  boton[i].onmouseover = function(){
    crearCaja(this.innerHTML);
  };
}
/* 3. Generamos una caja, y dentro trabajaremos
con innerHTML para poder sumar el texto
como en el ejemplo de referencia. */
function crearCaja(texto){
    let caja = document.createElement("div");
    caja.innerHTML = texto;
    caja.className = "caja";
    document.body.appendChild(caja);
}
/* 4. Con style modificaremos el color de fondo de
la caja. */

