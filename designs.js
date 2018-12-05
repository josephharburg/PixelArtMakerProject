// Select color input
// Select size input

const myTitle = document.querySelector('h1'); //title of page
const colorPicked = document.querySelector('#colorPicker');// for color colorpicked
const canvas = document.querySelector('#pixelCanvas')
// When size is submitted by the user, call makeGrid()
// function removebox(event) {
//   if (event.target === document.querySelector('#remove'))
//   const removeboxes = document.querySelectorAll('td')
//   removeboxes.remove();
// }
canvas.insertAdjacentHTML('afterbegin', '<tr></tr>');
function makeGrid(evt) {
  evt.preventDefault();
  const canvas = document.querySelector('#pixelCanvas');
  const newBox = '<td></td>';
  const newRow = '<tr></tr>';
  const row = document.querySelector('#inputWidth');
  const column = document.querySelector('#inputHeight');
  const rows = document.querySelector('tr');
  for (var y = 0; y < obj.column.value; y++){
    canvas.insertAdjacentHTML('afterbegin', '<tr></tr>');}
  for (var column = 0; column < obj.row.value;column++){
    rows.insertAdjacentHTML('afterbegin', '<td></td>');}
  // const obj = {
  //   row: document.querySelector('#inputWidth'),
  //   column: document.querySelector('#inputHeight'),
  //   rows: document.querySelector('tr'),
  //   grid: function(){
  //     for (var y = 0; y < obj.column.value; y++){
  //       canvas.insertAdjacentHTML('afterbegin', '<tr></tr>');}
  //     for (var column = 0; column < obj.row.value;column++){
  //       rows.insertAdjacentHTML('afterbegin', '<td></td>');};
  //   }
  //   obj.grid();
}


// function changeTitle(evt) {
//   if (evt.target === myTitle) {
//     myTitle.style.color = colorPicked.value;}
// }
//
// document.addEventListener ('click', changeTitle);
document.addEventListener ('submit', makeGrid);
// document.addEventListener('click', removebox);
