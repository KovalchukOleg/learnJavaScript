/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

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
