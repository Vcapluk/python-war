//Поехали ???
console.log('Never: Инициализация');

//Telegramm данные
var telegram_token = '1420192729:AAHNh54SzcwqX7mVp6bH97_RNECdsN2NnlQ';
var telegram_chat = '142824554';
let finishNow = true; //false для автоматического завершения построек
let buildingAppNow = true; //false для создания очереди построек...
let villageNowFun = '538230742'; //нужная нам деревенька, которую строим. тип данных строка

var never_message = {
	buildingQueue: true, //(true/false) - Отправлять сообщения о завершении постройки ???
	attackVillage: true, //(true/false) - Отправлять сообщения о наличие атаки ???
};

//Разное
var never_travian = {}; //Общие данные
var never_webSocket = 0; //Счетчик timeOut для перезагрузки страницы

//Запуск каждую 1 сек.
var never_IntervalID = window.setInterval(Never_MainScript, 5000);

/*----- Начало: Прослушка WebSocket -----*/
(function () {
	WebSocket.prototype._send = WebSocket.prototype.send;
	WebSocket.prototype.send = function (data) {
		this._send(data);
		this.addEventListener(
			'message',
			function (msg) {
				//Обнуляем TimeOut
				window.never_webSocket = 0;

				//Смотрим сообщение от сервера
				Never_WebSocket(msg.data);
			},
			false
		);
		this.send = function (data) {
			this._send(data);
		};
	};
})();
/*_____ Конец: Прослушка WebSocket _____*/

/*----- Never_MainScript(): Главный скрипт. -----*/
function Never_MainScript() {
	//Проверка свзяи с WebSocket
	window.never_webSocket++;
	if (window.never_webSocke > 60) {
		//Больше 60 секунд нет сообщений -> перезагрузка страницы
		document.location.reload(true);
	}

	//Проверка загрузки страницы
	if (Never_Loading() != 'none') {
		return;
	}

	//if ( buildingAppNow === true ) BuildingNowCentr();

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
	return loading;
}
/*_____ Конец: Проверка загрузки на экране. _____*/



/*----- VillageСapital(): достаем значение, возвращает true или false -----*/

function VillageСapital(villageId){
	qwer = window.Village.get(villageId).data
}

/*----- конец VillageСapital()-----*/

