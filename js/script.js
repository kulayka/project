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
  
 for(let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотреных фильмов?',''),
          b = prompt('На сколько вы его оцените?','');

    personalMovieDB.movies[a] = b;
 }

 console.log(personalMovieDB);