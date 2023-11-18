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
        //tableToExcel('resultTable','Смета', 'Ремрайон_смета.xls');
}

// функция, которая что то делает
// выводит число рандомное.
function randomInteger(min, max) {
    document.querySelector('.sum').innerHTML = (Math.floor(Math.random() * (max - min + 1) ) + min);
    let currentDate = new Date (); //принимает текущую дату
    console.log (currentDate); //выводит в консоль текущую дату
    //document.writeln(message123);//добавлять не стоит, вместо кнопочек выводит только сообщение...
}

console.log("последняя строка в последнем скрипте")