let spisokBNII_1 = 'БН-II'
let spisok = [

    {terra: 'БН-II',sekcia: 'Секция №1', yach:'БН-1', ya: true,  zn: true, pz: true, zametki:'ТН'},
    {terra: 'БН-II',sekcia: 'Секция №1', yach:'БН-2', ya: true, zn: true, pz: false, zametki:'Ввод'},
    {terra: 'БН-II',sekcia: 'Секция №2', yach:'БН-3', ya: true, zn: false, pz: true, zametki:'масло ф.А'},
    {terra: 'БН-II',sekcia: 'Секция №2', yach:'БН-4', ya: true, zn: false, pz: false, zametki:'Блокировка'},
    {terra: 'БН-II',sekcia: 'Секция №3', yach:'БН-5', ya: false, zn: true, pz: true, zametki:''},
    {terra: 'БН-II',sekcia: 'Секция №3', yach:'БН-6', ya: false, zn: true, pz: false, zametki:''},
    {terra: 'БН-II',sekcia: 'Секция №4', yach:'БН-7', ya: false, zn: false, pz: true, zametki:''},
    {terra: 'БН-II',sekcia: 'Секция №4', yach:'БН-8', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'Золоотвал №2',sekcia: '-', yach:'ВЛ-1', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'Золоотвал №2',sekcia: '-', yach:'ВЛ-2', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'Золоотвал №2',sekcia: '-', yach:'ВЛ-3', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'Золоотвал №2',sekcia: '-', yach:'ВЛ-4', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'Золоотвал №2',sekcia: '-', yach:'ВЛ-5', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'Золоотвал №2',sekcia: '-', yach:'ВЛ-6', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'Золоотвал №2',sekcia: '-', yach:'ВЛ-7', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'Золоотвал №2',sekcia: '-', yach:'ВЛ-8', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'ВЛ-1',sekcia: '-', yach:'ЛР-1', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'ВЛ-2',sekcia: '-', yach:'ЛР-2', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'ВЛ-3',sekcia: '-', yach:'ЛР-3', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'ВЛ-4',sekcia: '-', yach:'ЛР-4', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'ВЛ-1',sekcia: '-', yach:'ЛР-5', ya: false, zn: true, pz: false, zametki:''},
    {terra: 'ВЛ-2',sekcia: '-', yach:'ЛР-6', ya: false, zn: true, pz: false, zametki:''},
    {terra: 'ВЛ-3',sekcia: '-', yach:'ЛР-7', ya: false, zn: false, pz: false, zametki:''},
    {terra: 'ВЛ-4',sekcia: '-', yach:'ЛР-8', ya: false, zn: false, pz: false, zametki:''},

]


function newtable(spisok){
    console.log(spisok)
    let tableSpisokBNII = ''
    let spisokBNII = spisok
    console.log(spisokBNII)
    console.log("списокБН переписали из списка")
    for (let n = 0; n < spisokBNII.length; n++) {
        let qwer = spisokBNII[n]
        //console.log(qwer)
        let yaqwer = qwer.ya
        if (qwer.ya === true){
            yaqwer = '<input type="checkbox" checked name="' + qwer.yach + 'ya"/>'
            qwer.ya = yaqwer
        }else{
            qwer.ya = '<input type="checkbox" name="' + qwer.yach + 'ya"/>'
        }
        let znqwer = qwer.zn
        if (qwer.zn === true){
            znqwer = '<input type="checkbox" checked name="' + qwer.yach + 'zn"/>'
            qwer.zn = znqwer
        }else{
            qwer.zn = '<input type="checkbox" name="' + qwer.yach + 'zn"/>'
        }
        let pzqwer = qwer.pz
        if (qwer.pz === true){
            pzqwer = '<input type="checkbox" checked name="' + qwer.yach + 'pz"/>'
            qwer.pz = pzqwer
        }else{
            qwer.pz = '<input type="checkbox" name="' + qwer.yach + 'pz"/>'
        }
        tableSpisokBNII += '<tr><td>'+qwer.terra+'</td><td>'+qwer.sekcia+'</td><td>'+qwer.yach+'</td><td>'+qwer.ya+'</td><td>'+qwer.zn+'</td><td>'+qwer.pz+'</td><td>'+qwer.zametki+'</td></tr>'


    }

    const div = document.createElement('div');

    str = '';
    str += '<li>' + spisokBNII_1 + '<table>'
    str += '<tr><td>Размещение</td><td>Секция</td><td>Ячейка</td><td>Полжение</td><td>ЗН</td><td>ПЗ</td><td>Заметки</td></tr>'
    str += tableSpisokBNII
    str += '</table></li>'

    div.innerHTML = str;//содержимое селектора диалог
    console.log("придали ей содержимое");
    document.body.appendChild(div);//занесли селектор диалог в конец HTML кода.


}



newtable(spisok)

//addYachNow(spisok)


//создаем контроль клика...
document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "checkbox")
        //let qw = event.target.name
        console.log(event.target)
        console.log(event.target.name);
        poisk(event)
        //qwer = event.target.name
        //last2 = qwer.slice(-2)
        //console.log(last2)

        
});

// как оно должно работать? при клике нам выдает адрес строки и идентификатор чекбокса. 
// сначала нам надо разделить идентификатор строки и идентификатор чекбокса. 
// потом по строке ищем запись. в записи ищем чекбокс
// если чекбокс нажат - то записываем отжать, если пустой - надо записать нажать.
// если успешно - надо создать лог и записать его...
function poisk(qwerty) {
    let chb = qwerty.target.name
    console.log('поиск сработал!')
    let last_2 = chb.slice(-2)
    let yacheika = chb.slice(0, -2)
    //console.log(last_2)
    //console.log(yacheika)
    //console.log(spisok)
    //console.log(spisok.length)
    for (let i = 0; i < spisok.length; i++) {
        //console.log(i)
        let qwer = spisok[i]
        if (spisok[i].yach === yacheika) {
            console.log(qwer)
            let per = 'checked'
            if (last_2 === 'ya'){
                console.log('ячейка')
                let textya = qwer.ya
                //console.log(text)
                if (textya.includes(per)){
                    spisok[i].ya = '<input type="checkbox" name="' + qwer.yach + 'ya"/>'
                    console.log('убрали чек')
                }else{
                    spisok[i].ya = '<input type="checkbox" checked name="' + qwer.yach + 'ya"/>'
                    console.log('добавили чек')
                }

            }else{
                if(last_2 === 'zn'){
                    console.log('ЗН')
                    let textzn = qwer.zn
                    //console.log(text)
                    if (textzn.includes(per)){
                        spisok[i].zn = '<input type="checkbox" name="' + qwer.yach + 'zn"/>'
                        console.log('убрали чек')
                    }else{
                        spisok[i].zn = '<input type="checkbox" checked name="' + qwer.yach + 'zn"/>'
                        console.log('добавили чек')
                    }
                
                }else{
                    if (last_2 === 'pz'){
                        console.log('ПЗ')
                        let textpz = qwer.pz
                        //console.log(text)
                        if (textpz.includes(per)){
                            spisok[i].pz = '<input type="checkbox" name="' + qwer.yach + 'pz"/>'
                            console.log('убрали чек')
                        }else{
                            spisok[i].pz = '<input type="checkbox" checked name="' + qwer.yach + 'pz"/>'
                            console.log('добавили чек')
                        }


                    }else{
                        console.log('ОШИБКА!!! Нет Такого чекбокса')
                    }
                }   
            

            
            }
        }
    }
}

