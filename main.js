document.addEventListener('DOMContentLoaded', function () {

});

var elem = document.querySelector('.featuredProducts');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  groupCells: true,
  pageDots: true,
  autoPlay: 2000,
});


const emailForm = document.getElementById("form")

emailForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const subscribed = document.getElementById("emailInfo").inputMode

    if (subscribed.inputMode = Text){
    alert("Thanks for Subscribing!")
    } else if (subscribed.inputMode = null){
      alert ("Please enter a valid email")
    }
});



