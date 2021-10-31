// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const newArr = movies.map(movie => {
    duration = movie.duration;
    
    if (duration.length > 5) {
      let hours = parseInt(duration.substring(0, 1));
      let minutes = parseInt(duration.substring(3, 5));
      let durationInMinutes = hours * 60 + minutes;
      return { ...movie, duration: durationInMinutes };
    } else if (duration.length > 3) {
      let minutes = parseInt(duration.substring(0, 2));
      let durationInMinutes = minutes;
      movie.duration = durationInMinutes;
      return { ...movie, duration: durationInMinutes };
    } else if (duration.length < 3) {
      console.log(duration);
      let hours = parseInt(duration.substring(0, 1));
      let durationInMinutes = hours * 60;
      movie.duration = durationInMinutes;
      return { ...movie, duration: durationInMinutes };
    } else if(duration.length === 0){
      return { ...movie, duration: 0 };
    }
  });
  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}


if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
