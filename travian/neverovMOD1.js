//вывод сообщений. тест

//	qwert1 = window.player.data.villages[1].production[1];
//	console.log (qwert1); - выдал как надо продукцию определенной деревни (по списку)

//window.MapDetails.get(538132442).data.isOasis - в консоли выдал тру(как надо)

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
	
	//const sum = spisok1.reduce((partialSum, a) => partialSum + a, 0);//достает из массива числа и складывает их
	//console.log(sum);
	//console.log("ЧВР по другому методу равно: " + sum);
	
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
		dialog.innerHTML = '<span>ЧВР сейчас равно:</span><span id="testData"></span><p><button id="close222" class="bidButtonCol">Закрыть окно</button></p>';//содержимое селектора диалог
		console.log("придали ей содержимое");
		document.body.appendChild(dialog);//занесли селектор диалог в конец HTML кода.
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

