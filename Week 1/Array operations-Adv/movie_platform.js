const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// filter() only "Sci-Fi" movies

const sciFiMovies = movies.filter(ele=> ele.genre === "Sci-Fi");
console.log(sciFiMovies);

//  map() to return:
const formattedMovie = movies.filter(ele => ele.title === "Inception").map(ele => `${ele.title} (${ele.rating})`);

console.log(formattedMovie);

//  reduce() to find average movie rating
const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log(averageRating);

//  find() movie "Joker"
const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie);

// findIndex() of "Avengers"*/
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log(avengersIndex);