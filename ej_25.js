/* Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas. */
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];

let suma = 0;
let media = 0;

for (let i = 0; i < products.length; i++) {
  if (typeof products[i].sellCount === 'number') {
    suma += products[i].sellCount;
  }
}

media = suma / products.length;

console.log(
  'La suma de los sellCount de mi array es ' +
    suma +
    ', y la media de los sellCount es: ' +
    media
);
