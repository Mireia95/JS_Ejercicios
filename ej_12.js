/* Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
pista (cuando eliminamos algo de un array, su longitud se verá afectada) */
const duplicates = [
  'pizza', //0
  'burger', // 1
  'potatoe', //2
  'pasta', //3
  'ice-cream', //4
  'pizza', //5
  'chicken', //6
  'onion rings', //7
  'pasta', //8
  'soda' //9
];

function removeDuplicates(array) {
  let element = '';
  for (let i = 0; i < array.length; i++) {
    element = array[i];
    for (let x = i + 1; x < array.length; x++) {
      if (element == array[x]) {
        console.log('tenemos un duplicado! Es: ' + element);
        //elimino duplicado
        array.splice(x, 1);
        //vuelvo a una posicion anterior para comparar el nuevo string, ya que se ha desplazado en la posicion del string eliminado
        x = x - 1;
      }
    }
  }
  console.log('el array sin duplicados es: ' + array);
}

removeDuplicates(duplicates);
