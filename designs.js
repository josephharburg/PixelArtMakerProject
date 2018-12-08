// Select color input
// Select size input

const myTitle = document.querySelector('h1'); //title of page
const colorPicked = document.querySelector('#colorPicker');// for color colorpicked
const canvas = document.querySelector('#pixelCanvas');
var num = 0;
function removeBoxes(){
  if (num > 1){
  removed = canvas.querySelectorAll('tr');
  removed.remove();}
}

function makeGrid(evt) {
  evt.preventDefault();
  const boxattributes = {
    row: document.querySelector('#inputWidth'),
    column: document.querySelector('#inputHeight'),
    tbodys: document.querySelector('tbody')
  }
  const gridmake = [];
  function add() {for (var e = 0; e < boxattributes.column.value; e++){gridmake.splice(e,0,"<tr>");
  gridmake.splice(e-1,0,'</tr>');
    for (var x = 0; x < boxattributes.row.value; x++){gridmake.splice(e+1,0,"<td></td>");}}
  }
  add();
  boxattributes.tbodys.insertAdjacentHTML('afterbegin',gridmake.join(""));
  num = 2;
}

function changeColor(event) {
  if (event.target.nodeName.toLowerCase() === 'td') {
    event.target.style.backgroundColor = colorPicked.value;}
}
function changeTitle(evt) {
  if (evt.target === myTitle) {
    myTitle.style.color = colorPicked.value;}
}
canvas.addEventListener('click', changeColor, false);
myTitle.addEventListener ('click', changeTitle);
document.addEventListener ('submit', makeGrid);
