
// Get current year for footer copywrite
var date = new Date();
var year = date.getFullYear();
var copywriteYear = document.getElementById('currentYear');
copywriteYear.innerText = year + ' ';
