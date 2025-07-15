document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM Loaded");
  
  // auto updated year in footer
  document.getElementById("year").innerHTML = new Date().getFullYear();
  
  // random quote
  var quotes = [
    "Agatha! You’re Being Melodramatic",
    "social media manager on GOFERKI",
    "python developer",
    "will we title fight again?",
    "gdziekolwiek, cokolwiek",
  ];
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  document.getElementById("quote").innerHTML = quotes[Math.floor(getRandomArbitrary(0, quotes.length))]

});
