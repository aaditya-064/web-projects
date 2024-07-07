// import "./../../";
import { Movie, movieManager } from "./defaultExport.js";
import { ratingFilter, sortRating } from "./function.js";

// const movie1 = new Movie("Inception", "Christopher Nolan", 9);
// const movie2 = new Movie("Interstellar", "Christopher Nolan", 8);
// const movie3 = new Movie("Dunkirk", "Christopher Nolan", 7);

//declaring the movies details

const mainMovie = new Movie("The Dictator", "Adolf Hitler", 9);
const mainMovie1 = new Movie("Wolf of Wall Street", "Jordan Belfort", 8);
const mainMovie2 = new Movie("Oppenheimer", "Christopher Nolan", 10);
const mainMovie3 = new Movie("KGF 3", "Prashant Neel", 8);
const mainMovie4 = new Movie("RRR", "S.S. Rajamauli", 7);
const mainMovie5 = new Movie("Chakka Panja 4", "KP Oli", 5);
mainMovie.getDetails();
mainMovie1.getDetails();

//creating the instance for movieManager
const subMovie = new movieManager();
subMovie.deleteItemFromLocalStorage("RRR");
//adding the list of movies
subMovie.addMovie(mainMovie);
subMovie.addMovie(mainMovie1);
subMovie.addMovie(mainMovie2);
subMovie.addMovie(mainMovie3);
subMovie.addMovie(mainMovie4);
subMovie.addMovie(mainMovie5);
// console.log(subMovie);
subMovie.loadFromLocalStorage();
// subMovie.saveToLocalStorage();

// subMovie.addMovie("Wolf of wall street", "Kim jong un", 3);
// subMovie.filterMovie("6");
// subMovie.displayMovie();

//to display the movies
subMovie.displayMovie();
const localStorageThing = subMovie.loadFromLocalStorage();
console.log(localStorageThing);

//filtering
const filteredMovies = subMovie.filterMovie(ratingFilter(7));
// console.log(filteredMovies);

//sorting
const sortMovies = subMovie.sortByRating(sortRating("dec"));
console.log("Printing in ascending order");
// console.log("Deleting RRR movie")
subMovie.deleteMovie("KGF 3");
sortMovies.forEach((movie) => console.log(movie.getDetails()));

console.log("SEARCHING");
const searchMovieByTitle = subMovie.searchMovie("Ch");
searchMovieByTitle.forEach((movie) => console.log(movie.getDetails()));

console.log("PAGINATION");
const pagination = subMovie.getMoviesByPage();
pagination.forEach((movie) => console.log(movie.getDetails()));
console.log("PAGINATION CLOSED");
// console.log("Selected Movie", selectedMovie)

// const jsonString = JSON.stringify(obj);
// const jsonParse = JSON.parse(jsonString);
// console.log(jsonString);
// console.log(jsonParse);
