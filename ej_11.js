/* Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
pista (typeof) */
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let sumaNum = 0;
  let sumaString = 0;
  let sumaTot = 0;
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      sumaNum += param[i];
    } else if (typeof param[i] === 'string') {
      sumaString += param[i].length;
    }
    sumaTot = sumaNum + sumaString;
  }
  console.log('la suma de los números del array es: ' + sumaNum);
  console.log(
    'la suma de la longitud de los strings del array es: ' + sumaString
  );
  console.log('la suma total de números más strings es: ' + sumaTot);
}

averageWord(mixedElements);
