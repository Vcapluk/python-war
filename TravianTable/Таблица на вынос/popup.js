console.log("start ЧВР + Оазисы");

//Запуск каждую 1 сек.
var never_IntervalID = window.setInterval(Never_MainScript, 1000);

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
			countVillageInTable += '<tr><td>'+ x + '</td><td>' + x1 +'</td><td>' + x2 +'</td><td>' + x3 +'</td><td>' + x4 +'</td></tr>'//записывает строчку для каждой деревни
			sumCHVR += x1 + x2 + x3 + x4;//считает выработку ЧВР для каждой деревни
			sumCHVRRes += x1 + x2 + x3;//считает выработку РЕСУРСОВ ВСЕХ для каждой деревни
			sumRes1 += x1;//всего дерева
			sumRes2 += x2;//всего глины
			sumRes3 += x3;// всего железа
		});
		
		let countVillageInTable2 = '<tr><td>ЧВР</td><td>' + sumCHVR + '</td></tr><tr><td>Сундук ресурсов</td><td>Дерево</td><td>Глина</td><td>Железо</td><td>Всего</td></tr>' + '<tr><td>3%</td><td>' + Math.ceil(sumRes1*24*0.03) + '</td><td>' + Math.ceil(sumRes2*24*0.03) + '</td><td>' + Math.ceil(sumRes3*24*0.04) + '</td><td>' + Math.ceil(sumCHVRRes*24*0.03) + '</td></tr>' + '<tr><td>4%</td><td>' + Math.ceil(sumRes1*24*0.04) + '</td><td>' + Math.ceil(sumRes2*24*0.04) + '</td><td>' + Math.ceil(sumRes3*24*0.04) + '</td><td>' + Math.ceil(sumCHVRRes*24*0.04) + '</td></tr>' + '<tr><td>5%</td><td>' + Math.ceil(sumRes1*24*0.05) + '</td><td>' + Math.ceil(sumRes2*24*0.05) + '</td><td>' + Math.ceil(sumRes3*24*0.05) + '</td><td>' + Math.ceil(sumCHVRRes*24*0.05) + '</td></tr>';//Записываем в табличку ЧВР и сундук ресурсов
	
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
		str +=			'<span><button id="close222" class="innerText">Х</button></span>';
		str +=		'</ul>';
		str +=		'<ul class="tab-header">';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="11">1</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="12">2</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="13">3</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="14">4</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="15">5</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="16">6</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="17">7</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="18">8</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="19">9</li>';
		str +=			'<li class="tab-header__item js-tab-trigger" data-tab="20">10</li>';
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
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="2">ЕК сейчас равно:<span id="testDataEK"></span>  найти сколько сейчас набрано ЕК/сколько надо(числами), вывести список деревень, напротив каждой 2 галочки(чтоб нонстоп праздник/торжество) и время на остаток до слота ЕК.  Аня предложила, чтоб для дерки до наса 500 гнать  ****сходу вспоминается только домики на город) какие домики, до какого лелва и сколько это будет в ресах и по времени при текущем чвр**** решительно непонятно, как это надо оформить...  Контент в экселе </li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="3">Здесь контент оазисам Палатки будут в 4 вкладке</li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="4">Здесь контент про Палатки. хз как к ним подступиться...</span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="11"><span id="testDataVT1"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="12"><span id="testDataVT2"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="13"><span id="testDataVT3"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="14"><span id="testDataVT4"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="15"><span id="testDataVT5"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="16"><span id="testDataVT6"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="17"><span id="testDataVT7"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="18"><span id="testDataVT8"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="19"><span id="testDataVT9"></span></li>';
		str +=			 '<li class="tab-content__item js-tab-content" data-tab="20"><span id="testDataVT10"></span></li>';
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
	
	
		/*---- расчеты для оазисов! ----*/
	

	//добавляем контент на Оазисы
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
	
	// попробуем сделать по необходимому квадрату поиска
	let spisokID = [];
	let coord0 = 538132443;//воображаемый центр(или ID нашей деревни) [0/0 если для всего мира]
	let z = 8; //условный радиус(половина стороны квадрата) [60 - если для всего мира]
	let coorda = coord0-z*32768-z;// начало от -60/-60           60*32768
	let coordz = coord0+z*32768+z;// конец до 60/60              60*32768
	
	for (let x = 0; x < 2*z; x++){
	    c = coorda + x*32768;//задаем строку по координате х
	    for (let y = 0; y < 2*z; y++){
	        c1 = c + y;//задаем строку по координате у
	        spisokID.push(c1);
	    }
	}
	
	
	//для выбора зверя	
	const oasis_date  = {
		1:  'Мышка',
		2:  'Паук',
		3:  'Змея',
		4:  'Летучая мышь',
		5:  'Кабан',
		6:  'Волк',
		7:  'Медведь',
		8:  'Крокодил',
		9:  'Тигр',
		10: 'Слон',
	};
	
				
	let spisokOasisFull = [];//список всех оазисов
	let spisokOasisUnits1 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits2 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits3 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits4 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits5 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits6 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits7 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits8 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits9 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnits10 = [];//список оазисов где есть определенные звери, но не только они.
	let spisokOasisUnitsSolo = [];// список оазисов где есть только определенные(чистые) звери.

	//списки промежуточные, для каждого животного
	let spisokVTablet1 = [];
	let spisokVTablet2 = [];
	let spisokVTablet3 = [];
	let spisokVTablet4 = [];
	let spisokVTablet5 = [];
	let spisokVTablet6 = [];
	let spisokVTablet7 = [];
	let spisokVTablet8 = [];
	let spisokVTablet9 = [];
	let spisokVTablet10 = [];
	
	
	//для создания списка всех оазисов, здесь отсеиваем ненужные точки и деревни, оставляем только оазисы в spisokOasisFull
	for (let i = 0; i < spisokID.length; i++) {
	    qwert = window.MapDetails.get(spisokID[i]).data.isOasis;//клетка является оазисом?
	    //console.log(i);
	    //console.log(spisokID[i]);
	    if (qwert == true) {//да, является
	        let w = spisokID[i];
	        spisokOasisFull.push(w);//запишем ее в список оазисов всех
	        //console.log(spisokOasisFull);
	    }
	}

	//список оазисов, где есть определенные звери
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[1];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits1.push(b);//запишем ее в список оазисов с нужными юнитами
			//console.log('0-0-0-999-0-0-0');
			//console.log(spisokOasisUnits1);
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[2];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits2.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[3];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits3.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[4];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits4.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[5];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits5.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[6];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits6.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[7];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits7.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[8];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits8.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[9];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits9.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	for (let i = 0; i < spisokOasisFull.length; i++) {
		qwert1 = window.MapDetails.get(spisokOasisFull[i]).data.troops.units[10];
		if (qwert1 !== undefined) {
			let b = spisokOasisFull[i];
			spisokOasisUnits10.push(b);//запишем ее в список оазисов с нужными юнитами
		}
	}
	

	//для вывода в таблицу списка оазисов.
	for (let i = 0; i < spisokOasisUnits1.length; i++) {
		vTablet ='. . . . . . . . . . . . . . .' + window.MapDetails.get(spisokOasisUnits1[i]).data.troops.units[1] + '  ' + oasis_date[1] + ' в  ' + window.Village.get(spisokOasisUnits1[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet1.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits2.length; i++) {
		vTablet ='. . . . . . . . . . . . . . . .' + window.MapDetails.get(spisokOasisUnits2[i]).data.troops.units[2] + '  ' + oasis_date[2] + ' в  ' + window.Village.get(spisokOasisUnits2[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet2.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits3.length; i++) {
		vTablet ='. . . . . . . . . . . . . . . .' + window.MapDetails.get(spisokOasisUnits3[i]).data.troops.units[3] + '  ' + oasis_date[3] + ' в  ' + window.Village.get(spisokOasisUnits3[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet3.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits4.length; i++) {
		vTablet ='. . . . . . . . . . .' + window.MapDetails.get(spisokOasisUnits4[i]).data.troops.units[4] + '  ' + oasis_date[4] + ' в  ' + window.Village.get(spisokOasisUnits4[i]).data.name + '. . . . . . . . . . . . .';
		spisokVTablet4.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits5.length; i++) {
		vTablet ='. . . . . . . . . . . . . . .' + window.MapDetails.get(spisokOasisUnits5[i]).data.troops.units[5] + '  ' + oasis_date[5] + ' в  ' + window.Village.get(spisokOasisUnits5[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet5.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits6.length; i++) {
		vTablet ='. . . . . . . . . . . . . . . . .' + window.MapDetails.get(spisokOasisUnits6[i]).data.troops.units[6] + '  ' + oasis_date[6] + ' в  ' + window.Village.get(spisokOasisUnits6[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet6.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits7.length; i++) {
		vTablet = '. . . . . . . . . . . . . .' +window.MapDetails.get(spisokOasisUnits7[i]).data.troops.units[7] + '  ' + oasis_date[7] + ' в  ' + window.Village.get(spisokOasisUnits7[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet7.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits8.length; i++) {
		vTablet = '. . . . . . . . . . . . . .' +window.MapDetails.get(spisokOasisUnits8[i]).data.troops.units[8] + '  ' + oasis_date[8] + ' в  ' + window.Village.get(spisokOasisUnits8[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet8.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits9.length; i++) {
		vTablet = '. . . . . . . . . . . . . . . .' +window.MapDetails.get(spisokOasisUnits9[i]).data.troops.units[9] + '  ' + oasis_date[9] + ' в  ' + window.Village.get(spisokOasisUnits9[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet9.push(vTablet);
	}
	for (let i = 0; i < spisokOasisUnits10.length; i++) {
		vTablet ='. . . . . . . . . . . . . . .' + window.MapDetails.get(spisokOasisUnits10[i]).data.troops.units[10] + '  ' + oasis_date[10] + ' в  ' + window.Village.get(spisokOasisUnits10[i]).data.name + '. . . . . . . . . . . . . . .';
		spisokVTablet10.push(vTablet);
	}
	
	/*---- КОНЕЦ расчеты для оазисов! ----*/

    //для вывода на экран списка оазисов и зверей
	const spisokVT1 = spisokVTablet1.toString();
	const spisokVT2 = spisokVTablet2.toString();
	const spisokVT3 = spisokVTablet3.toString();
	const spisokVT4 = spisokVTablet4.toString();
	const spisokVT5 = spisokVTablet5.toString();
	const spisokVT6 = spisokVTablet6.toString();
	const spisokVT7 = spisokVTablet7.toString();
	const spisokVT8 = spisokVTablet8.toString();
	const spisokVT9 = spisokVTablet9.toString();
	const spisokVT10 = spisokVTablet10.toString();
	
	document.getElementById("testDataVT1").textContent = spisokVT1;//список оазисов с мышками
	document.getElementById("testDataVT2").textContent = spisokVT2;
	document.getElementById("testDataVT3").textContent = spisokVT3;
	document.getElementById("testDataVT4").textContent = spisokVT4;
	document.getElementById("testDataVT5").textContent = spisokVT5;
	document.getElementById("testDataVT6").textContent = spisokVT6;
	document.getElementById("testDataVT7").textContent = spisokVT7;
	document.getElementById("testDataVT8").textContent = spisokVT8;
	document.getElementById("testDataVT9").textContent = spisokVT9;
	document.getElementById("testDataVT10").textContent = spisokVT10;






    // скрываем окно, выводит кнопочку "закрыть"
    	document.querySelector('#close222').onclick = function () {
	   	dialog.close();
	   	console.log("закрыли таблицу")
	   	dialog.remove();//занесли селектор диалог в конец HTML кода.
		console.log("удалили таблицу")
		NeverovButton.remove(); 
    	}
	
}