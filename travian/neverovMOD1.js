//Поехали ???
console.log('Never: Инициализация');

// Сообщение при загрузке - не работает, потому что страница не загрузилась...

// функция для того, чтоб вытащить числа из дивов
function number_pull_out(str) {
	let x = parseInt(str.replace(/[^\d]/g, ''))
	console.log(x)
}

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
              if (building.finished > 305 + time) { continue; }
  
              //Общее время постройки меньше 5 минут (зачем уведомление ???) переделал на 20 секунд, иногда все таки надо
              time = parseInt(building.finished) - parseInt(building.timeStart);
              if (time < 20) { continue; }
  
              //Проверяем есть ли отправленное сообщение
              storage = localStorage.getItem(village.villageId+'-'+i);
              if (storage === building.buildingType+'/'+i+'/'+building.timeStart+'/'+'true'){ continue; }
          
              //Запоминаем отправку сообщения
              localStorage.setItem(village.villageId+'-'+i, building.buildingType+'/'+i+'/'+building.timeStart+'/'+'true');
        
              //Отправляем в Telegram
              type = never_building[building.buildingType];
              letter = '\ud83c\udfd7 ' + village.name + ', постройка "'+type+'" .'
            Never_Telegram(letter);
	        console.log("сообщение ушло...");
	        var elW = document.querySelector(".stockContainer.wood .production .value"); //вытащили строку со значением выработки дерева
	        console.log(elW);//вывели в консоль
	        //let strW = string(elW);
	        
		    //alert(`hint: ${elW}`); //выделить число из htmldivelement
	        
	        a = '<div class="value">  +168 </div>';

			function f(str) {
				let x = parseInt(str.replace(/[^\d]/g, ''));
				console.log(x);
			}

			f(a);
			//f(elW);
			//f(strW);
			f('abc-6-abc');
			f('7-abc');
			f('zz-4-abc-2-zz');
	        //var numberW =  number_pull_out(elW);
	        //console.log(parseInt(numberW));
	        //var round = Math.round;
			//var x = round("1000"); // Equivalent to round("1000", 0)
	        
	        //var number = parseInt($(".value").text());
	        //console.log(numberW);
	        
	        //var x = parseInt(number, 10);
	        //console.log(x);
	        
	        /*var number = parseInt($('.number').text());
	        var numb = $('.value').val();
			console.log(numb);*/
	        /*var num = /\d+/.exec(document.getElementById('value').textContent)[0];
	        console.log(num);
	        var auction_class = document.getElementById('value').innerText;// text????
			var auction = Number.parseInt(auction_class);
			console.log(auction);//вывели в консоль*/
	        //var elWQ = $('.elW').text();
	        //var all = document.getElementById('.stockContainer.wood .production .value').innerHTML - вытянуть число 140, а дальше просто подставить в js
	        //$('#break_id').text(reak_var);
	        
	        var elC = document.querySelector(".stockContainer.clay .production .value"); //вытащили строку выработки глины
	        console.log(elC);//вывели в консоль
	        var elI = document.querySelector(".stockContainer.iron .production .value");//вытащили строку выработки железа
	        console.log(elI);//вывели в консоль
	        var elCr = document.querySelector(".stockContainer.crop .production .value");//вытащили строку выработки кропа (с учетом потребления) а надо полностью? а еще надо знак учесть потом...
	        console.log(elCr);//вывели в консоль
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