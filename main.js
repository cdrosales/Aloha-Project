document.addEventListener('DOMContentLoaded', function () {

});

var elem = document.querySelector('.featuredProducts');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  groupCells: true,
  pageDots: true,
});


const emailForm = document.getElementById("form")

emailForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    if (emailForm.inputMode = true)
    alert("Thanks for Subscribing!")
    

});



