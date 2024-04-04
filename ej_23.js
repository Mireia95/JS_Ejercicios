/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
-Pelicula pequeña, menos de 100 minutos
-pelicula mediana, mas de 100 minutos y menos de 200 
-pelicula grande, mas de 200 minutos. 
Imprime cada array en por consola. */

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
];

let shortMovie = []; //< 100 min
let mediumMovie = []; //> 100 min , < 200 min
let largeMovie = []; //> 200min

for (const movie of movies) {
  let durationMovie = movie.durationInMinutes;
  if (durationMovie < 100) {
    shortMovie.push(movie);
  } else if (durationMovie > 100 && durationMovie < 200) {
    mediumMovie.push(movie);
  } else if (durationMovie > 200) {
    largeMovie.push(movie);
  } else {
    console.log('Duración pelicula ' + movie.name + ' no detectada');
  }
}

if (shortMovie.length > 0) {
  console.log('Las peliculas pequeñas son:');
  console.log(shortMovie);
  console.log('----');
} else {
  console.log('No hay peliculas pequeñas.');
  console.log('----');
}

if (mediumMovie.length > 0) {
  console.log('Las peliculas medianas son:');
  console.log(mediumMovie);
  console.log('----');
} else {
  console.log('No hay peliculas medianas.');
  console.log('----');
}

if (largeMovie.length > 0) {
  console.log('Las peliculas largas son:');
  console.log(largeMovie);
  console.log('----');
} else {
  console.log('No hay peliculas largas.');
  console.log('----');
}
