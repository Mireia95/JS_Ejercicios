/* Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos. */
const goodProducts = [];
const badProducts = [];
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];

for (const product of products) {
  let sellCount = product.sellCount;
  if (sellCount > 20) {
    goodProducts.push(product);
  } else {
    badProducts.push(product);
  }
}

console.log("L'array goodProducts es: ");
console.log(goodProducts);
console.log("L'array badProducts es: ");
console.log(badProducts);
