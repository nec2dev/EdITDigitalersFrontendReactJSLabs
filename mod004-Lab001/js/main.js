// Ejercicio 1
/* 1. Se generarán 4 botones y se realizará una
sóla función. Cada botón pasará a un color
distinto. La referencia es la de arriba a la
derecha: */

/* 2. Al hacer clic en cada botón, haremos la alerta
que vemos a la derecha. */
let boton = document.getElementsByTagName("button");
for (let i = 0; i < boton.length; i++) {
  boton[i].onclick = function () {
    alertColor(this.innerHTML);
  };
}
/* 3. Generamos una caja, y dentro trabajaremos
con innerHTML para poder sumar el texto
como en el ejemplo de referencia. */

/* 4. Con style modificaremos el color de fondo de
la caja. */

/* function alertColor(color) {
  alert("El color es " + color);
  document.getElementById("caja").innerHTML = "El color es " + color;
  document.getElementById("caja").style.background = color;
} */

const alertColor = (color) => {
  alert("El color es " + color);
  document.getElementById("caja").innerHTML = "El color es " + color;
  document.getElementById("caja").style.background = color;
}



