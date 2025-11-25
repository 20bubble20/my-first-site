const button = document.getElementById("fancy-btn");
const image = document.getElementById("toggle-image");

button.addEventListener("click", () => {
  // Toggle the "selected" class (green state)
  const isSelected = button.classList.toggle("selected");

  // If the button is now selected (green), hide the image
  // If it's not selected (pink), show the image
  if (isSelected) {
    image.classList.remove("visible");  // green -> hide
  } else {
    image.classList.add("visible");     // pink -> show
  }
});