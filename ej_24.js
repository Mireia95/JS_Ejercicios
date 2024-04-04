/* Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos. */
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];

let suma = 0;

for (const product of products) {
  if (typeof product.sellCount === 'number') {
    suma += product.sellCount;
  }
}

//CON CICLO FOR
/* for (let i = 0; i < products.length; i++) {
  if (typeof products[i].sellCount === 'number') {
    suma += products[i].sellCount;
  }
} */

console.log("La suma de todos los sellCount dell'array es: " + suma);
