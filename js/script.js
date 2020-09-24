//console.log(1);

//const result = confirm('Are you here?');
//console.log(result);

//const answer = prompt('Сколько вам лет?', '');
//console.log(answer);

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false 
};

const a = prompt('Один из просмотреных фильмов?',''),
      b = prompt('На сколько вы его оцените?',''),
      c = prompt('Один из просмотреных фильмов?',''),
      d = prompt('На сколько вы его оцените?','');

 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;
 
 console.log(personalMovieDB);