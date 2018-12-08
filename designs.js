// Select color input
// Select size input

const myTitle = document.querySelector('h1'); //title of page
const colorPicked = document.querySelector('#colorPicker');// for color colorpicked
const removebutton = document.querySelector('button[name="remove"]');
const canvas = document.querySelector('#pixelCanvas');
const table = document.querySelector('table')
// When size is submitted by the user, call makeGrid()
// function removebox() {
//   // const removeboxes = document.querySelectorAll('td');
//   // const removerows = document.querySelectorAll('tr');
//   const removetable = document.querySelector('tbody');
//   // removeboxes.remove();
//   // removerows.remove();
//   removetable.remove();
// }

function makeGrid(evt) {
  evt.preventDefault();
  // removebox();
  const obj = {
    row: document.querySelector('#inputWidth'),
    column: document.querySelector('#inputHeight')
  }
  function tbodyadd() {canvas.insertAdjacentHTML('afterbegin','<tbody></tbody>');}
  tbodyadd();
  const rows = document.querySelector('tbody');
  const gridmake = [];
  function add() {for (var e = 0; e < obj.column.value; e++){gridmake.splice(e,0,"<tr>");
  gridmake.splice(e-1,0,'</tr>');
    for (var x = 0; x < obj.row.value; x++){gridmake.splice(e+1,0,"<td></td>");}}
  }
  add();
  rows.insertAdjacentHTML('afterbegin',gridmake.join(""));
}

function changeColor(event) {
  if (event.target.nodeName.toLowerCase() === 'td') {
    event.target.style.backgroundColor = colorPicked.value;}
}
// function changeTitle(evt) {
//   if (evt.target === myTitle) {
//     myTitle.style.color = colorPicked.value;}
// }
canvas.addEventListener('click', changeColor, false);
// document.addEventListener ('click', changeTitle);
document.addEventListener ('submit', makeGrid);
