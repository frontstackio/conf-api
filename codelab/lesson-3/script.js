/* ***************************
 * 
 * Lesson 3 - POST & data types
 * 
 *************************** */

const options = {
  method: "POST",
  body: JSON.stringify({ foo: "bar" }),
  headers: {
    "Content-Type": "application/json"
  }
};

fetch("http://api.github.com/users", options)
 .then((res) => res.json())
 .then((json) => {
   console.log(json);
 });


const form = document.getElementById("form");

const options = {
  method: "POST",
  body: new FormData(form),
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
