/* Задание на урок 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания




let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Скільки фільмів ви подивилися?', '');

    while (numberOfFilms==''|| numberOfFilms==null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви подивилися?', '');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres:[],
    private: false,
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt("Один із останніх переглянутих фільмів", ''),
              b = prompt("На скільки його оцінюєте",'');
              
              if (a != null && b != null && a != '' && b !='' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('Done');
              } else {
                console.log('error');
                i--;
              }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >=30) {
        console.log('Вы киноман');
    } else {console.log('Произошла ошибка');}
    
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.ganres[i-1] = genre;
    };
}

writeYourGenres();
