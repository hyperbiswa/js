
// Text copied to clipboard!
async function copyText() {
  const input = document.getElementById("myInput");
  const text = input.value;

  try {
    await navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}
