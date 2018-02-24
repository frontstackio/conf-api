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

fetch("../assets/json.json")
 .then((response) => response.json())
 .then((json) => {
    console.log(json)
  })
  .catch((err) => console.log("Oops, error :("));


// @todo:
// blob()

fetch("../assets/image.png")
 .then((response) => response.blob())
 .then((blob) => {
    console.log(blob)
    var img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  })
  .catch((err) => console.log("Oops, error :("));

