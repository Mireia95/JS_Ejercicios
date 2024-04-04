/* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.*/
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
let hulk = avengers[0];
console.log(hulk);

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN"  */
avengers[0] = 'IRONMAN';
console.log(avengers);

/*  1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']; */

//vuelvo a poner HULK en el array
avengers[0] = 'HULK';
console.log(avengers.length);

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array  */
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];

//uso metodo push()
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.*/
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
];

//elimino el ultimo elemento dell'array con pop()
rickAndMortyCharacters2.pop();

console.log(
  "1.5 el primero y el último elemento dell'array son " +
    rickAndMortyCharacters2[0] +
    ', y ' +
    rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]
);

/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. 
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

//uso metodo splice()
rickAndMortyCharacters2.splice(1, 1);
console.log(rickAndMortyCharacters2);
