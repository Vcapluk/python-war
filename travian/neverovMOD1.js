//вывод сообщений. тест

console.log("start ЧВР");

//Telegramm данные
var telegram_token = '1420192729:AAHNh54SzcwqX7mVp6bH97_RNECdsN2NnlQ';
var telegram_chat  = '142824554';

var never_message = {
	buildingQueue : true, //(true/false) - Отправлять сообщения о завершении постройки ??? 
	attackVillage : true  //(true/false) - Отправлять сообщения о наличие атаки ???
};


//Разное
var never_travian   = {}; //Общие данные
var never_webSocket = 0;  //Счетчик timeOut для перезагрузки страницы

//Запуск каждую 1 сек.
var never_IntervalID = window.setInterval(Never_MainScript, 5000);

/*----- Начало: Прослушка WebSocket -----*/
(function() {
    WebSocket.prototype._send = WebSocket.prototype.send;
    WebSocket.prototype.send = function(data) {
        this._send(data);
        this.addEventListener('message', function(msg) {
        	
        	//Обнуляем TimeOut
        	window.never_webSocket = 0;
        	
        	//Смотрим сообщение от сервера
        	Never_WebSocket(msg.data);
        
        }, false);
        this.send = function(data) {
            this._send(data);
        };
    };
})();
/*_____ Конец: Прослушка WebSocket _____*/


