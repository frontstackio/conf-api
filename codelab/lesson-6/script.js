/* ***************************
 * 
 * Lesson 6 - Authentication
 * 
 *************************** */

const options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer bkbjkbku"
  }
};

fetch("https://api.github.com/users/ireade", options)
 .then((res) => res.json())
 .then((json) => {
   console.log(json);
 });
