//https://habr.com/ru/companies/ruvds/articles/429552/

// Еще на пркактикум залез, там 20 часов вводного обучения. чтоб хоть как то понимать, что это такое
//видимо нужна будет какая то другая прога для яваскрипт... Здесь пока не очень работает
// все учебные материалы беру с хабра. Пробую разобраться с джаваскрипт.
// мне это надо? да, наверное. Хочу написаь скрипт, который будет мне облегчать игру
// уже есть прикольный скрипт для *.kingdoms.com. он написан как раз на яваскрипте.
// что мне надо? 
// - чтоб скрипт выводил сводные данные в окошко.
// - может выполнял какие то действия за меня. по событию или по таймеру(с разбросом каждые 15-20минут)
// - подсчет времени по ЕК
// - анализ событий(каких? оно вообще надо? это будет легально?)
//console.log('Привет, мир!') //выводит в консоль привет мир
//alert("Привет, мир!") //тоже должна выводить привет мир. хотя... выбрасывает какое то окно на странице

//теперь я подключил этот яваскрипт к страничке(сайту), но .... 
// это получается я его смог подключить со стороны разработчика

console.log(1); //правая кнопка на странице - исследовать элемент - найти вкладку консоль
console.log(2); // а в консоли мы видим вывод этих команд
console.log(3);
console.log("старт!!!");
let time;
time = 34;
console.log("Старт поездки. Осталось минут: " + time);
time = time - 15;
console.log("Немного сториз в соцсетях. Осталось минут: " + time);
time = time - 10;
console.log("Немного не новостей, но событий. Осталось минут: " + time);