//вывод сообщений. тест

console.log("start ЧВР");

//Запуск каждую 1 сек.
var never_IntervalID = window.setInterval(Never_MainScript, 5000);

/*----- Never_MainScript(): Главный скрипт. -----*/
function Never_MainScript() {
	//console.log("Считаем ЧВР...");
	var elW = document.querySelector(".stockContainer.wood .production .value");//вытащили строку выработки дерева
	const contentW = elW.innerText;// достаем текст из дива
	var xW = parseInt(contentW, 10);// из текста достаем число
	    //console.log(xW);
	        	
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
	//console.log("ЧВР на сейчас равно: " + itogCHVR); // получаем ЧВР в консоль
	    
	//let res1 = window.player.data.villages.forEach(village => {village.production[1]});
	//console.log(typeof(res1)); выдает undefined
	    
	    
	var spisok1 = [];
	//console.log(spisok1);
	//spisok1.push(-1000);
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / дерево = ' + village.production[1]);
		spisok1.push(parseInt(village.production[1], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / глина = ' + village.production[2]);
		spisok1.push(parseInt(village.production[2], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / железо = ' + village.production[3]);
		spisok1.push(parseInt(village.production[3], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / кроп = ' + village.production[4]);
		spisok1.push(parseInt(village.production[4], 10));
	});
	
	//console.log(spisok1);
	
	const sum = spisok1.reduce((partialSum, a) => partialSum + a, 0);//достает из массива числа и складывает их
	//console.log(sum);
	console.log("ЧВР по другому методу равно: " + sum);
	
	//для вывода на экран
	// sumCHVR = sum.toString();
	//document.getElementById("testData").textContent = sumCHVR;
	
	//рисуем кнопку, чтоб на нее жамкать и получать что то в ответ
	NavBar = () => {//добавили в главный скрипт. Чтоб было.
		//Проверка на наличие
		var elem = document.getElementById("NeverovButton");//есть кнопка?
		if (elem) return; //да. выходим.
		
		elem = document.getElementById("userArea");//есть элемент "userArea"?
		if (!elem) return; //нет. выходим. Это для того, чтобы рисовать кнопку на прогруженной странице
	
		// Добавляем кнопку
		var newElem = document.createElement("a"); //записано будет в селектор "а"
		console.log("определили новый элемент");
		newElem.setAttribute('id', 'NeverovButton'); // добавляет атрибут со значением кнопка. надо описать кнопку, чтоб она вставилась
		newElem.setAttribute('class', 'headerButton clickable'); // добавляет атрибут со значением. такое же, как на сайте
		newElem.setAttribute('onclick', 'buttonOpen()'); // добавляет атрибут со значением
		console.log("наделили свойствами");
		newElem.innerHTML = '<span class = "text"> Меню </span>'//название кнопки на экране
		console.log("название дали");
		userArea.appendChild(newElem);//добавляет в конец списка элемент, который описали выше.
		console.log("и добавили на страницу что то");
		
		//добавим кнопку? а надо? попрробуем...
		//<button id="open">Про типы данных</button>
		
		console.log("добавляем тег диалог");
		var dialog = document.createElement('dialog');//записано будет в селектор "dialog"
		console.log("определили функцию")
		dialog.innerHTML = '<div>Табличка - зверь</div><!-- Общий контейнер для табов --><div class="tabs"><!--  Контейнер с вкладками   --><ul class="tab-header"><li class="tab-header__item js-tab-trigger active" data-tab="1">ЧВР</li><li class="tab-header__item js-tab-trigger" data-tab="2">ЕК</li><li class="tab-header__item js-tab-trigger" data-tab="3">Палатки</li><span><button id="close222" class="innerText">ХXX</button></span></ul>   <!--  Контейнер с блоками, которые содержат контент вкладок   --><ul class="tab-content"><li class="tab-content__item js-tab-content active" data-tab="1">ЧВР сейчас равно:<span id="testData"></span></li><li class="tab-content__item js-tab-content" data-tab="2">Здесь нужен контент по ЕК</li><li class="tab-content__item js-tab-content" data-tab="3">Здесь нужен контент по палаткам, наполнение, может даже получится отследить, что идут в палатку, сколько, и нужен ли апгрейд палатке.</li></ul>';//содержимое селектора диалог
		console.log("придали ей содержимое");
		document.body.appendChild(dialog);//занесли селектор диалог в конец HTML кода.
		
		
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


buttonOpen = () => {//действие по нажатию на кнопку
	var dialog = document.querySelector('dialog')//говорим, что надо вызвать селектор диалог?
    	// выводим модальное окно
    	document.querySelector('#NeverovButton').onclick = function () {
        	dialog.show()
    	}
    	//считаем чвр и выводим на экран    
	var spisok1 = [];
	//console.log(spisok1);
	//spisok1.push(-1000);
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / дерево = ' + village.production[1]);
		spisok1.push(parseInt(village.production[1], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / глина = ' + village.production[2]);
		spisok1.push(parseInt(village.production[2], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / железо = ' + village.production[3]);
		spisok1.push(parseInt(village.production[3], 10));
	});
	window.player.data.villages.forEach(village => {
		//console.log(village.name + ' / кроп = ' + village.production[4]);
		spisok1.push(parseInt(village.production[4], 10));
	});
	
	//console.log(spisok1);
	
	const sum = spisok1.reduce((partialSum, a) => partialSum + a, 0);//достает из массива числа и складывает их
	//console.log(sum);
	console.log("ЧВР по другому методу равно: " + sum);
	
	//для вывода на экран
	const sumCHVR = sum.toString();
	//document.getElementById("testData").textContent = sumCHVR;
      
    	document.getElementById("testData").textContent = sumCHVR;
    	// скрываем окно
    	document.querySelector('#close222').onclick = function () {
    	dialog.close() 
    	}
	
}
