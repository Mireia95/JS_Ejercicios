/* Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
];

function findLongestWord(param) {
  let paramLength = 0;
  let string = '';
  for (let i = 0; i < param.length; i++) {
    if (paramLength < param[i].length) {
      paramLength = param[i].length;
      string = param[i];
    }
  }
  console.log(
    `El primer string mas largo del array es el string ${string}, y es de ${paramLength} carácteres.`
  );
}

findLongestWord(avengers);
