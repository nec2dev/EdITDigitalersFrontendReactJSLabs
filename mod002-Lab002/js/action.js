// Ejercicio 1
/* 1. Se generará una ventana de usuario donde se 
preguntará el rol, como en la referencia 
debajo. El rol debe ser admin o recurso */
let rol = prompt('Cual es su rol?')
/* 2. Si el rol es correcto, se preguntará la clave;
ésta deberá ser 1234. */
if(rol=='admin' || rol == 'recursos'){
    let clave = prompt('Cual es su clave?')
    while(clave!='1234'){
        clave = prompt('No es la clave esperada, pruebe de nuevo')
    }
    /* 3. Luego de que los pasos anteriores se 
    cumplan, se preguntará el nombre de 
    usuario. */
    let nombre = prompt('Cual es su nombre de usuario?')
}
/* 4. Se imprimirá el nombre de usuario dentro de 
un contenedor con innerHTML(), por ejemplo 
en un h1. */
let nombreUsuario = document.getElementById('renderName')
let username = nombre;
nombreUsuario.innerHTML = username;
/* 5. Validar usuario y contrasenia.
En todos los casos donde el usuario o contraseña 
son incorrectos, se redirigirá al usuario a una 
página como la siguiente. */
