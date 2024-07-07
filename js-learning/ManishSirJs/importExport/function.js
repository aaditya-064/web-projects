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

export { ratingFilter, sortRating };
