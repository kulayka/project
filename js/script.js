//console.log(1);

//const result = confirm('Are you here?');
//console.log(result);

//const answer = prompt('Сколько вам лет?', '');
//console.log(answer);


const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },

    rememberMyFilms : function(){
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
    },

     detectPersonalLevel : function(){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if(personalMovieDB.count >= 30){
            console.log("Вы - киноман!");    
        } else{
            console.log("Произошла ошибка");
        }
    },
    
    toogleVisibleMyDB: function(){
      if(personalMovieDB.privat){
        personalMovieDB.privat = false;
      } else{
          personalMovieDB.privat = true;
      }
    },

    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },

    writeYourGenres : function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if(genre === '' || genre == null){
                console.log("Вы ввели некорректные данные или не ввели ничего");
                i--;
            } else{
                personalMovieDB.genres[i - 1] = genre;
            }          
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

};

  
 




 