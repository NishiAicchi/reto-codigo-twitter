window.addEventListener('load', function(e) {
  e.preventDefault();
});

var insertMessage = document.getElementById('message-creator');
var btn = document.getElementById('btn');
var container = document.getElementById('container');
  
insertMessage.addEventListener('keyup',showValue
); 
btn.addEventListener('click', showMessage);

function showMessage() {
 
};

function showValue() {
  var showValue = insertMessage.value;
  console.log(showValue);
};