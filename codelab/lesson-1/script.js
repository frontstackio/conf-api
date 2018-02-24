/* ***************************
 * 
 * Lesson 1 - What is fetch?
 * 
 *************************** */

// XMLHTTPRequest
// See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest 
// for more information

var xhr = new XMLHttpRequest();
xhr.open("GET", "../assets/text.txt");
xhr.responseType = "text";

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Oops, error :(");
};

xhr.send();

// @todo:
// Fetch API
// See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// for more information
// Browser support: https://caniuse.com/#feat=fetch

fetch("../assets/text.txt")
  .then((response) => response.text())
  .then((text) => {
    console.log(text)
  })
  .catch((err) => {
    console.log("Oops, error :(");
  });
