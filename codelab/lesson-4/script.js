/* ***************************
 * 
 * Lesson 4 - PUT
 * 
 *************************** */

const options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  }
};

fetch("http://api.github.com/users/IRE", options)
 .then((res) => res.json())
 .then((json) => {
   console.log(json);
 });
