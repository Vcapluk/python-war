РАЗОБРАТЬСЯ!!!
"Торговый путь в деревню {{villageId,villageName|villageLink}}";  



//1. здесь считываем все возможные ID деревень. 
                    //добавлять в главный скрипт после навбара

    //список оазисов надо как то закрепить отдельно в отдельный список, чтоб не искать его каждый раз
        //может сделать этот список по событию, а потом уже где то хранить?
    //(надо только 1 раз в начале сервера и после расширения границ)
    //потом надо сделать интерактив, где можно выбрать, кого искать. 
    //значит ID зверя надо прописать через переменную.
    // надо еще сделать поиск чистого зверя. нужны мышки, кроки, слоники(1,8,10)
        //вывести их в отдельные таблицы?
            //что надо в таблице? координаты оазиса. количество зверей. както указать, кого ищем. обновить сейчас.
    //обновление по событию или раз в минуту. скорее даже только при загрузке.
    //




//мир у нас по х у -60/-60 - 60/60
// 32768 - разница между слоями
// 536887296 - это 0/0
// 538132443 - это -37/38
// 536887296+38*32768-37 = 538132443
// рассчитаем необходимый диапозон чисел, и внесем его в список ID деревень. Надо? надо, без этого браузер виснет наглухо. надо оптимизировать
// у нас есть 0/0 - 536887296
//вычислим левую нижнюю точку.
// 536887296-60*32768 - 60  ==  534921156;
/*
	let spisokID = [];
	let coord0 = 536887296;
	let coorda = coord0-60*32768-60;// начало от -60/-60           60*32768
	let coordz = coord0+60*32768+60;// конец до 60/60              60*32768
*/

// попробуем сделать по необходимому квадрату. по радиусу сложно поиска

let spisokID = [];
let coord0 = 538132443;//воображаемый центр(или ID нашей деревни) [0/0 если для всего мира]
let z = 10; //условный радиус(половина стороны квадрата) [60 - если для всего мира]
let coorda = coord0-z*32768-z;// начало от -60/-60           60*32768
let coordz = coord0+z*32768+z;// конец до 60/60              60*32768


for (let x = 0; x < 2*z; x++){
    c = coorda + x*32768;//задаем строку по координате х
    for (let y = 0; y < 2*z; y++){
        c1 = c + y;//задаем строку по координате у
        spisokID.push(c1);
    }
}

//console.log(spisokID);

let spisokOasisFull = [];//список всех оазисов
let spisokOasisUnits = [];//список оазисов где есть определенные звери, но не только они.
let spisokOasisUnitsSolo = [];// список оазисов где есть только определенные(чистые) звери.

//для создания списка всех оазисов	
for (let i = 0; i < spisokID.length; i++) {
    qwert = window.MapDetails.get(spisokID[i]).data.isOasis;//клетка является оазисом?
    //console.log(i);
    //console.log(spisokID[i]);
    if (qwert == true) {//да, является
        let w = spisokID[i];
        spisokOasisFull.push(w);//запишем ее в список оазисов всех
        //console.log(i);
        
    }
}
//console.log(spisokOasisFull);//выведем список всех оазисов

//для создания списка оазисов и поиска наличия определенных зверей[1]
for (let i = 0; i < spisokOasisFull.length; i++) {
    qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[1];//что лежит в десятом слоте?(слоники)
    if (qwert1 !== undefined) {
        //console.log(spisokID[i]);
        let b = spisokOasisFull[i];
        spisokOasisUnits.push(b);//запишем ее в список оазисов с нужными юнитами
    }
}
//console.log(spisokOasisUnits);//выведем список оазисов с [1]


//для вывода в консоль списка оазисов с искомым зверем[1]
//for (let i = 0; i < spisokOasisUnits.length; i++) {
//	console.log(window.Village.get(spisokOasisUnits[i]).data.name);
//	console.log(window.MapDetails.get(spisokOasisUnits[i]).data.troops.units[1]);
//	
//}

