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

const mainMovie = new Movie("The Dictator", "Adolf Hitler", 9);
const mainMovie1 = new Movie("Wolf of Wall Street", "Jordan Belfort", 8);
const mainMovie2 = new Movie("Oppenheimer", "Christopher Nolan", 10);
const mainMovie3 = new Movie("KGF 3", "Prashant Neel", 8);
const mainMovie4 = new Movie("RRR", "S.S. Rajamauli", 7);
const mainMovie5 = new Movie("Chakka Panja 4", "KP Oli", 5);
mainMovie.getDetails();
mainMovie1.getDetails();
const subMovie = new movieManager();
subMovie.addMovie(mainMovie);
subMovie.addMovie(mainMovie1);
subMovie.addMovie(mainMovie2);
subMovie.addMovie(mainMovie3);
subMovie.addMovie(mainMovie4);
subMovie.addMovie(mainMovie5);
// subMovie.addMovie("Wolf of wall street", "Kim jong un", 3);
// subMovie.filterMovie("6");
// subMovie.displayMovie();
subMovie.displayMovie();
const filteredMovies = subMovie.filterMovie(ratingFilter(7));
// console.log(filteredMovies);
const sortMovies = subMovie.sortByRating(sortRating("dec"));
console.log("Printing in ascending order");
sortMovies.forEach((movie) => console.log(movie.getDetails()));