/*----- Never_BuildingQueue(): Проверка очереди построек. -----*/
function Never_BuildingQueue() {
	//Отлов ошибок/исключений
	try {
		
		//блок кода для атопостройки всех деревень. А надо нам такое?
		window.player.data.villages.forEach(function (village) {
			buildingQueue = BuildingQueue.get(village.villageId);
			if (buildingQueue.data === undefined) {return;}
			if (buildingQueue.data.queues === undefined) {return;}
			if (buildingQueue.data.freeSlots === undefined) {return;}
			if (buildingQueue.data.freeSlots[1] === 1) {
				//слот свободен, надо заказать
				console.log('слот в ' + village.name + ' свободен, что бы заказать???' + village.villageId);
				//console.log(village.name);
				let villageId = village.villageId;
				let name = village.name;
				let qwer = window.Building.getCollection(village.villageId).data;
				const spisokBuildingFull = [];
				//console.log(spisokBuildingFull)
				//let qwer = window.Building.getCollection(iD).data;
				for (let n = 0; n < 40; n++) {
					//готовим список построек
					let qwer1 = qwer[n];
					spisokBuildingFull.push(qwer1.data);
				}
				//console.log(spisokBuildingFull);
				let status = false;

				status = BuildingCheckLevel(spisokBuildingFull,15,1,villageId,name,27,status);//ГЗ
				status = BuildingCheckLevel(spisokBuildingFull,15,3,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,10,1,villageId,name,23,status);//склад
				status = BuildingCheckLevel(spisokBuildingFull,11,1,villageId,name,20,status);//амбар
				status = BuildingCheckLevel(spisokBuildingFull,10,2,villageId,name,23,status);
				status = BuildingCheckLevel(spisokBuildingFull,11,2,villageId,name,20,status);
				status = BuildingCheckLevel(spisokBuildingFull,15,3,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,18,1,villageId, name,28,status);//посолька
				status = BuildingCheckLevel(spisokBuildingFull,15,4,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,16,1,villageId, name,32,status);//ПС
				status = BuildingCheckLevel(spisokBuildingFull,15,5,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,17,3,villageId, name,35,status);//рынок
				status = BuildingCheckLevel(spisokBuildingFull,10,4,villageId,name,23,status);
				status = BuildingCheckLevel(spisokBuildingFull,11,3,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,4,2,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,11,4,villageId,name,20,status);
				status = BuildingCheckLevel(spisokBuildingFull,15,6,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,4,3,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,19,3,villageId, name,29,status);//казарма
				status = BuildingCheckLevel(spisokBuildingFull,15,7,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,22,3,villageId, name,26,status);//академия
				status = BuildingCheckLevel(spisokBuildingFull,15,8,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,10,5,villageId,name,23,status);
				status = BuildingCheckLevel(spisokBuildingFull,13,3,villageId, name,25,status);//Кузница
				status = BuildingCheckLevel(spisokBuildingFull,10,6,villageId,name,23,status);
				status = BuildingCheckLevel(spisokBuildingFull,11,5,villageId,name,20,status);
				status = BuildingCheckLevel(spisokBuildingFull,11,6,villageId,name,20,status);
				status = BuildingCheckLevel(spisokBuildingFull,1,2,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2,2,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,3,2,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,15,9,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,1,3,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2,3,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,15,10,villageId,name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,3,3,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,10, 7, villageId, name,23,status);
				status = BuildingCheckLevel(spisokBuildingFull,4,4,villageId,name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,10, 8, villageId, name,23,status);
				status = BuildingCheckLevel(spisokBuildingFull,11, 8, villageId, name,20,status);
				status = BuildingCheckLevel(spisokBuildingFull,15, 12, villageId, name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,1, 3, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2, 3, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,3, 3, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,4, 5, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,22,5,villageId, name,26,status);
				status = BuildingCheckLevel(spisokBuildingFull,20,3, villageId, name,30,status);//Конюшня
				status = BuildingCheckLevel(spisokBuildingFull,17, 5, villageId, name,35,status);
				status = BuildingCheckLevel(spisokBuildingFull,16, 3, villageId, name,32,status);
				status = BuildingCheckLevel(spisokBuildingFull,15, 13, villageId, name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,33, 3, villageId, name,33,status);//Изгородь
				status = BuildingCheckLevel(spisokBuildingFull,23, 3, villageId, name,24,status);//Тайник
				status = BuildingCheckLevel(spisokBuildingFull,15, 15, villageId, name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,10, 14, villageId, name,23,status);
				status = BuildingCheckLevel(spisokBuildingFull,11, 12, villageId, name,20,status);
				status = BuildingCheckLevel(spisokBuildingFull,15, 20, villageId, name,27,status);
				status = BuildingCheckLevel(spisokBuildingFull,25, 10, villageId, name,38,status);//Резиденция
				status = BuildingCheckLevel(spisokBuildingFull,1, 4, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2, 4, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,3, 4, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,1, 5, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2, 5, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,3, 5, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,4, 6, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,8, 1, villageId, name,19,status);
				status = BuildingCheckLevel(spisokBuildingFull,1, 6, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2, 6, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,3, 6, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,4, 7, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,8, 2, villageId, name,19,status);
				status = BuildingCheckLevel(spisokBuildingFull,1, 7, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2, 7, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,3, 7, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,4, 8, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,8, 3, villageId, name,19,status);
				status = BuildingCheckLevel(spisokBuildingFull,1, 8, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2, 8, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,3, 8, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,4, 9, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,11, 17, villageId, name,20,status);
				status = BuildingCheckLevel(spisokBuildingFull,8, 5, villageId, name,19,status);
				status = BuildingCheckLevel(spisokBuildingFull,4, 10, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,9, 5, villageId, name,37,status);
				status = BuildingCheckLevel(spisokBuildingFull,1, 9, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,2, 9, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,3, 9, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,1, 10, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,5, 5, villageId, name,21,status);
				status = BuildingCheckLevel(spisokBuildingFull,2, 10, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,6, 5, villageId, name,22,status);
				status = BuildingCheckLevel(spisokBuildingFull,3, 10, villageId, name,0,status);
				status = BuildingCheckLevel(spisokBuildingFull,7, 5, villageId, name,36,status);
				status = BuildingCheckLevel(spisokBuildingFull,17, 20, villageId, name,35,status);
				status = BuildingCheckLevel(spisokBuildingFull,20, 10, villageId, name,30,status);
				status = BuildingCheckLevel(spisokBuildingFull,28, 10, villageId, name,40,status);
				status = BuildingCheckLevel(spisokBuildingFull,33, 9, villageId, name,33,status);//Изгородь
				status = BuildingCheckLevel(spisokBuildingFull,22, 10, villageId, name,26,status);
				status = BuildingCheckLevel(spisokBuildingFull,24, 10, villageId, name,39,status);//Ратуша
			}
		});
/*
		//блок заказа постройки
		let villageNow = '538197979'; //нужная нам деревенька. тип данных строка
		let resStartNow0 = true;
		window.player.data.villages.forEach(function (village) {
			if (village.villageId === villageNow) {
				buildingQueue = BuildingQueue.get(village.villageId);
				if (buildingQueue.data === undefined) {
					return;
				}
				if (buildingQueue.data.queues === undefined) {
					return;
				}
				if (buildingQueue.data.freeSlots === undefined) {
					return;
				}
				for (var i = 1; i < 2; i++) {
					if (buildingQueue.data.freeSlots[1] === 1) {
						let iD = villageNow; //айди деревни, где будем строить.
						console.log('будем строить?');
						let spisokBuilding = [];
						let qwer = window.Building.getCollection(iD).data;
						for (let n = 0; n < 18; n++) {
							//готовим список построек
							let qwer1 = qwer[n];
							spisokBuilding.push(qwer1.data);
						}
						let spisokBuildingTime = spisokBuilding.sort(
							(a, b) => a.upgradeTime - b.upgradeTime
						); //сортировка по времени строительства(для выбора самой быстрой)
						const contr = 'building'; //"controller"
						const acti = 'upgrade'; //"action"
						const thisIsBuilding = spisokBuildingTime[0]; //создали переменную для доступа к текущей постройке, чтоб удобно было брать данные
						//console.log(thisIsBuilding);
						const locationId = thisIsBuilding.locationId;
						const buildingType = thisIsBuilding.buildingType;
						let reserveResources = true;
						let session = JSON.parse(
							decodeURIComponent(
								document.cookie
									.split(';')
									.find((cookie) => cookie.trim().startsWith('t5SessionKey='))
									.split('=')[1]
							)
						).key; //достает куки, зачем они нужны?
						const time = new Date().getTime().toString(); //делает время для запроса
						const playerId = player.data.playerId; //достает ID для запроса
						const host = window.location.hostname;
						const url = `https://${host}/api/?c=${contr}&a=${acti}&p${playerId}&t${time}`;
						const message1 =
							'{"controller": "' +
							contr +
							'","action": "' +
							acti +
							'","params": {"villageId": ' +
							iD +
							',"locationId": ' +
							locationId +
							',"buildingType": ' +
							buildingType +
							'},"clientId": "' +
							getClientId() +
							'","session": "' +
							session +
							'"}'; //делает строчку для запроса. До этого была функция, но она не успевала сделать строчку корректно

						request1 = new Request(url, {
							method: 'POST',
							body: message1,
							credentials: 'include',
						});

						console.log('запрос на стройку готов');

						//console.log(request);
						//console.log(spisokBuildingTime);
						console.log('запрос на заказ готов, отправляем его');
						//сам запрос на сервер
						fetch(request1)
							.then((response) => {
								console.log('запрос на постройку пошел');
								return response.json();
							})
							.then((jsonData) => {
								//console.log('запрос прошел, должно добавиться');
								//document.location.reload(true);
							});

						console.log('добавим ресиков?');
						console.log(resStartNow0);
						//код отправки ресов
						for (let z = 1; z < 2; z++) {
							if (resStartNow0 === true) {
								console.log('зашли в ресики');
								//подготовка первого запроса
								console.log(resStartNow0);
								//let iD = 538197976;//айди деревни, где будем строить.
								//let iDvillageDonor = 538165211;//айди деревни, откуда пойдут ресурсы на отстройку
								const contr = 'trade'; //"controller"
								const acti = 'checkTarget'; //"action"
								const destVillageId = 538197979; //деревня куда везем ресы02. bbbbbbb
								const destVillageName = '08. зззззз'; // "02. бббббб";//переделать на автоматическое выдергивание названия
								const sourceVillageId = 538165211; //деревня откуда везем ресы 02
								let session = JSON.parse(
									decodeURIComponent(
										document.cookie
											.split(';')
											.find((cookie) =>
												cookie.trim().startsWith('t5SessionKey=')
											)
											.split('=')[1]
									)
								).key; //достает куки, зачем они нужны?
								const time = new Date().getTime().toString(); //делает время для запроса
								const playerId = player.data.playerId; //достает ID для запроса
								const url = `https://${host}/api/?c=${contr}&a=${acti}&p${playerId}&t${time}`;
								let message =
									'{"controller": "' +
									contr +
									'","action": "' +
									acti +
									'","params": {"sourceVillageId": ' +
									sourceVillageId +
									',"destVillageId": ' +
									destVillageId +
									',"destVillageName": "' +
									destVillageName +
									'"},"session": "' +
									session +
									'"}';
								//console.log(message);
								const request = new Request(url, {
									method: 'POST',
									body: message,
									credentials: 'include',
								});
								//console.log(request);
								console.log('первый запрос готов');
								console.log(message);

								//подготовка второго запроса
								const time1 = new Date().getTime().toString(); //делает время для запроса
								const contr1 = 'trade'; //"controller"
								const acti1 = 'sendResources'; //"action"
								const url1 = `https://${host}/api/?c=${contr1}&a=${acti1}&p${playerId}&t${time1}`;
								//достаем значения ресурсов...
								let res1 = thisIsBuilding.upgradeCosts[1];
								let res2 = thisIsBuilding.upgradeCosts[2];
								let res3 = thisIsBuilding.upgradeCosts[3];
								let res4 = thisIsBuilding.upgradeCosts[4];
								let message1 =
									'{"controller": "' +
									contr1 +
									'","action": "' +
									acti1 +
									'","params": {"sourceVillageId": ' +
									sourceVillageId +
									',"resources": [0,' +
									res1 +
									',' +
									res2 +
									',' +
									res3 +
									',' +
									res4 +
									'],"destVillageId": ' +
									destVillageId +
									',"recurrences" : 1},"clientId": "' +
									getClientId() +
									'","session": "' +
									session +
									'"}';
								//console.log(message1);
								const request1 = new Request(url1, {
									method: 'POST',
									body: message1,
									credentials: 'include',
								});
								console.log('второй запрос готов');
								//console.log(request1);
								console.log(message1);
								
								fetch(request).then((response) => {
										console.log('вошли в первый запрос');
										return response.json();
									})
									.then((jsonData) => {
										console.log('ответ первого запроса получен');
										//console.log('конец постройки');
										//второй запрос
										fetch(request1)
											.then((response) => {
												console.log('вошли во второй запрос');
												return response.json();
											})
											.then((jsonData) => {
												console.log('второй запрос прошел');
											});
									});
							}
						}
						console.log('закончили с ресиками');
					}
				}
			}
		});
*/


		//Перебор деревень для автозавершения
		window.player.data.villages.forEach(function (village) {
			//Временные переменные
			var buildingQueue; //Информация по деревни
			var time; //Расчет времени
			var storage; //Данные из хранилища
			var building; //Конкретная очередь пострйки
			var type; //Тип пострйоки

			var letter; //Сообщение в телегу
			//Получаем информацию об текущих постройках
			buildingQueue = BuildingQueue.get(village.villageId);

			//Отсееваем мусор
			if (buildingQueue.data === undefined) {	return;	}
			if (buildingQueue.data.queues === undefined) {	return;	}
			//Перебор слотов построек (из-за Рима)
			for (var i = 1; i < 3; i++) {
				building = buildingQueue.data.queues[i][0];
				//Нет построек
				if (building === undefined) {	continue;	}
				//Тип постройки (Резиденция/Дворец/Сокровищница/Скр.Сокровищница)
				if (building.buildingType === '25') {	continue;	}
				if (building.buildingType === '26') {	continue;	}
				if (building.buildingType === '27') {	continue;	}
				if (building.buildingType === '45') {	continue;	}
				//Осталось больше 5 минут
				time = parseInt(Date.now().toString().slice(0, 10));
				if (building.finished > 299 + time) {	continue;	}
				//console.log('старт отправки сообщения?')

				//блок кода для автозавершения постройки
				let a = building.finished - time;
				if (a < 300) {
					//если меньше 5 минут осталось
					//готовим запрос на автозавершение постройки
					if (finishNow === true) {
						//закончить постройку сейчас
						let queueType; //для определения типа постройки
						let qwer = Number(building.buildingType); //тип постройки переводим в число
						if (qwer <= 4) {
							//если ресурсные поля (1-4), то 2 тип, центр - 1 тип
							queueType = 2;
						} else {
							queueType = 1;
						}
						const contr = 'premiumFeature'; //"controller"
						const acti = 'bookFeature'; //"action"
						const villageId1 = village.villageId;
						let session = JSON.parse(
							decodeURIComponent(
								document.cookie
									.split(';')
									.find((cookie) => cookie.trim().startsWith('t5SessionKey='))
									.split('=')[1]
							)
						).key; //достает куки, зачем они нужны?
						const playerId = player.data.playerId; //достает ID для запроса
						const time = new Date().getTime().toString(); //делает время для   запроса
						console.log(time);
						console.log(building.finished);
						const url = `https://ru1.kingdoms.com/api/?c=${contr}&a=${acti}&p${playerId}&t${time}`;
						const prise = 0;
						const message =
							'{"controller": "' +
							contr +
							'","action": "' +
							acti +
							'","params": {"featureName":"finishNow","params": {"prise": ' +
							prise +
							',"queueType": "' +
							queueType +
							'","villageId": ' +
							villageId1 +
							'}},"clientId": "' +
							getClientId() +
							'","session": "' +
							session +
							'"}'; //делает строчку для запроса. До этого была функция, но она не успевала сделать строчку корректно
						const request = new Request(url, {
							method: 'POST',
							body: message,
							mode: 'cors',
							credentials: 'include',
						});
						console.log('запрос на автодостройку готов!');

						//console.log('подошли к запросу...')
						
						//Проверим, а был ли запрос уже отправлен?
						storage = localStorage.getItem(village.villageId + '-' + i);
						if (storage ===	building.buildingType +	'/' +	i +	'/' +	building.timeStart +'//' +	'true') { continue;	}
						//Запоминаем отправку сообщения
						localStorage.setItem(	village.villageId + '-' + i,building.buildingType +'/' +i +'/' +building.timeStart +	'//' +	'true');
						
						
						console.log('запроса не было, Отправляем')
						fetch(request)
							.then((response) => {
								//console.log('запрос на автодостройку отправлен');
								return response.json();
							})
							.then((jsonData) => {});
					}
				}

				//Общее время постройки меньше 5 минут (зачем уведомление ???) переделал на 20 секунд, иногда все таки надо
				time = parseInt(building.finished) - parseInt(building.timeStart);
				if (time < 10) {
					continue;
				}

				//Проверяем есть ли отправленное сообщение
				storage = localStorage.getItem(village.villageId + '-' + i);
				if (storage ===	building.buildingType +	'/' +	i +	'/' +	building.timeStart +'/' +	'true') { continue;	}
				//Запоминаем отправку сообщения
				localStorage.setItem(	village.villageId + '-' + i,building.buildingType +'/' +i +'/' +building.timeStart +	'/' +	'true');
				//Отправляем в Telegram
				type = never_building[building.buildingType];
				letter ='\ud83c\udfd7 ' + village.name + ', постройка "' + type + '" .';
				Never_Telegram(letter);
			}
		});

		//Всё прошло удачно
		never_travian.status = true;
		never_travian.eCode = '';

		//Ошибка/исключение
	} catch (e) {
		never_travian.status = false;
		never_travian.eCode = 'Ошибка ' + e.name + ':' + e.message + '\n' + e.stack;
		console.log(never_travian);
	}

	return;
}





