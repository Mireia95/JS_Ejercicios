/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

//funcion con indexOf()
function finderName(array, value) {
  if (array.indexOf(value) > 0) {
    console.log(
      `Está el nombre ${value} en la lista! Está en la posición ${array.indexOf(
        value
      )}`
    );
    return true;
  } else {
    console.log(`Lo siento, no está el nombre ${value} en la lista.`);
    return false;
  }
}

finderName(nameFinder, 'Bruce'); //devuelve true
finderName(nameFinder, 'Elisabeth'); //devuelve false
