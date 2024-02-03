/*

--------------------------------------------------------------------------------

    GET

https://testx5.kingdoms.com/api/?c=cache&a=get&p239&t1682583332756


--------------------------------------------------------------------------------

    POST

{"controller":
    "cache",
    "action":"get",
    "params":
    {"names":
        ["MapDetails:536854584"]
    },
    "clientId":"644a24833517b",
    "session":"0a2a2bb8381796d61934"
}

--------------------------------------------------------------------------------

    Rspone

{"cache":
    [{
        "name":"MapDetails:536854584",
        "data": {
            "isOasis":true,
            "oasisType":"40",
            "hasVillage":"0",
            "hasNPC":0,
            "resType":"0",
            "isHabitable":0,
            "landscape":"4955",
            "oasisBonus":{"1":0,"2":0,"3":0,"4":25},
            "troops": {
                "troopId":"616",
                "tribeId":"4",
                "playerId":"0",
                "playerName":null,
                "villageId":"536854584",
                "villageName":null,
                "villageIdLocation":"536854584",
                "villageNameLocation":"",
                "playerIdLocation":"0",
                "playerNameLocation":"",
                "filter":null,
                "villageIdSupply":"536854584",
                "status":"home",
                "units":{"1":"70","3":"47","6":"82"},
                "supplyTroops":"0",
                "capacity":0
            },
            "kingdomId":0,
            "ownKingdomInfluence":0,
            "defBonus":0,
            "ownRank":0,
            "playersWithTroops":[],
            "oasisStatus":"3",
            "ownTroops":null,
            "wwZone":536887346
        }
    }],
    "ignoreSerial":1,
    "time":1682583332892,
    "serialNo":138426,
    "response":[]
}

--------------------------------------------------------------------------------

    const key = JSON.parse(decodeURIComponent(document.cookie.split(';').find(cookie => cookie.trim().startsWith('t5SessionKey=')).split('=')[1])).key;
    {"key":"0a2a2bb8381796d61934","id":"239"}'

    const clien_id = getClientId(); // '644a24833517b'

    // Получаем значение куки с именем "t5SessionKey"
    const allCookies = document.cookie.split(';'); // разбиваем строку куки на массив отдельных кук
    let t5SessionKey = ''; // создаем переменную для хранения значения куки
    for (let i = 0; i < allCookies.length; i++) { // перебираем массив кук
    const cookie = allCookies[i].trim(); // убираем лишние пробелы из каждой куки
    if (cookie.startsWith('t5SessionKey=')) { // если имя куки совпадает с "t5SessionKey"
        t5SessionKey = cookie.split('=')[1]; // сохраняем значение куки
        break; // выходим из цикла, чтобы не проверять остальные куки
    }
    }

    // Декодируем значение куки
    const decodedT5SessionKey = decodeURIComponent(t5SessionKey);

*/

/*
*
* Модуль для отображения информации о оазисах
* 
*/

class NeverovOasisInfo {
    myObject = {
        "controller": "cache",
        "action": "get",
        "params": {
            "names": [
                "MapDetails:536854584",
                "MapDetails:536363048",
                "MapDetails:537280570"
            ]
        },
        "clientId": "644a24833517b",
        //getClientId(1)    '65b8bf4077bef'
        "session": "0a2a2bb8381796d61934"
        };

    // https://testx5.kingdoms.com/api/?c=cache&a=get&p239&t1682583332756

	/*----- Начало: Отправка данных на сервер -----*/
	send = () => {	
        let message = '';
        this.myObject.clientId = getClientId();
        this.myObject.session = JSON.parse(decodeURIComponent(document.cookie.split(';').find(cookie => cookie.trim().startsWith('t5SessionKey=')).split('=')[1])).key;


		console.log(this.myObject);
		message = JSON.stringify(this.myObject);
		console.log(message);
		
        const c = 'cache';
        const a = 'get';
        const playerId = player.data.playerId; // 239
        const time = new Date().getTime().toString(); // 1682583332756
        const url = `https://testx5.kingdoms.com/api/?c=${c}&a=${a}&p${playerId}&t${time}`;
		
		fetch(url, {
			method: "POST",
			body: message,
			mode: "cors",
			credentials: "include",
			headers: {
                "accept": "application/json, text/plain, */*",
                "accept-encoding": "gzip, deflate, br",
				"content-type": "application/json;charset=UTF-8"
			}
		})
		.then(response => {
	    	response.text().then(text => console.log(text));
			//if (!response.ok)
		    //	response.text().then(text => console.log(text));
		})
		.catch(error => {
			console.warn("WebSocket (respone Err): ", error);
		});
	}
	/*----- Конец: Отправка данных на сервер -----*/
}


NeverovOasisInfo = new NeverovOasisInfo();