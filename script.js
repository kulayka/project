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

