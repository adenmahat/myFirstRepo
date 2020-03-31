/*jshint esversion: 6 */
window.onload = function() {
  "use strict";
  //setInterval(getBigger, 500);
};
var getBigger = function() {
  var textArea = document.getElementById("textArea");
  var current = textArea.style.fontSize;

  if (current) {
    current = current.substring(0, current.indexOf("p"));
    current = parseInt(current) + 2;
    textArea.style.fontSize = current + "pt";
  } else {
    textArea.style.fontSize = "24pt";
  }
};

function getBold() {
  var textArea = document.getElementById("textArea");
  var checkBox = document.getElementById("checkBox");

  if (checkBox.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "green";
    textArea.style.textDecoration = "underline";
    document.body.style.backgroundImage =
      "url('images/hundred-dollar-bill.jpg')";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
    document.body.style.backgroundImage = null;
  }
}
