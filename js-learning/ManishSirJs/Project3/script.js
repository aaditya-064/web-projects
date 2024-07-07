class Movie {
  constructor(title, director, rating = 0) {
    this.title = title;
    this.director = director;
    this.rating = rating;
  }
  rate(rating) {
    this.rating = rating;
  }
  getDetails() {
    return `Title: ${this.title}, Director: ${this.director}, Rating: ${this.rating}`;
  }
}

class movieManager {
  constructor() {
    this.movies = [];
  }
  addMovie(movie) {
    this.movies.push(movie);
  }
  filterMovie(callback) {
    return this.movies.filter(callback);
  }
  displayMovie() {
    this.movies.forEach((movie) => {
      // console.log(movie.getDetails());
    });
  }
  sortByRating(callback) {
    return this.movies.sort(callback);
  }
  deleteMovie(title) {
    // const title = this.title.toLowerCase();
    const deletedMovie = this.movies.find(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );
    // console.log(this.movies.splice(this.movies.indexOf(deletedMovie), 1))
    this.movies.splice(this.movies.indexOf(deletedMovie), 1);
  }
  searchMovie(title) {
    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  getMoviesByPage(page = 1, pageSize = 2) {
    const startIndex = (page - 1) * pageSize;
    return this.movies.slice(startIndex, startIndex + pageSize);
  }
  saveToLocalStorage() {
    const stringMovies = JSON.stringify(this.movies);
    localStorage.setItem("movies", stringMovies);
  }
  loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("movies"));
    return (this.movies = data
      ? data.map(
          (movie) => new Movie(movie.title, movie.director, movie.rating)
        )
      : []);
  }
  deleteItemFromLocalStorage(title) {
    const localStorageData = localStorage.getItem("movies");
    const parsedData = JSON.parse(localStorageData);
    const removeItem = parsedData.find(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );
    parsedData.splice(parsedData.indexOf(removeItem), 1);
    localStorage.setItem("movies", JSON.stringify(parsedData));
  }
}

// function filterByRating(minRating) {
//   return function (movie) {
//     return movie.rating >= minRating;
//   };
// }

function ratingFilter(ratedByAaditya) {
  return function (movie) {
    return movie.rating >= ratedByAaditya;
  };
}

//function for sorting
function sortRating(sortCondition = "inc") {
  return function (b, a) {
    if (sortCondition === "inc") {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
    // sortCondition==='inc' ? a.rating - b.rating : b.rating - a.rating
  };
}

const movie1 = new Movie("Inception", "Christopher Nolan", 9);
const movie2 = new Movie("Interstellar", "Christopher Nolan", 8);
const movie3 = new Movie("Dunkirk", "Christopher Nolan", 7);

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
