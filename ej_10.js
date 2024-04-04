/* Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función: */
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'number') {
      sum += array[i];
    }
  }
  let media = sum / array.length;
  console.log('el promedio (media) del array' + array + 'es: ' + media);
}

average(numbers);
