//console.log(1);

//const result = confirm('Are you here?');
//console.log(result);

//const answer = prompt('Сколько вам лет?', '');
//console.log(answer);


let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false 
};
  
 

 function rememberMyFilms(){
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотреных фильмов?',''),
              b = prompt('На сколько вы его оцените?','');
    
        if (a != null && a != '' && b != null && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else{
            console.log('error');
            i--;
        }  
     }
 }

rememberMyFilms();

   

    function detectPersonalLevel(){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if(personalMovieDB.count >= 30){
            console.log("Вы - киноман!");    
        } else{
            console.log("Произошла ошибка");
        }
    }
     
 detectPersonalLevel();

 function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
 }

showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

 