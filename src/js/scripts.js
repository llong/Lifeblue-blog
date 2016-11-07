
// Get current year for footer copywrite
var date = new Date();
var year = date.getFullYear();
var copywriteYear = document.getElementById('currentYear');
copywriteYear.innerText = year + ' ';


// Mobile menu
var mobileBtn = document.getElementById('mobile-menu');
var mobileMenu = document.getElementById('menu');
var modal = document.getElementById('modal-overlay');

// Open and close menu when hamburger is clicked
mobileBtn.addEventListener('click', function(){
  if(mobileMenu.classList == ""){
    mobileMenu.classList = "open";
    modal.style.display = "block";
  } else {
    mobileMenu.classList = "";
    modal.style.display = "none";
  }
});

// Close mobile menu if user clicks outside menu
window.addEventListener('click', function(event){
  if(event.target === modal) {
    modal.style.display = "none";
    mobileMenu.classList = "";
  }
})


// Show full archive of posts by month. Hide more button on click
var fullArchive = document.getElementsByClassName('full-archive')[0];
var showArchive = document.getElementById('showArchive');

showArchive.addEventListener('click', function(){
  fullArchive.style.display = 'flex';
  this.style.display = 'none';
})