/*----- BuildingCheckLevel(): Перебор уровней -----*/

function BuildingCheckLevel(spisok, buildingTypeF, level, villageId, name, locationId0, status) {
	if (status === false) {
		//console.log(buildingTypeF);
		//console.log(spisok);
		//let locationId;
		if (locationId0 === 0) {
				let spisokBuilding = [];
				for (let n = 0; n < spisok.length; n++) {
					let qwer = spisok[n];
					//готовим список построек рсурсных(если рсики, то нам нужны самык быстрые)
					if (qwer.buildingType === buildingTypeF) {
						//console.log(qwer)
						spisokBuilding.push(qwer);
					}
				}
				let spisokBuildingTime = spisokBuilding.sort(
					(a, b) => a.upgradeTime - b.upgradeTime
				); //сортировка по времени строительства(для выбора самой быстрой)
				let qwer = spisokBuildingTime[0];
				let locationId = qwer.locationId;
				//console.log('нашли ' + never_building[buildingTypeF] + ' , проверяем уровень');
				if (qwer.lvl < level) {
					//если уровень меньше 5,
					nameNow = window.Village.get(villageId).data.name
					console.log('заказываем: ' + never_building[buildingTypeF] + ', уровень: '+ level + 'деревня: '+ nameNow);
					BuildingNowCentr(qwer, villageId, name, locationId, buildingTypeF);
					console.log('заказываем: ' + never_building[buildingTypeF] + ', уровень: '+ level);
					status = true;
					return status;
				}
				return status;
		} else {
			for (let n = 0; n < spisok.length; n++) {
				let qwer = spisok[n];
				//готовим список построек рсурсных(если рсики, то нам нужны самык быстрые)
				if (qwer.buildingType === buildingTypeF) {
					//ищем
					if (qwer.lvl < level) {
						//если уровень меньше нужного, то
						BuildingNowCentr(qwer,villageId,name,locationId0,buildingTypeF);
						console.log('заказываем: ' + never_building[buildingTypeF] + ', уровень: '+ level);
						status = true;
						return status;
					}
					return status;
				}
			}
		}
		let qwer = spisok[1];
		console.log('Слот с ' + never_building[buildingTypeF] + '   не нашли совсем');
		BuildingNowCentr(qwer, villageId, name, locationId0, buildingTypeF);
		console.log('заказываем постройку в новый слот!' + 'заказываем: ' + never_building[buildingTypeF] + ', уровень: '+ level);
		status = true;
		return status;
	}
}

