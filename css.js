// Get the element by its ID
var myElement = document.getElementById("my-element");

// Define the style object
var styleObj = {
  fontSize: "20px",
  display: "flex"
};

// Merge the style object with the element's existing style property
Object.assign(myElement.style, styleObj);
