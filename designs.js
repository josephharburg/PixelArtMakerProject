// Select color input
// Select size input

const myTitle = document.querySelector('h1'); //title of page for added extra
const colorPicked = document.querySelector('#colorPicker');// for color colorpicked
const canvas = document.querySelector('#pixelCanvas');// selects canvas

function removeBoxes(){
  const tbodyPresent = document.querySelector('tbody');
  if (tbodyPresent != null){
    tbodyPresent.remove()
  }
}//this function resets the canvas

function makeGrid(evt) {
  evt.preventDefault();
  removeBoxes();
  canvas.insertAdjacentHTML('afterbegin', '<tbody></tbody>')
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
}//makes the Grid on the canvas

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
