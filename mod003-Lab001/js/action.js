// Ejercicio 1
/* 1. Se generará una ventana de usuario donde se 
preguntará el rol, como en la referencia 
debajo. El rol debe ser admin o recurso */
let rol = prompt("Cual es su rol?");
/* 2. Si el rol es correcto, se preguntará la clave;
ésta deberá ser 1234. */
if (rol == "admin" || rol == "recursos") {
  let clave = prompt("Cual es su clave?");
  while (clave != "1234") {
    clave = prompt("No es la clave esperada, pruebe de nuevo");
  }
  /* 3. Luego de que los pasos anteriores se 
    cumplan, se preguntará el nombre de 
    usuario. */
  let nombre = prompt("Cual es su nombre de usuario?");
  let nombreUsuario = document.getElementById("renderName");
  let username = nombre;
  nombreUsuario.innerHTML = username;

  /* 4. Se imprimirá el nombre de usuario dentro de 
un contenedor con innerHTML(), por ejemplo 
en un h1. */

  let empleado = [];
   empleado.push = prompt("Ingrese el nombre:");
   empleado.push = prompt("Ingrese el apelido:");
   empleado.push = prompt("Ingrese la edad:");

  /* 5. Validar usuario y contrasenia.
En todos los casos donde el usuario o contraseña 
son incorrectos, se redirigirá al usuario a una 
página como la siguiente. */
  let nombreNuevo = prompt("Ingrese su nombre:");
  let claveNueva = prompt("Ingrese su clave:");
  if (nombreNuevo == nombre && claveNueva == "1234") {
    alert("Bienvenido " + nombreNuevo);
    for(let i = 0; i < empleado.length; i++){
      alert(empleado[i]);
    }
  }else{
    alert("Usuario o contraseña incorrectos");
  }
}
/* A partir del Laboratorio adicional 2 del módulo 
anterior, realizar los siguientes pasos: */
/* 1. Generar un arreglo de empleados donde 
indicaremos su nombre, apellido y edad. */
/* 2. Mostrar los datos en una tabla iterando el 
arreglo. La tabla se mostrará así: */
/* 3. Antes de mostrar la tabla, comprobar usuario 
y contraseña de quien quiera acceder a ella o 
se lo redireccionará a una página diferente. */
// Primera etapa

// Segunda etapa
/* Si los datos son válidos, aparte de imprimir el 
nombre de usuario en pantalla se redireccionará 
a la siguiente página, el resultado final será: */

