//ищут элементы в коде HTML и сохраняют в переменную
var modal = document.getElementById('myModal');
var buttons = document.getElementsByClassName("myBtn")
var span = document.getElementsByClassName("close");



//Этот код представляет собой цикл, который добавляет обработчик события клика ко всем элементам массива buttons. Каждый элемент массива предполагается 
//быть кнопкой на веб-странице.
for (var i = 0; i < buttons.length; i++) {//Этот цикл перебирает все элементы в массиве buttons.
	buttons[i].onclick = function() {//Для каждой кнопки устанавливается обработчик события клика.
    var id = this.getAttribute('data-modal');//Получает значение атрибута data-modal текущей кнопки, которое предположительно является 
                                                 //идентификатором модального окна.
    var modal = document.getElementById(id);//Находит элемент модального окна с использованием полученного идентификатора.
    modal.style.display = 'block';//Устанавливает стиль отображения модального окна на 'block', что делает его видимым на странице.
  }
}


//Этот код представляет собой цикл, который просматривает все элементы с тегом <span> и назначает каждому из них обработчик события onclick. 
//Когда происходит клик по элементу <span>, выполняется функция, которая скрывает модальное окно.
for (var i = 0; i < span.length; i++) {//Цикл проходится по всем элементам с тегом <span>. span предполагается, что это коллекция или массив
                                        // элементов с тегом <span>. В каждой итерации цикла переменная i используется для доступа к текущему
                                        // элементу в коллекции.
  span[i].onclick = function() {//Для каждого элемента <span> устанавливается обработчик события onclick. Когда происходит клик по элементу, 
                                //выполняется анонимная функция.
    var id = this.getAttribute('data-modal');//Внутри функции определяется переменная id, которая получает значение атрибута data-modal текущего 
                                                //элемента, по которому был сделан клик. Предполагается, что у элемента есть атрибут data-modal,
                                                // который содержит идентификатор модального окна.
    var modal = document.getElementById(id);//Получается ссылка на элемент модального окна с использованием полученного идентификатора.
    modal.style.display = 'none';//Устанавливается свойство CSS display элемента модального окна в значение 'none', что приводит к скрытию
                                    // модального окна.
  }
}


//Этот код добавляет обработчик события клика (onclick) к объекту window в веб-странице. Когда происходит клик в любом месте окна (window), 
// код выполняет следующие действия:
window.onclick = function(event) {//Получает объект события event.
  var isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;//Извлекает класс элемента, по которому произошел клик, с использованием 
                                                                                    //event.target.className
  if (isModal) {//Проверяет, содержится ли подстрока " modal " (пробелы в начале и в конце для избежания частичных совпадений)
                    // в классе элемента, на который был произведен клик
    event.target.style.display = "none";//Это делается с помощью этого выражения 
  }//Если класс содержит " modal ", то устанавливает стиль display элемента в "none", скрывая его.
//Таким образом, код предполагает, что элемент, на который произведен клик, является модальным окном, 
//и при клике на модальное окно оно скрывается (display: none). Обычно такой подход используется для
// закрытия модального окна при клике вне него.
}










let button = document.querySelector('.button');
//let button1 = document.querySelector('.button1');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });

button1.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });





buttonOpen.onclick = function() {//действие по нажатию на кнопку
    console.log("вошли в кнопку");
	var dialog = document.querySelector('dialog')//говорим, что надо вызвать селектор диалог?
    	// выводим диалоговое окно
    document.querySelector('#NeverovButton').onclick = function () {
       	dialog.show()
    }
    console.log("ЧВР по другому методу равно: ");
	// скрываем окно
    document.querySelector('#close222').onclick = function () {
        dialog.close() 
    }
	
}


//работает только на своей же вкладке, но не хочет на других сайтах. Даже консольлог и алерт

console.log("Зашли в скрипт")

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
    document.querySelector('.sumx').innerHTML = (Math.floor(Math.random() * (max - min + 1) ) + min + 1111);
    document.querySelector('.sumy').innerHTML = (51551515);
    let currentDate = new Date (); //принимает текущую дату
    console.log (currentDate); //выводит в консоль текущую дату
    document.querySelector('.sumx').innerHTML = (Math.floor(Math.random() * (max - min + 1) ) + min + 10000);
}

