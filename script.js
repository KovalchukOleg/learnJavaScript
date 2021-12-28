const numberOfFilms = +prompt('Скільки фільмів ви подивилися?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres:[],
    private: false
};

const a = prompt("Один із останніх переглянутих фільмів", ''),
      b = prompt("На скільки його оцінюєте",''),
      c = prompt("Один із останніх переглянутих фільмів", ''),
      d = prompt("На скільки його оцінюєте",'');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