/*----- BuildingCheckLevel(): Отправка запроса на постройку в центре деревни -----*/


/*----- BuildingNowCentr(): Отправка запроса на постройку в центре деревни -----*/
function BuildingNowCentr( thisIsBuilding, villageId,	name,	locationId0, buildingTypeF ) {
	//проверяем, сколько ресов сейчас в деревне есть
	let zaprosResNowIn = window.Village.get(villageId).data;
	let resNow1 = zaprosResNowIn.storage[1];
	let resNow2 = zaprosResNowIn.storage[2];
	let resNow3 = zaprosResNowIn.storage[3];
	let resNow4 = zaprosResNowIn.storage[4];
	let res1;
	let res2;
	let res3;
	let res4;
	if (thisIsBuilding === undefined) {
		console.log('thisIsBuilding не определен')
		res1 = 0;
		res2 = 0;
		res3 = 0;
		res4 = 0;
	}else{
		res1 = thisIsBuilding.upgradeCosts[1];
		res2 = thisIsBuilding.upgradeCosts[2];
		res3 = thisIsBuilding.upgradeCosts[3];
		res4 = thisIsBuilding.upgradeCosts[4];
	}
	if(res1<=resNow1){//проверяем, сколько ресов надо, и сравниваем с тем, сколько их есть
		if(res2<=resNow2){
			if(res3<=resNow3){
				if(res4<=resNow4){
					//получилось, что ресов хватает, поэтому делаем запрос на постройку
					const contr = 'building'; //"controller"
					const acti = 'upgrade'; //"action"
					const iD = villageId; //айди деревни, где будем строить.
					let locationId = locationId0;
					const buildingType = buildingTypeF;
					const session = JSON.parse(decodeURIComponent(document.cookie.split(';').find((cookie) => cookie.trim().startsWith('t5SessionKey=')).split('=')[1])).key; //достает куки, зачем они нужны?
					const time = new Date().getTime().toString(); //делает время для запроса
					const playerId = player.data.playerId; //достает ID для запроса
					const host = window.location.hostname;
					const url = `https://${host}/api/?c=${contr}&a=${acti}&p${playerId}&t${time}`;
					const message =	'{"controller": "' + contr + '","action": "' + acti + '","params": {"villageId": ' + iD +',"locationId": ' +	locationId +',"buildingType": ' +	buildingType +'},"clientId": "' +getClientId() +'","session": "' +session +'"}'; //делает строчку для запроса. До этого была функция, но она не успевала сделать строчку корректно
					request = new Request(url, {
						method: 'POST',
						body: message,
						credentials: 'include',
					});
					
					//сам запрос на сервер
					fetch(request)
						.then((response) => {
							console.log('запрос на постройку пошел');
							return response.json();
						})
						.then((jsonData) => {
							console.log('запрос прошел, должно добавиться');
							//document.location.reload(true);
						});
				}
			}
		}
	}
	
	// далее код, когда ресов не хватает - надо сделать запрос на пересылку реса
	let resStartNow = true;//делать запрос на пересылку реса?
	//код отправки ресов
	if (resStartNow === true) {
		//подготовка первого запроса
		const contr0 = 'trade'; //"controller"
		const acti0 = 'checkTarget'; //"action"
		const destVillageId = villageId; //деревня куда везем ресы
		const destVillageName = name; //деревня куда везем ресы
		const sourceVillageId = 538132443; //деревня откуда везем ресы 02
		let session0 = JSON.parse(decodeURIComponent(document.cookie.split(';').find((cookie) => cookie.trim().startsWith('t5SessionKey=')).split('=')[1])).key; //достает куки, зачем они нужны?
		const time0 = new Date().getTime().toString(); //делает время для запроса
		const playerId = player.data.playerId; //достает ID для запроса
		const host = window.location.hostname;
		const url = `https://${host}/api/?c=${contr0}&a=${acti0}&p${playerId}&t${time0}`;
		let message ='{"controller": "' +	contr0 +'","action": "' +	acti0 +	'","params":{"sourceVillageId": ' +sourceVillageId +	',"destVillageId": ' +destVillageId +	',"destVillageName": "' +destVillageName +'"},"session": "' +session0 +'"}';
		
		const request0 = new Request(url, {
			method: 'POST',
			body: message,
			credentials: 'include',
		});
		
		//подготовка второго запроса
		const time1 = new Date().getTime().toString(); //делает время для запроса
		const contr1 = 'trade'; //"controller"
		const acti1 = 'sendResources'; //"action"
		const url1 = `https://${host}/api/?c=${contr1}&a=${acti1}&p${playerId}&t${time1}`;
		
		
		//достаем значения ресурсов...Их достали в начале для отсекания ненужных запросов при  недостаточном количестве ресов в данный момент
		let message1 =	'{"controller": "' +contr1 +'","action": "' +	acti1 +	'","params":{"sourceVillageId": ' +	sourceVillageId +	',"resources": [0,' +	res1 +	',' +	res2 +',' +	res3 +	',' +	res4 +	'],"destVillageId": ' +	destVillageId +	',"recurrences" : 1},"clientId": "' +	getClientId() +	'","session": "' +	session0 +	'"}';
		const request1 = new Request(url1, {
			method: 'POST',
			body: message1,
			credentials: 'include',
		});
		
		//Проверяем есть ли отправленное сообщение
		storage1 = localStorage.getItem(villageId);
		//проверяем тип постройки, локацию постройки, уровень постройки
		if (storage1 === buildingTypeF + '/' + locationId0 + '/' + thisIsBuilding.lvl + '/' +	'true' ) {
			console.log('ахтунг, ресики уже должны ехать!');
		} else {
			fetch(request0)
				.then((response) => {
					return response.json();
				})
				.then((jsonData) => {
					fetch(request1)
						.then((response) => {
							return response.json();
						})
						.then((jsonData) => {
							console.log('второй запрос прошел');
						});
				});
		}
		//Запоминаем отправку сообщения
		localStorage.setItem(villageId,	buildingTypeF +	'/' +	locationId0 +	'/' +	thisIsBuilding.lvl +	'/' + 'true');
	}
}
/*_____ Конец: Отправка запроса на постройку в центре деревни. _____*/

