console.log("start ЧВР + Оазисы");

//Запуск каждую 1 сек.
var never_IntervalID = window.setInterval(Never_MainScript, 1000);

//let coord0 = 538132443; //536887296;//воображаемый центр(или ID нашей деревни) [0/0 если для всего мира]
//let z = 10; //условный радиус(половина стороны квадрата) [60 - если для всего мира]

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
		newElem.innerHTML = '<span class = "text"> &#8801 </span>'//название кнопки на экране
		userArea.appendChild(newElem);//добавляет в конец списка элемент, который описали выше.

		//для вкладки с постройками
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
			46: 'Целебный шатёр',
			47: 'ID = 47',
			48: 'ID = 48',
			49: 'ID = 49'
		};


		const spisokBuilding = [];
		const spisokBuilding1 = [];
		window.player.data.villages.forEach(village => {
			qwer = window.Building.getCollection(village.villageId).data;
			for (let n = 0; n < qwer.length; n++) {
				let qwer1 = [];
				qwer1 = qwer[n];
				spisokBuilding.push(qwer1);
				name1 = window.Village.get(village.villageId).data.name;
				spisokBuilding1.push({name111: name1});
				//console.log(spisokBuilding.name111);
				//console.log(spisokBuilding);
			}
		});
		
		//шапка таблицы построек
		let countVillageInTableBuilding = '';//переменная для добавления в HTML 
		countVillageInTableBuilding = '<tr><td>Деревня</td>																<td>тип постройки</td>																		<td>Уровень</td>																				<td><i class="unit_wood_small_illu"></i></td>												<td><i class="unit_clay_small_illu"></i></td>													<td><i class="unit_iron_small_illu"></i></td>												<td><i class="unit_crop_small_illu"></i></td>													<td><i class="symbol_clock_small_flat_black duration"></i></td>													</tr>';//переменная для добавления в HTML заголовка
		//наполнение таблицы построек
		for (let i = 0; i < spisokBuilding.length; i++) {
			countVillageInTableBuilding += '<tr><td>' +spisokBuilding1[i].name111 +'</td>					<td>' + never_building[spisokBuilding[i].data.buildingType] +'</td>						<td>' + spisokBuilding[i].data.lvl +'</td>													<td>' + spisokBuilding[i].data.upgradeCosts[1] +'</td>									<td>' + spisokBuilding[i].data.upgradeCosts[2] +'</td>										<td>' + spisokBuilding[i].data.upgradeCosts[3] +'</td>									<td>' + spisokBuilding[i].data.upgradeCosts[4] +'</td>										<td>' + spisokBuilding[i].data.upgradeTime +'</td>										</tr>';//записывает строчку для каждого оазиса
			
		}
		
		
		//для вкладки ЧВР
		let countVillageInTable = '';//переменная для добавления в HTML выработки ресурсов деревень
		let sumCHVR = 0;//переменная для подсчета ЧВР
		let sumCHVRRes = 0;//переменная для подсчета сундука ресурсов
		let sumRes1 = 0;//переменная для подсчета дерева
		let sumRes2 = 0;//переменная для подсчета глины
		let sumRes3 = 0;//переменная для подсчета железа
		
		
		window.player.data.villages.forEach(village => {
			let x = village.name;
			let x1 = parseInt(village.production[1], 10);//ищет выработку дерева
			let x2 = parseInt(village.production[2], 10);//ищет выработку глины
			let x3 = parseInt(village.production[3], 10);//ищет выработку железа
			let x4 = parseInt(village.production[4], 10);//ищет выработку кропа
			
			countVillageInTable += '<tr><td>'+ '<a clickable="setVillage(village.villageId)" class="truncated clickable">'+ x +'</a>'+ '</td><td>' + x1 +'</td><td>' + x2 +'</td><td>' + x3 +'</td><td>' + x4 +'</td></tr>'//записывает строчку для каждой деревни
			sumCHVR += x1 + x2 + x3 + x4;//считает выработку ЧВР для каждой деревни
			sumCHVRRes += x1 + x2 + x3;//считает выработку РЕСУРСОВ ВСЕХ для каждой деревни
			sumRes1 += x1;//всего дерева
			sumRes2 += x2;//всего глины
			sumRes3 += x3;// всего железа
		});
		
				let countVillageInTable2 = '<tr><td>ЧВР</td><td>' + sumCHVR + '</td></tr><tr><td>Сундук ресурсов</td><td>Дерево</td><td>Глина</td><td>Железо</td><td>Всего</td></tr>' + '<tr><td>3%</td><td>' + Math.ceil(sumRes1*24*0.03) + '</td><td>' + Math.ceil(sumRes2*24*0.03) + '</td><td>' + Math.ceil(sumRes3*24*0.04) + '</td><td>' + Math.ceil(sumCHVRRes*24*0.03) + '</td></tr>' + '<tr><td>4%</td><td>' + Math.ceil(sumRes1*24*0.04) + '</td><td>' + Math.ceil(sumRes2*24*0.04) + '</td><td>' + Math.ceil(sumRes3*24*0.04) + '</td><td>' + Math.ceil(sumCHVRRes*24*0.04) + '</td></tr>' + '<tr><td>5%</td><td>' + Math.ceil(sumRes1*24*0.05) + '</td><td>' + Math.ceil(sumRes2*24*0.05) + '</td><td>' + Math.ceil(sumRes3*24*0.05) + '</td><td>' + Math.ceil(sumCHVRRes*24*0.05) + '</td></tr>';//Записываем в табличку ЧВР и сундук ресурсов
	
	
	
		// делаем подобно чвр список для оазисов
		
		/*---- расчеты для оазисов! ----*/
	
		// попробуем сделать по необходимому квадрату поиска
		let spisokID = [];//результат пересечения полного и нужного списка
		let spisokIDD = [];//результат пересечения полного и нужного списка + дистанция
		let spisokOasisUnits = [];//список для вывода в таблицу
		let spisokOasisUnitsPr = [];// промежуточный список для сортировки записей
		let spisokIDFull = [];//полный список
		let spisokIDNull = [];//список ID вокруг нужной дерки
		let coord1 = 538132443; //536887296;// ID нашей деревни 
		let coord0 = 536887296; //[0/0 для всего мира]
		let coordz = 60; //условный радиус(половина стороны квадрата) [60 - если для всего мира]
		let coordz1 = 16;//радиус поиска вокруг нужной дерки
		let coord1x = window.Village.get(coord1).data.coordinates.x;
		let coord1y = window.Village.get(coord1).data.coordinates.y;
		
		//функция радиуса
		function isInsideCircle(coordx, coordy, radius) {
		    return (coordx * coordx + coordy * coordy) <= radius * radius;
		}
		
		//для полного списка ID нашего мира
		for (let x = -coordz; x < coordz; x++){
		    for (let y = -coordz; y < coordz; y++){
		    	if (isInsideCircle(x, y, coordz)) {
	            c = coord0 + x*32768 + y;
	            spisokIDFull.push({
	            	ID: c,
	            	coordx: y,
	            	coordy: x,
	            	dist:0,
	            	});
	            }
		    }
		}
		
		//для списка ID вокруг деревни
		for (let coordx = -coordz1; coordx < coordz1; coordx++){
		    for (let coordy = -coordz1; coordy < coordz1; coordy++){
		    	if (isInsideCircle(coordx, coordy, coordz1)) {
	            c = coord1 + coordx*32768 + coordy;
	            spisokIDNull.push({
	            	ID: c,
	            	coordx: coordy,
	            	coordy: coordx,
	            	dist:0,
	            	});
	            }
		    }
		}
	
		for (var i = 0; i < spisokIDFull.length; i++) {
	        var item1 = spisokIDFull[i],
	            found = false;
	        for (var j = 0; j < spisokIDNull.length && !found; j++) {
	            found = item1.ID === spisokIDNull[j].ID;
	        }
	        if (found === !!true) { // isUnion is coerced to boolean
	            spisokID.push(item1);
	        }
	    }
	
		for (let i = 0; i < spisokID.length; i++) {
				let deltaCoordx = spisokID[i].coordx - coord1x;
				let deltaCoordy = spisokID[i].coordy - coord1y;
				c = spisokID[i].ID;
				coordx = spisokID[i].coordx;
				coordy = spisokID[i].coordy;
				//вычисляем гиппотинузу
				let gippotinuza = Math. sqrt (deltaCoordx * deltaCoordx + deltaCoordy * deltaCoordy);
				//console.log(gippotinuza);
				let d = gippotinuza.toFixed(2)
				spisokIDD.push({
						ID: c,
		            	coordx: coordx,
		            	coordy: coordy,
		            	dist: d,
		        });
		    }
	
		//для создания списка всех оазисов, здесь отсеиваем ненужные точки и деревни, оставляем только оазисы в spisokOasisFull
		for (let i = 0; i < spisokIDD.length; i++) {
			qwert = window.MapDetails.get(spisokIDD[i].ID).data.isOasis;//клетка является оазисом?
		    if (qwert == true) {//да, является
		        qwert1 = window.MapDetails.get(spisokIDD[i].ID).filteredTroops.length//в оазисе есть звери?
				if (qwert1 !== 0) {//да, звери есть, тогда обработаем оазис
					//запишем прошлые переменные для добавления в новый массив
					ID = spisokIDD[i].ID;
					coordx = spisokIDD[i].coordx;
					coordy = spisokIDD[i].coordy;
					dist = spisokIDD[i].dist;
					name = window.Village.get(spisokIDD[i].ID).data.name;
					bonusz = window.MapDetails.get(spisokIDD[i].ID).data.oasisBonus;//для значков бонуса в таблице
					let bonuszz = [];//промежуточный массив. мне так проще отследить код
					//перебираем значения бонуса, если что то есть, ставим значек этого чего то
					if (bonusz[1] == 25){//дерево
						bonuszz[1] = '<i class="unit_wood_small_illu"></i>';
					}
					if (bonusz[2] == 25){//глина
						bonuszz[2] = '<i class="unit_clay_small_illu"></i>';
					}
					if (bonusz[3] == 25){//железо
						bonuszz[3] = '<i class="unit_iron_small_illu"></i>';
					}
					if (bonusz[4] == 25){//кроп 25%
						bonuszz[4] = '<i class="unit_crop_small_illu"></i>';
					}
					if (bonusz[4] == 50){//кроп бывает еще и 50%
						bonuszz[4] = '<i class="unit_crop_small_illu"></i><i class="unit_crop_small_illu"></i>';
					}
					bonus = bonuszz.join('');//записываем значки в строку и закидываем в массив данных
					//const result = myList.join('');
					//console.log(bonus);
					//bonus = bonusz;
					
					let units = [];//объявим список для добавления
					for (let n = 1; n < 11; n++){//проверка наличия каждого зверя в оазисе
						qwer = window.MapDetails.get(spisokIDD[i].ID).data.troops.units[n];
						if (qwer !== undefined) {
							units[n] = Number(qwer);//если зверь есть, то добавим его, запишем числом
						} else {
							units[n] = 0;//если зверя нет, то ставим 0
						}
					}
					const unitsTotal = units.reduce((partialSum, a) => partialSum + a, 0);
					spisokOasisUnitsPr.push({
						ID,
		            	coordx,
		            	coordy,
		            	dist,
		            	units,
		            	unitsTotal,
		            	name,
		            	bonus,
		        	});
				}
		    }
		}
			
		spisokOasisUnits = spisokOasisUnitsPr.sort((a, b) => a.dist - b.dist);
		
		let countVillageInTableOasis = '';//переменная для добавления в HTML 
		countVillageInTableOasis = '<tr><td>Оазис</td>																					<td>Дист</td>																				<td>Всего</td>																					<td>Тип</td>																				<td><i class="unitSmall nature unitType1"></i></td>												<td><i class="unitSmall nature unitType2"></i></td>											<td><i class="unitSmall nature unitType3"></i></td>												<td><i class="unitSmall nature unitType4"></i></td>											<td><i class="unitSmall nature unitType5"></i></td>												<td><i class="unitSmall nature unitType6"></i></td>											<td><i class="unitSmall nature unitType7"></i></td>												<td><i class="unitSmall nature unitType8"></i></td>											<td><i class="unitSmall nature unitType9"></i></td>												<td><i class="unitSmall nature unitType10"></i></td>										</tr>';//переменная для добавления в HTML заголовка
	
		
		for (let i = 0; i < spisokOasisUnits.length; i++) {
			countVillageInTableOasis += '<tr><td><a href="https://ru1.kingdoms.com/#/page:map/villId:'+ coord1 + '/subtab:Outgoing/cellId:' + spisokOasisUnits[i].ID + '/window:mapCellDetails">('+ spisokOasisUnits[i].coordx + '|' +spisokOasisUnits[i].coordy +')</a></td>							<td>' + spisokOasisUnits[i].dist +'</td>													<td>' + spisokOasisUnits[i].unitsTotal +'</td>											<td>' + spisokOasisUnits[i].bonus +'</td>													<td>' + spisokOasisUnits[i].units[1] +'</td>												<td>' + spisokOasisUnits[i].units[2] +'</td>											<td>' + spisokOasisUnits[i].units[3] +'</td>												<td>' + spisokOasisUnits[i].units[4] +'</td>											<td>' + spisokOasisUnits[i].units[5] +'</td>												<td>' + spisokOasisUnits[i].units[6] +'</td>											<td>' + spisokOasisUnits[i].units[7] +'</td>												<td>' + spisokOasisUnits[i].units[8] +'</td>											<td>' + spisokOasisUnits[i].units[9] +'</td>												<td>' + spisokOasisUnits[i].units[10] +'</td>												</tr>'//записывает строчку для каждого оазиса
		}
		
		
		
		//делаем вкладку с ЕК
		
		let countVillageInTableEK = '';//переменная для добавления в HTML выработки ЕК деревень
		let sumEKZ = 0;//переменная для подсчета ЧВР
			
		window.player.data.villages.forEach(village => {
			let x = village.name;
			let x1 = parseInt(village.culturePointProduction, 10);//ищет выработку ЕК
			
			countVillageInTableEK += '<tr><td>'+ x +'</td><td>' + x1 +'</td></tr>'//записывает строчку для каждой деревни
			sumEKZ += x1;//всего ЕК
		});
		
		countVillageInTableEK += '<tr><td>Всего ЕК</td><td>' + sumEKZ +'</td></tr>'
		
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
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="3">Оазисы</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="4">Палатки</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="5">Постройки</li>';
		str +=			'<span><button id="close222" class="innerText">Х</button></span>';
		str +=		'</ul>';
		str += '<!--  Контейнер с блоками, которые содержат контент вкладок   -->';
		str +=		'<ul class="tab-content">';
		str +=			'<li class="tab-content__item js-tab-content active" data-tab="1">';
		str += 'Выработка деревень по ресурсам'
		str +=				'<table>'

		str += countVillageInTable;
		str += countVillageInTable2;
		str +=				'</table>'
		str +=			'</li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="2">найти сколько сейчас набрано ЕК/сколько надо(числами), вывести список деревень, напротив каждой 2 галочки(чтоб нонстоп праздник/торжество) и время на остаток до слота ЕК.  Аня предложила, чтоб для дерки до наса 500 гнать  ****сходу вспоминается только домики на город) какие домики, до какого лелва и сколько это будет в ресах и по времени при текущем чвр**** решительно непонятно, как это надо оформить...  Контент в экселе <table> '+ countVillageInTableEK + '</table></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="3">';
		str +=				'<table>'
		str += countVillageInTableOasis;
		str +=				'</table>'
		
		str +=			'</li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="4">Здесь контент про Палатки. хз как к ним подступиться...'

		str +=			'</li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="5">Здесь контент про Деревни'
		str += '<table>' + countVillageInTableBuilding + '</table>';
		str +=			'</li>';
		str +=		'</ul>';
		str += '</div>';
		str += '';
		str += '';
		str += '';
		str += '';
		
		dialog.innerHTML = str;//содержимое селектора диалог
		console.log("придали ей содержимое");
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
   
	
    // скрываем окно, выводит кнопочку "закрыть"
    	document.querySelector('#close222').onclick = function () {
	   	dialog.close();
	   	console.log("закрыли таблицу")
	   	dialog.remove();//занесли селектор диалог в конец HTML кода.
		console.log("удалили таблицу")
		NeverovButton.remove(); 
    	}
	
}