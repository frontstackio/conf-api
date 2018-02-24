/* ***************************
 * 
 * Lesson 5 - DELETE
 * 
 *************************** */

// @todo:

const url = "";

const options = {
  method: "DELETE"
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
  })
  .catch((err) => console.log("Oops, error :("));
