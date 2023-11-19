//работает только на своей же вкладке, но не хочет на других сайтах. Даже консольлог и алерт

console.log("Зашли в скрипт")
var elem = document.querySelector('#elem');
console.log(1);
//createTable(elem,3,3);
console.log(2);


//функция для вывода какого то сообщения. проверка.
var message123  = "hello boy"
//document.getElementById("hl").innerHTML = message123;

// функция создания?ли? таблицы 
// для таблицы надо стили создавать!!!
function createTable(parent, cols, rows) {
    var table = document.createElement('table');
    
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement('tr');
                
            for (var j = 0; j < cols; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        parent.appendChild(table); 
}

// функция, которая что то делает
// выводит число рандомное.
function randomInteger(min, max) {
    document.querySelector('.sum').innerHTML = (Math.floor(Math.random() * (max - min + 1) ) + min);
    let currentDate = new Date (); //принимает текущую дату
    console.log (currentDate); //выводит в консоль текущую дату
    var elC = document.querySelector(".stockContainer.clay .production .value"); //вытащили строку выработки глины
    const contentC = elC.innerText;// достаем текст из дива
    var xC = parseInt(contentC, 10);// из текста достаем число
    //console.log(xC);//вывели в консоль
    var elI = document.querySelector(".stockContainer.iron .production .value");//вытащили строку выработки железа
    const contentI = elI.innerText;// достаем текст из дива
    var xI = parseInt(contentI, 10);// из текста достаем число
    //console.log(xI);//вывели в консоль
    var elCr = document.querySelector(".stockContainer.crop .production .value");//вытащили строку выработки кропа (с учетом потребления) а надо полностью? а еще надо знак учесть потом...
    //console.log(elCr);
    const contentCr = elCr.innerText;// достаем текст из дива
    var xCr = parseInt(contentCr, 10);// из текста достаем число
    //console.log(xCr);//вывели в консоль
    var itogCHVR = xW + xC +xI + xCr;
    console.log("ЧВР на сейчас равно: " + itogCHVR); // получаем ЧВР в консоль
    var message123 = "ЧВР на сейчас равно: " + itogCHVR;
    //alert(message123);
    //document.writeln(message123);//добавлять не стоит, вместо кнопочек выводит только сообщение...
}

console.log("последняя строка в последнем скрипте")