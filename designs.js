// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid() {
//   const submitted = document.querySelector("submit")
//   const Width = document.querySelector('inputWidth')
//   const Height = document.querySelector('inputHeight')
//   const colorchosen =
// };

const mytitle = document.querySelector('h1');
const colortochange = document.querySelector('#colorPicker')
function changetitle(evt) {
  if (evt.target === mytitle) {
    mytitle.style.color = colortochange.value;}
}
document.addEventListener ('click', changetitle);