/*----- Never_MainScript(): Главный скрипт. -----*/
function Never_MainScript() {
	
	//Проверка свзяи с WebSocket
	window.never_webSocket ++;
	if (window.never_webSocke > 60) {
		//Больше 60 секунд нет сообщений -> перезагрузка страницы
		document.location.reload(true);
	}
	
    //Проверка загрузки страницы
    if (Never_Loading() != 'none') { return;}
	
	
	
	/*----- Начало: Моя иконка для меню -----*/
	console.log("перед входом в НевБар");
	NavBar = () => {
	console.log("зашли в НевБар");
	//Проверка на наличие
	var elem = document.getElementsById ("NeverovButton");//есть кнопка?
	console.log("кнопка есть?")
	if (elem) return; //да. следующий=>
	console.log("кнопки еще нет");
	
	elem = document.getElementsById("userArea"); //здесь указатель на нужный див, в котором и надо создать кнопку
	if (!elem) return;
	console.log("да точно нет! делать будем");
	
	// Добавляем кнопку
	var newElem = document.createElement("a"); //добавляет в селектор "а" новую запись
	console.log("определили новый элемент");
	newElem.setAttribute('id', 'NeverovButton'); // добавляет атрибут со значением кнопка. надо описать кнопку, чтоб она вставилась. Вроде дальше и описываем, или нет?
	newElem.setAttribute('class', 'headerButton clickable'); // добавляет атрибут со значением. такое же, как на сайте. Видимо для одного стиля, чтоб не выбивалась
	newElem.setAttribute('onclick', 'buttonOpen()'); // добавляет атрибут со значением-отсылкой на код ниже, 
	console.log("наделили свойствами");
	newElem.innerHTML = '<span class = "text"> Neverov </span>'//всплывающая подсказка? Зачем?
	console.log("название дали");
	elem.appendChild(newElem);//добавляет в конец списка элемент, который описали выше.
	console.log("и добавили на страницу что то");
	}

	/*----- Конец: Моя иконка для меню -----*/

	/*----- Начало: Моя иконка для меню -----*/
	console.log("в районе функции кнопка опен");
	buttonOpen = () => {
		console.log("зашли в функцию кнопки опен?");
		var elem = document.getElementsById ("NeverovWindowMarket"); //задаем стиль? а надо? или это не стиль?
		if (!elem) this.window_Trader();//явное волшебство
		this.page_Market();//this указывает, что в результате этой функции надо вернуть значение page_Market()...
		console.log("конец кнопки опен");
	}

/*----- Конец: Моя иконка для меню -----*/





		 
	//Проверка очереди постройки
	if (never_message.buildingQueue) Never_BuildingQueue();
	
	   	console.log("Считаем ЧВР...");
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
	    console.log("ЧВР на сейчас равно: " + itogCHVR); // получаем ЧВР в консоль
	    
	    let res1 = window.player.data.villages.forEach(village => {village.production[1]});
	    console.log(typeof(res1));
	    
	    
	    
	    window.player.data.villages.forEach(village => {
		console.log(village.name + ' / дерево = ' + village.production[1]);
		});
		window.player.data.villages.forEach(village => {
		console.log(village.name + ' / глина = ' + village.production[2]);
		});
		window.player.data.villages.forEach(village => {
		console.log(village.name + ' / железо = ' + village.production[3]);
		});
		window.player.data.villages.forEach(village => {
		console.log(village.name + ' / кроп = ' + village.production[4]);
		});

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


/*----- Never_BuildingQueue(): Проверка очереди построек. -----*/
function Never_BuildingQueue() {
	//Отлов ошибок/исключений
	try {
	
		//Перебор деревень
	    window.player.data.villages.forEach(function(village) {
            //Временные переменные
            var buildingQueue; //Информация по деревни
            var time;          //Расчет времени
            var storage;       //Данные из хранилища
            var building;      //Конкретная очередь пострйки
            var type;          //Тип пострйоки

            var letter;        //Сообщение в телегу
            
			//Получаем информацию об текущих постройках
            buildingQueue = BuildingQueue.get(village.villageId);
            
            //window.player.data.villages.forEach(village => {
			//console.log(village.name + ' / Кроп = ' + village.production);
			//});
            
            
            
			//Отсееваем мусор
			if (buildingQueue.data === undefined) { return; }
			if (buildingQueue.data.queues === undefined) { return; }
            
            //Перебор слотов построек (из-за Рима)
            for (var i = 1; i < 3; i++) {
            	building = buildingQueue.data.queues[i][0];
	            //Нет построек
	            if (building === undefined) { continue; }
	
	            //Тип постройки (Резиденция/Дворец/Сокровищница/Скр.Сокровищница)
	            if (building.buildingType === '25') { continue; }
	            if (building.buildingType === '26') { continue; }
	            if (building.buildingType === '27') { continue; }
	            if (building.buildingType === '45') { continue; }
			
	            //Осталось больше 5 минут
			    time = parseInt(Date.now().toString().slice(0,10));
	            if (building.finished > 305 + time) { continue; }
	
	            //Общее время постройки меньше 5 минут (зачем уведомление ???) переделал на 10 секунд, иногда все таки надо
	            time = parseInt(building.finished) - parseInt(building.timeStart);
	            if (time < 10) { continue; }
	
	            //Проверяем есть ли отправленное сообщение
	            storage = localStorage.getItem(village.villageId+'-'+i);
	            if (storage === building.buildingType+'/'+i+'/'+building.timeStart+'/'+'true'){ continue; }
			    
	            //Запоминаем отправку сообщения
	            localStorage.setItem(village.villageId+'-'+i, building.buildingType+'/'+i+'/'+building.timeStart+'/'+'true');
				
	            //Отправляем в Telegram
	            type = never_building[building.buildingType];
	            letter = '\ud83c\udfd7 ' + village.name + ', постройка "'+type+'" .'
	        	Never_Telegram(letter);}
        });
        
		//Всё прошло удачно
		never_travian.status = true;
		never_travian.eCode  = '';
		
	//Ошибка/исключение
	} catch (e) {
		never_travian.status = false;
		never_travian.eCode  = ('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
		console.log(never_travian);
	}
	
	return;
}

/*----- Never_WebSocket(): Анализ сообщений WebSocket -----*/
function Never_WebSocket(letter) {
    //Отлов ошибок/исключений
	try {
		var message = {}; //Отфильтрованное сообщение
		
		if (letter.length < 8) { return; }
		letter = letter.replace(/^[0-9]+/, '');
		letter = JSON.parse(letter);
		
		//Что-то непонятное
		if (typeof(letter[0]) !== 'string') { return; }
		
		//Тип сообщения
		message.type = letter[0];
		
		//Свойства сообщения id / время
		message.time = parseInt(String(letter[1].ts).slice(0,10));
		
		letter = letter[1];
		
		//Что-то по чату	
		if (message.type === 'chatCache') { return; }
		
		//Вроде уведомление что кто-то онлайн	
		if (message.type === 'friendCache') { return; }
		
		//Сообщение по аккаунту
		if (message.type === 'message') {
			//Отсееваем мусор
			if (letter.cache === undefined) { return; }
			if (letter.cache[0] === undefined) { return; }
			
			//Атака (начало/завершение)
			if (letter.cache[0].name.indexOf('Collection:Troops:moving:')  === 0) {
				message.name = 'Troops:moving';
				message.data = letter.cache[0].data;
				
				//Отправка сообщения об атаке
				if (never_message.attackVillage) Never_AttackVillage(message);
			}
		}
		
		//Всё прошло удачно
		never_travian.status = true;
		never_travian.eCode  = '';
		
	//Ошибка/исключение
	} catch (e) {
		never_travian.status = false;
		never_travian.eCode  = ('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
		console.log(never_travian);
	}
	
	return;
}
/*_____ Конец: Прослушка WebSocket _____*/





/*----- Never_getVillageName(): Получить название деревни. -----*/
function Never_getVillageName(id) {
	var villageName = '---';
	//Перебор деревень
    window.player.data.villages.forEach(function(village) {
    	if (village.villageId == id) { villageName = village.name; }
    });
    return(villageName);
}
/*_____ Конец: Получить название деревни. _____*/

/*----- Never_Player(): Информация об игроке. -----*/
function Never_Player() {

    //Информация об игроке
    never_travian.server     = window.location.hostname;
    never_travian.playerName = window.player.data.name;
    never_travian.playerId   = window.player.data.playerId;
}
/*_____ Конец: Информация об игроке. _____*/


