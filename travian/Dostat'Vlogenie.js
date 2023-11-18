<div class="card__overlay-wrapper">
  <a href="" class="card-do__btn view-btn">...</a>
</div>


const parent = document.querySelector(".card__overlay-wrapper .card-do__btn"); // 1 вариант - не прошел...
const childText = parent.textContent;
console.log(childText + "что то");

var el = document.querySelector("div.card__owerlay-wrapper a.card-do__btn.print__btn");//2 вариант - что то похожее, но выводит первый вариант, а там их много

var el = document.querySelector( "#main, #basic, #exclamation" );//3 вариант - надо бы попробовать...



//stockContainer wood
production
value

const parent = document.querySelector(".stockContainer clay .production .value"); // 1 вариант
const childTextWood = parent.textContent;
console.log(childText + "что то");

var el = document.querySelector("div.stockContainer clay div.production div.value"); //2 вариант

var el = document.querySelectorAll(".production .value"); // 3 вариант. вернул 4 значения 
console.log(el)

NodeList(4) [div.value, div.value, div.value, div.value] //именно это он и вернул...
0:div.value
1:div.value
2:div.value
3:div.value
length
: 
4
[[Prototype]]
: 
NodeList

//stockContainer wood
//stockContainer clay

