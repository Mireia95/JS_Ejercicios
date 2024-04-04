/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
];

//CON 1 CONSOLE.LOG POR CADA NOMBRE
/* for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    console.log('Usuario menor de edad: ' + users[i].name);
  } else {
    console.log('Usuario mayores de edad: ' + users[i].name);
  }
} */

//CON 1 CONSOLE.LOG POR CADA VARIABLE (menor y mayor)
let menoresEdad = [];
let mayoresEdad = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    menoresEdad[menoresEdad.length] = users[i].name;
  } else {
    mayoresEdad[mayoresEdad.length] = users[i].name;
  }
}
console.log('Usuarios menor de edad: ' + menoresEdad);
console.log('Usuarios menor de edad: ' + mayoresEdad);
