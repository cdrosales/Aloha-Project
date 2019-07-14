document.addEventListener('DOMContentLoaded', function () {

});

//FLICKITY 

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

    const emailInfo = document.getElementById("emailInfo")

    if (emailInfo = true) {
        alert("Thanks for Subscribing!")
    }

})



// SMOOTH SCROLLING