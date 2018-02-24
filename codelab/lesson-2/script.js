/* ***************************
 * 
 * Lesson 2 - GET & response types
 * 
 *************************** */

// text()

fetch("../assets/text.txt")
  .then((response) => response.text())
  .then((text) => {
    console.log(text)
  })
  .catch((err) => console.log("Oops, error :("));

// @todo:
// json()


// @todo:
// blob()

