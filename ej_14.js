/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función: */
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(list) {
  let count = 0;
  let double = [];
  for (let i = 0; i < list.length; i++) {
    if (!double.includes(list[i])) {
      double.push(list[i]);
      for (let x = 0; x < list.length; x++) {
        if (list[i] == list[x]) {
          count += 1;
        }
      }
      console.log('La palabra ' + list[i] + ' se repite ' + count + ' veces');
    }

    count = 0;
  }
}

repeatCounter(counterWords);
