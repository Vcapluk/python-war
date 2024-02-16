//Поехали ???
console.log('Never: Инициализация');

//Telegramm данные
var telegram_token = '1420192729:AAHNh54SzcwqX7mVp6bH97_RNECdsN2NnlQ';
var telegram_chat  = '142824554';
let finishNow = true;//false для автоматического завершения построек

var never_message = {
	buildingQueue : true, //(true/false) - Отправлять сообщения о завершении постройки ??? 
	attackVillage : true  //(true/false) - Отправлять сообщения о наличие атаки ???
};


//Разное
var never_travian   = {}; //Общие данные
var never_webSocket = 0;  //Счетчик timeOut для перезагрузки страницы

//Запуск каждую 1 сек.
var never_IntervalID = window.setInterval(Never_MainScript, 1000);


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
	
		 
	//Проверка очереди постройки
	if (never_message.buildingQueue) Never_BuildingQueue();
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
				if (building.finished > 299 + time) { continue; }
				//console.log('старт отправки сообщения?')
				let a = building.finished - time;
				if (a<300){//если меньше 5 минут осталось
					if (finishNow = true) {
						let queueType;//для определения типа постройки
						let qwer = Number(building.buildingType);//тип постройки переводим в число
						if (qwer <= 4) {//если ресурсные поля (1-4), то 2 тип, центр - 1 тип
							queueType = 2;
						} else { 
							queueType = 1;
						};
						const contr = 'premiumFeature';//"controller"
						const acti = 'bookFeature';//"action"
						const villageId1 = village.villageId;
						let session = JSON.parse(decodeURIComponent(document.cookie.split(';').find(cookie => cookie.trim().startsWith('t5SessionKey=')).split('=')[1])).key;//достает куки, зачем они нужны?
						const playerId = player.data.playerId;//достает ID для запроса
						const time = new Date().getTime().toString(); //делает время для запроса
						const url = `https://ru1.kingdoms.com/api/?c=${contr}&a=${acti}&p${playerId}&t${time}`;
						const prise = 0;
						const message = '{"controller": "' + contr + '","action": "' + acti +'","params": {"featureName":"finishNow","params": {"prise": ' + prise +',"queueType": "' + queueType + '","villageId": '+ villageId1 + '}},"clientId": "' + getClientId() + '","session": "' + session + '"}';//делает строчку для запроса. До этого была функция, но она не успевала сделать строчку корректно
						const request = new Request(url, {
							method: "POST",
							body: message,
							mode: "cors",
							credentials: "include",
						});
						//сам запрос на сервер
						fetch(request).then((response) =>{
							return response.json();
						})
						.then((jsonData) => {
							сonsole.log('запрос прошел, должно автозавершиться');
						});
	           		}
		       	}
		
				//Общее время постройки меньше 5 минут (зачем уведомление ???) переделал на 20 секунд, иногда все таки надо
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
				Never_Telegram(letter);
	        	
	        	}
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


/*----- Never_AttackVillage(): Перемещение войск -----*/
function Never_AttackVillage(message) {
	
    //Временные переменные
	var time;
	var letter;
	
	//Отсееваем мусор
	if (message.data.operation === undefined) { return; }
	console.log(message);
	//Есл не прибывающие (пропускаем)
	message.operation = message.data.operation;
	if (message.operation !== 2) { return; }
	
	//Отсееваем мусор
	if (message.data.cache === undefined) { return; }
	if (message.data.cache[0] === undefined) { return; }
	if (message.data.cache[0].data === undefined) { return; }
	
	//Ищем тип прибывающих
	message.data = message.data.cache[0].data;
	if (message.data.movement === undefined) { return; }
	if (message.data.movement.movementType === undefined) { return; }
	message.movementType = message.data.movement.movementType;
	
	//Не атакующий тип прибытия войска
	if (never_movement[message.movementType] === undefined) { return; }
	
	//Проверка на спам
	message.spam = false;
	for (var i = 1; i < 12; i++) {
		if (message.data.units[i] === undefined) { continue; }
		if (message.data.units[i] != -1) { message.spam = true; }
	}
	if (message.spam) { return; }
	
	//Отправляем сообщение
	time = new Date((parseInt(message.data.movement.timeFinish) - parseInt(message.time)) * 1000);
	time = time.getUTCHours()+':'+time.getUTCMinutes()+':'+time.getUTCSeconds();
	
	letter = '\u2694\ufe0f '+Never_getVillageName(message.data.villageIdLocation);
	letter = letter + ', угроза "'+never_movement[message.movementType]+'"';
	letter = letter + ', от "' + message.data.playerName + '" через '+time+ '!';
	Never_Telegram(letter);
	
}
/*_____ Конец: Атака на деревню _____*/


/*----- Начало: Отправка сообщение в Telegramm -----*/
function Never_Telegram(message) {
	//Исходные переменные
	var xhttp = new XMLHttpRequest();
	var url   = 'https://api.telegram.org/bot'+telegram_token+'/sendMessage?chat_id='+telegram_chat;
	var text  = '&text='+message;
    var opt = '';
	//opt = '&disable_notification=true';
    
    //Отправка сообщения
    xhttp.open("Get", url+'&'+text+opt, true);
    xhttp.send();
}
/*_____ Конец: Отправка сообщение в Telegramm _____*/


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


//Разные табличные данные
const never_building  = {
	1:  'Лесопилка',
	2:  'Глиняный карьер',
	3:  'Железный рудник',
	4:  'Ферма',
	5:  'Пилорама',
	6:  'Кирпичный завод',
	7:  'Литейный завод',
	8:  'Мельница',
	9:  'Пекарня',
	10: 'Склад',
	11: 'Амбар',
	12: 'ID = 12',
	13: 'Кузница',
	14: 'Арена',
	15: 'Главное здание',
	16: 'Пункт сбора',
	17: 'Рынок',
	18: 'Посольство',
	19: 'Казарма',
	20: 'Конюшня',
	21: 'Мастерская',
	22: 'Академя',
	23: 'Тайник',
	24: 'Ратуша',
	25: 'Резиденция',
	26: 'Дворец',
	27: 'Сокровищница',
	28: 'Торговая палата',
	29: 'Большая казарма',
	30: 'Большая конюшня',
	31: 'Городская стена',
	32: 'Земляной вал',
	33: 'Изгородь',
	34: 'Каменотес',
	35: 'Пивоварня',
	36: 'Капканщик',
	37: 'Таверна',
	38: 'Большой склад',
	39: 'Большой амбар',
	40: 'Чудо Света',
	41: 'Водопой',
	42: 'Ров',
	43: 'Стена (Натары)',
	44: 'Дом полководца',
	45: 'Скрытая сокровищница',
	46: 'ID = 46',
	47: 'ID = 47',
	48: 'ID = 48',
	49: 'ID = 49'
};


const never_movement = {
	3:  'Атака',
	4:  'Набег',
	47: 'Осада',
}