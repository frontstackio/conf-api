/* ***************************
 * 
 * Lesson 3 - POST & data types
 * 
 *************************** */

// @todo:
// application/json

const url = "../assets/text.txt";

fetch(url, {
  method: "POST",
  body: JSON.stringify({ foo: "bar" }),
  headers: new Headers({
    "Content-Type": "application/json"
  })
})
.then((response) => response.json())
.then((response) => {
  console.log(response)
})
.catch((err) => console.log("Oops, error :("));


// @todo:
// form data

const form = document.querySelector("form");

fetch(url, {
  method: "POST",
  body: new FormData(form),
  headers: new Headers({
    "Content-Type": "multipart/form-data"
  })
})
.then((response) => response.json())
.then((response) => {
  console.log(response)
})
.catch((err) => console.log("Oops, error :("));
