/* ***************************
 * 
 * Lesson 4 - PUT
 * 
 *************************** */

// @todo:

const url = "";

const options = {
  method: "PUT",
  body: JSON.stringify({ foo: "bar" }),
  headers: new Headers({
    "Content-Type": "application/json"
  })
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
  })
  .catch((err) => console.log("Oops, error :("));
