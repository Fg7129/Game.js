const colors = ["black", "yellow", "green", "aqua", "red ", "chartreuse "];

let currentColorIndex = 0;
const button = document.getElementById("colorButton");
button.textContent = "Welcome";
button.addEventListener("mouseenter", () => {
  button.textContent = "Hovering!";
});

button.addEventListener("mouseleave", () => {
  button.textContent = "Welcome"; // Reset to welcome text when not hovering
});

button.addEventListener("click", () => {
  button.style.backgroundColor = colors[currentColorIndex++];

  currentColorIndex %= colors.length;

  // Change button text to "Goodbye" after click

  button.textContent = "TILL NEXT TIME ON DRAGONBALL SUPER!";
});




