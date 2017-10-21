var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/olaf-skin.jpg') {
      myImage.setAttribute ('src','images/olaf-skin2.jpg');
    } else {
      myImage.setAttribute ('src','images/olaf-skin.jpg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = "Welcome, " + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = "Welcome, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}