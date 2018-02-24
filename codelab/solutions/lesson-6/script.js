/* ***************************
 * 
 * Lesson 6 - Authentication
 * 
 *************************** */

const options = {
  method: "POST",
  body: JSON.stringify({ foo: "bar" }),
  headers: new Headers({
    "Content-Type": "application/json",
    "Authorization": "Bearer 12345"
  })
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
  })
  .catch((err) => console.log("Oops, error :("));
