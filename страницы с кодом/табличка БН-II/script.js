let spisokBNII = [
    {sekcia: 'Секция №1', yach:'БН-1', zn: true, pz: false, zametki:''},
    {sekcia: 'Секция №1', yach:'БН-2', zn: true, pz: false, zametki:''},
    {sekcia: 'Секция №2', yach:'БН-3', zn: true, pz: false, zametki:''},
    {sekcia: 'Секция №2', yach:'БН-4', zn: true, pz: false, zametki:''},
    {sekcia: 'Секция №3', yach:'БН-5', zn: true, pz: false, zametki:''},
    {sekcia: 'Секция №3', yach:'БН-6', zn: true, pz: false, zametki:''},
    {sekcia: 'Секция №4', yach:'БН-7', zn: true, pz: false, zametki:''},
    {sekcia: 'Секция №4', yach:'БН-8', zn: true, pz: false, zametki:''},
]

let tableSpisokBNII = ''

for (let n = 0; n < spisokBNII.length; n++) {
    let qwer = spisokBNII[n]
    tableSpisokBNII += '<tr><td>'+qwer.sekcia+'</td><td>'+qwer.yach+'</td><td>'+qwer.zn+'</td><td>'+qwer.pz+'</td><td>'+qwer.zametki+'</td></tr>'


}

const div = document.createElement('div');

str = '';
str += '<li>Строения для наса 500<table>'
str += tableSpisokBNII
str += '</table></li>'

div.innerHTML = str;//содержимое селектора диалог
console.log("придали ей содержимое");
document.body.appendChild(div);//занесли селектор диалог в конец HTML кода.