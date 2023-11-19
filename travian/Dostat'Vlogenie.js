//этот кусок кода достает значения текущей выработки ресурсов, и выводит в консоль
//можно все выделить, вставить в консоль, и он выдаст ЧВР
var elW = document.querySelector(".stockContainer.wood .production .value"); //вытащили строку выработки глины
const contentW = elW.innerText;// достаем текст из дива
var xW = parseInt(contentW, 10);// из текста достаем число
//console.log(xW);//вывели в консоль
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