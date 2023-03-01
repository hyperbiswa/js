// Get a reference to the start button
var startBtn = document.getElementById("start-btn");

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;

// Add an event listener for when speech is recognized
recognition.onresult = function(event) {
  // Get the recognized speech as text
  var speechText = event.results[0][0].transcript.toLowerCase();

  // If the recognized speech is "hello", respond with "how are you"
  if (speechText.indexOf("hello") !== -1) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance("How are you?");
    synth.speak(utterance);
  }
};

// Add an event listener to the start button
startBtn.addEventListener("click", function() {
  // Start listening for speech
  recognition.start();
});
