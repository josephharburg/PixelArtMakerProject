const myTitle = document.querySelector('h1'); // Title of page for added extra
const colorPicked = document.querySelector('#colorPicker');// For color picked
const canvas = document.querySelector('#pixelCanvas');// Selects canvas

function removeBoxes(){ // This function resets the canvas
  const tbodyPresent = document.querySelector('tbody');
  if (tbodyPresent != null){
    tbodyPresent.remove()
  }
}

function makeGrid(evt) { // Makes the Grid on the canvas
  evt.preventDefault();
  removeBoxes();
  canvas.insertAdjacentHTML('afterbegin', '<tbody></tbody>')
  const boxattributes = {
    row: document.querySelector('#inputWidth'),
    column: document.querySelector('#inputHeight'),
    tableBody: document.querySelector('tbody')
  }
  const gridMake = [];

  function add() { // Add script to gridMake array then inserts it into table
    for (var e = 0; e < boxattributes.column.value; e++){
    gridMake.splice(e,0,"<tr>"); gridMake.splice(e-1,0,'</tr>');
    for (var x = 0; x < boxattributes.row.value; x++){
      gridMake.splice(e+1,0,"<td></td>");}
    }
    boxattributes.tableBody.insertAdjacentHTML('afterbegin',gridMake.join(""));
  }
  add();
}

function changeColor(event) { // Changes the box color when clicked on
  if (event.target.nodeName.toLowerCase() === 'td') {
    event.target.style.backgroundColor = colorPicked.value;
  }
}

function changeTitle(evt) { // Changes the Title to color picked when clicked
  if (evt.target === myTitle) {
    myTitle.style.color = colorPicked.value;
  }
}

canvas.addEventListener('click', changeColor, false);
myTitle.addEventListener ('click', changeTitle);
document.addEventListener ('submit', makeGrid);
