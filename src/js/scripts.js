
// Get current year for footer copywrite
var date = new Date();
var year = date.getFullYear();
var copywriteYear = document.getElementById('currentYear');
copywriteYear.innerText = year + ' ';


// Mobile menu
var mobileBtn = document.getElementById('mobile-menu');
var mobileMenu = document.getElementById('menu');
// Open and close menu when hamburger is clicked
mobileBtn.addEventListener('click', function(){
  if(mobileMenu.classList == ""){
    mobileMenu.classList = "open";
  } else {
    mobileMenu.classList = "";
  }
});

var fullArchive = document.getElementsByClassName('full-archive')[0];
var showArchive = document.getElementById('showArchive');

showArchive.addEventListener('click', function(){
  fullArchive.style.display = 'flex';
  this.style.display = 'none';
})
