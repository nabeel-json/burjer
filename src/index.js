const menu = document.querySelector("#phone-menu");

function menuClick() {
  menu.classList.toggle("hidden");
}

// Counter functionality
const countDisplays = document.querySelectorAll(".count");
const incrementButtons = document.querySelectorAll(".increment");
const decrementButtons = document.querySelectorAll(".decrement");

incrementButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Increment the count for the specific item
    let count = parseInt(countDisplays[index].textContent) || 0;
    countDisplays[index].textContent = count + 1; // Update display
  });
});

decrementButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Decrement the count for the specific item
    let count = parseInt(countDisplays[index].textContent) || 0;
    if (count > 0) {
      // Prevent going below zero
      countDisplays[index].textContent = count - 1; // Update display
    }
  });
});
