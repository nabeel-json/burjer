const menu = document.querySelector("#phone-menu");

function menuClick() {
  menu.classList.toggle("hidden");
}

// Counter functionality
const countDisplays = document.querySelectorAll(".count");
const incrementButtons = document.querySelectorAll(".increment");
const decrementButtons = document.querySelectorAll(".decrement");

// Loop through increment buttons to add event listeners
incrementButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Get the current count
    let count = parseInt(countDisplays[index].innerHTML) || 0;
    // Increment the count
    count += 1;
    // Update the count display
    countDisplays[index].innerHTML = count;
    updateCartCount(index, count); // Update cart counts
  });
});

// Similarly, add logic for decrement buttons
decrementButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let count = parseInt(countDisplays[index].innerHTML) || 0;
    if (count > 0) {
      count -= 1;
      countDisplays[index].innerHTML = count;
      updateCartCount(index, count); // Update cart counts
    }
  });
});

// Function to update cart counts
function updateCartCount(index, count) {
  const cartCountDisplays = document.querySelectorAll("#cart-container .count");
  cartCountDisplays[index].innerHTML = count; // Update cart count for the specific item
  updateCheckoutTotal(); // Update checkout total after cart count changes
}

// Function to update the checkout total
function updateCheckoutTotal() {
  const prices = [20, 12, 16]; // Prices for each menu item
  let total = 0;

  const cartCountDisplays = document.querySelectorAll("#cart-container .count");
  cartCountDisplays.forEach((countDisplay, index) => {
    const count = parseInt(countDisplay.innerHTML) || 0; // Get current count
    total += count * prices[index]; // Calculate total
  });

  document.getElementById("checkout-num").innerHTML = total; // Update checkout display
}

//checkout form
document.getElementById("checkout-button").addEventListener("click", function () {
  const form = document.getElementById("floatingForm");
  form.classList.toggle("hidden");
});
