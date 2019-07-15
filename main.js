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
    // alert("Thanks for Subscribing!")
    

});



document.getElementById("aboutLink").addEventListener("click", event);
function event() {
    const about = document.getElementById("about")
    scrollTo(about)
}

document.getElementById("productsLink").addEventListener("click", event);
function event() {
    const shop = document.querySelector("products")
    scrollTo(shop)
}


document.getElementById("featuredLink").addEventListener("click", event);
function event() {
    const featured= document.getElementById("featured")
    scrollTo(featured)
}

document.getElementById("updatesLink").addEventListener("click", event);
function event() {
    const updates = document.getElementById("updates")
    scrollTo(updates)
}


