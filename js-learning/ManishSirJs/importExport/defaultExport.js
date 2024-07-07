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

export { Movie, movieManager };