//для создания списка оазисов и поиска только определенных зверей [x] кого ищем, у того в условии ставим "!", при смене зверя меняем вывод в консоль!!!
for (let i = 0; i < spisokOasisFull.length; i++) {
    qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[1];//что лежит в первом слоте?
    if (qwert1 !== undefined) {
        qwert2 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[2];//что лежит в этом слоте?
        if (qwert2 == undefined) {
            qwert3 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[3];//что лежит в этом слоте?
            if (qwert3 == undefined) {
                qwert4 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[4];//что лежит в этом слоте?
                if (qwert4 == undefined) {
                    qwert5 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[5];//что лежит в этом слоте?
                    if (qwert5 == undefined) {
                        qwert6 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[6];//что лежит в этом слоте?
                        if (qwert6 == undefined) {
                            qwert7 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[7];//что лежит в этом слоте?
                            if (qwert7 == undefined) {
                                qwert8 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[8];//что лежит в этом слоте?
                                if (qwert8 == undefined) {
                                    qwert9 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[9];//что лежит в этом слоте?
                                    if (qwert9 == undefined) {
                                        qwert10 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[10];//что лежит в этом слоте?
                                        if (qwert9 == undefined) {
                                            let z = spisokOasisFull[i];
                                            spisokOasisUnitsSolo.push(z);//запишем ее в список оазисов с чистыми юнитами
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
//console.log(spisokOasisUnitsSolo);//выведем список оазисов с чистыми зверями

    //для вывода в консоль списка оазисов с искомым зверем[x] - поставить из кода выше.
    let spisokVTablet = [];
for (let i = 0; i < spisokOasisUnitsSolo.length; i++) {
    console.log(window.MapDetails.get(spisokOasisUnitsSolo[i]).data.troops.units[1] + ' чистых зверей в  ' + window.Village.get(spisokOasisUnitsSolo[i]).data.name);
    vTablet = window.MapDetails.get(spisokOasisUnitsSolo[i]).data.troops.units[1] + ' чистых зверей в  ' + window.Village.get(spisokOasisUnitsSolo[i]).data.name;
    spisokVTablet.push(vTablet);
}

console.log(spisokVTablet); //выдает списком чистых зверей. Можем засунуть в табличку?










//2.вывод ЧВР, ЕК.
    //надо добавить вывод оазисов... 

console.log("start ЧВР");

//Запуск каждую 10 сек.
var never_IntervalID = window.setInterval(Never_MainScript, 10000);

/*----- Never_MainScript(): Главный скрипт. -----*/
function Never_MainScript() {
	
	//Проверка загрузки страницы. Без этого вылетает ошибка, тк страница не успевает прогрузиться
    if (Never_Loading() != 'none') { return;}
	
	//рисуем кнопку, чтоб на нее жамкать и получать что то в ответ
	NavBar = () => {
		
		//Проверка на наличие кнопки
		var elem = document.getElementById("NeverovButton");//есть кнопка?
		if (elem) return; //да. выходим.
		
		elem = document.getElementById("userArea");//есть элемент "userArea"?
		if (!elem) return; //нет. выходим. Это для того, чтобы рисовать кнопку на прогруженной странице
	
		// Добавляем кнопку
		var newElem = document.createElement("a"); //записано будет в селектор "а"
			newElem.setAttribute('id', 'NeverovButton'); // добавляет атрибут со значением кнопка. надо описать кнопку, чтоб она вставилась
		newElem.setAttribute('class', 'headerButton clickable'); // добавляет атрибут со значением. такое же, как на сайте
		newElem.setAttribute('onclick', 'buttonOpen()'); // добавляет атрибут со значением
		newElem.innerHTML = '<span class = "text"> Меню </span>'//название кнопки на экране
		userArea.appendChild(newElem);//добавляет в конец списка элемент, который описали выше.
		
	//добавим кнопку? а надо? попробуем...
		
		//console.log("добавляем тег диалог");
		var dialog = document.createElement('dialog');//записано будет в селектор "dialog"
		//console.log("определили функцию");
		str = '';
		str = '<div>Табличка - зверь</div>';
		str += '<!-- Общий контейнер для табов -->';
		str += '<div class="tabs">';
		str += '<!--  Контейнер с вкладками   -->';
		str +=		'<ul class="tab-header">';
		str +=			'<li class="tab-header__item js-tab-trigger active" data-tab="1">ЧВР</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="2">ЕК</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="3">Палатки</li>';
		str +=			'<span><button id="close222" class="innerText">Х</button></span>';
		str +=		'</ul>';
		str += '<!--  Контейнер с блоками, которые содержат контент вкладок   -->';
		str +=		'<ul class="tab-content">';
		str +=			'<li class="tab-content__item js-tab-content active" data-tab="1">ЧВР сейчас равно:<span id="testData"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="2">ЕК сейчас равно:<span id="testDataEK"></span>  найти сколько сейчас набрано ЕК/сколько надо(числами), вывести список деревень, напротив каждой 2 галочки(чтоб нонстоп праздник/торжество) и время на остаток до слота ЕК.  Аня предложила, чтоб для дерки до наса 500 гнать  ****сходу вспоминается только домики на город) какие домики, до какого лелва и сколько это будет в ресах и по времени при текущем чвр****  </li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="3">Здесь нужен контент по палаткам, наполнение, отследить, что идут в палатку, сколько, и нужен ли апгрейд палатке.</li>';
		str +=		'</ul>';
		str += '</div>';
		str += '';
		str += '';
		str += '';
		str += '';
		
		dialog.innerHTML = str;//содержимое селектора диалог
		//console.log("придали ей содержимое");
		document.body.appendChild(dialog);//занесли селектор диалог в конец HTML кода.
		
		
		
//вытащили функцию для корректной работы вкладок		            магия какая-то
var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      var id = this.getAttribute('data-tab'),
          content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.js-tab-trigger.active'),
          activeContent = document.querySelector('.js-tab-content.active');
      
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      
      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});
   		
	}
	
	NavBar();//без вызова этой функции не добавится кнопка
	
}

/*_____ Конец: Главный скрипт. _____*/



/*----- Never_Loading(): Проверка загрузки на экране. -----*/
function Never_Loading() {
	
	var loading = document.getElementsByClassName('loadingScreen');
	if (loading.length > 0) {
		 loading = getComputedStyle(loading[0]).display;
	}
	return(loading);
}
/*_____ Конец: Проверка загрузки на экране. _____*/




buttonOpen = () => {//действие по нажатию на кнопку
	var dialog = document.querySelector('dialog')//говорим, что надо вызвать селектор диалог?
    	// выводим модальное окно
    	document.querySelector('#NeverovButton').onclick = function () {
        	dialog.show()
    	}
    	//считаем чвр и выводим на экран    
	var spisokCHVR = [];
	//console.log(spisokCHVR);
	//spisokCHVR.push(-1000);
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / дерево = ' + village.production[1]);
		spisokCHVR.push(parseInt(village.production[1], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / глина = ' + village.production[2]);
		spisokCHVR.push(parseInt(village.production[2], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / железо = ' + village.production[3]);
		spisokCHVR.push(parseInt(village.production[3], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / кроп = ' + village.production[4]);
		spisokCHVR.push(parseInt(village.production[4], 10));
	});
	
	//console.log(spisokCHVR);
	
	const sum = spisokCHVR.reduce((partialSum, a) => partialSum + a, 0);//достает из массива числа и складывает их
	//console.log(sum);
	//console.log("ЧВР по другому методу равно: " + sum);
	
	//для вывода на экран
	const sumCHVR = sum.toString();
	document.getElementById("testData").textContent = sumCHVR;
    
    
    //считаем EK и выводим на экран    
	var spisokEK = [];
	//console.log(spisokEK);
	//spisokEK.push(-1000);
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / культура = ' + village.culturePointProduction);
		spisokEK.push(parseInt(village.culturePointProduction, 10));
	});
	const sumEK = spisokEK.reduce((partialSum, a) => partialSum + a, 0);//достает из массива числа и складывает их
	//console.log(sumEK);
	//для вывода на экран
	const sumEKC = sumEK.toString();
	document.getElementById("testDataEK").textContent = sumEKC;
    
	
    // скрываем окно, выводит кнопочку "закрыть"
    	document.querySelector('#close222').onclick = function () {
    	dialog.close() 
    	}
	
}