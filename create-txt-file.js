// Get a reference to the download button
var downloadBtn = document.getElementById("download-btn");

// Add an event listener to the download button
downloadBtn.addEventListener("click", function() {
  // Define the file data
  var fileData = "This is some file data.";

  // Create a new Blob object from the file data
  var blob = new Blob([fileData], { type: "text/plain" });

  // Create a new URL object for the blob
  var url = URL.createObjectURL(blob);

  // Create a new anchor element to download the file
  var a = document.createElement("a");
  a.href = url;
  a.download = "my-file.txt";

  // Add the anchor element to the page and click it to download the file
  document.body.appendChild(a);
  a.click();

  // Remove the anchor element from the page
  document.body.removeChild(a);

  // Revoke the URL object to free up memory
  URL.revokeObjectURL(url);
});