/*----- Never_WebSocket(): Анализ сообщений WebSocket -----*/
function Never_WebSocket(letter) {
	//Отлов ошибок/исключений
	try {
		var message = {}; //Отфильтрованное сообщение

		if (letter.length < 8) {
			return;
		}
		letter = letter.replace(/^[0-9]+/, '');
		letter = JSON.parse(letter);

		//Что-то непонятное
		if (typeof letter[0] !== 'string') {
			return;
		}

		//Тип сообщения
		message.type = letter[0];

		//Свойства сообщения id / время
		message.time = parseInt(String(letter[1].ts).slice(0, 10));

		letter = letter[1];

		//Что-то по чату
		if (message.type === 'chatCache') {
			return;
		}

		//Вроде уведомление что кто-то онлайн
		if (message.type === 'friendCache') {
			return;
		}

		//Сообщение по аккаунту
		if (message.type === 'message') {
			//Отсееваем мусор
			if (letter.cache === undefined) {
				return;
			}
			if (letter.cache[0] === undefined) {
				return;
			}

			//Атака (начало/завершение)
			if (letter.cache[0].name.indexOf('Collection:Troops:moving:') === 0) {
				message.name = 'Troops:moving';
				message.data = letter.cache[0].data;

				//Отправка сообщения об атаке
				if (never_message.attackVillage) Never_AttackVillage(message);
			}
		}

		//Всё прошло удачно
		never_travian.status = true;
		never_travian.eCode = '';

		//Ошибка/исключение
	} catch (e) {
		never_travian.status = false;
		never_travian.eCode = 'Ошибка ' + e.name + ':' + e.message + '\n' + e.stack;
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
	if (message.data.operation === undefined) {
		return;
	}
	//console.log(message);
	//Есл не прибывающие (пропускаем)
	message.operation = message.data.operation;
	console.log(message);
	if (message.operation !== 2) {
		return;
	}

	//Отсееваем мусор
	if (message.data.cache === undefined) {
		return;
	}
	if (message.data.cache[0] === undefined) {
		return;
	}
	if (message.data.cache[0].data === undefined) {
		return;
	}

	//Ищем тип прибывающих
	message.data = message.data.cache[0].data;
	if (message.data.movement === undefined) {return;}
	if (message.data.movement.movementType === undefined) {return;}
	message.movementType = message.data.movement.movementType;

	//Не атакующий тип прибытия войска
	if (never_movement[message.movementType] === undefined) {
		return;
	}

	//Проверка на спам
	message.spam = false;
	for (var i = 1; i < 12; i++) {
		if (message.data.units[i] === undefined) {
			continue;
		}
		if (message.data.units[i] != -1) {
			message.spam = true;
		}
	}
	if (message.spam) {
		return;
	}

	//Отправляем сообщение
	time = new Date((parseInt(message.data.movement.timeFinish) - parseInt(message.time)) * 1000);
	time =time.getUTCHours() +':' +time.getUTCMinutes() +':' +time.getUTCSeconds();

	letter ='\u2694\ufe0f ' + Never_getVillageName(message.data.villageIdLocation);
	letter = letter + ', угроза "' + never_movement[message.movementType] + '"';
	letter = letter + ', от "' + message.data.playerName + '" через ' + time + '!';
	Never_Telegram(letter);
}
/*_____ Конец: Атака на деревню _____*/

/*----- Начало: Отправка сообщение в Telegramm -----*/
function Never_Telegram(message) {
	//Исходные переменные
	var xhttp = new XMLHttpRequest();
	var url =
		'https://api.telegram.org/bot' +
		telegram_token +
		'/sendMessage?chat_id=' +
		telegram_chat;
	var text = '&text=' + message;
	var opt = '';
	//opt = '&disable_notification=true';

	//Отправка сообщения
	xhttp.open('Get', url + '&' + text + opt, true);
	xhttp.send();
}
/*_____ Конец: Отправка сообщение в Telegramm _____*/

/*----- Never_getVillageName(): Получить название деревни. -----*/
function Never_getVillageName(id) {
	var villageName = '---';
	//Перебор деревень
	window.player.data.villages.forEach(function (village) {
		if (village.villageId == id) {
			villageName = village.name;
		}
	});
	return villageName;
}
/*_____ Конец: Получить название деревни. _____*/

/*----- Never_Player(): Информация об игроке. -----*/
function Never_Player() {
	//Информация об игроке
	never_travian.server = window.location.hostname;
	never_travian.playerName = window.player.data.name;
	never_travian.playerId = window.player.data.playerId;
}
/*_____ Конец: Информация об игроке. _____*/

//Разные табличные данные
const never_building = {
	1: 'Лесопилка',
	2: 'Глиняный карьер',
	3: 'Железный рудник',
	4: 'Ферма',
	5: 'Пилорама',
	6: 'Кирпичный завод',
	7: 'Литейный завод',
	8: 'Мельница',
	9: 'Пекарня',
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
	49: 'ID = 49',
};

const never_movement = {
	3: 'Атака',
	4: 'Набег',
	47: 'Осада',
};
