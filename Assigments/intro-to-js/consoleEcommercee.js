// Define products
const products = [
  { id: 1, name: "Product 1", price: 20.99 },
  { id: 2, name: "Product 2", price: 34.5 },
  { id: 3, name: "Product 3", price: 15.75 },
];

// Shopping cart
const cart = [];

// Function to display available products
function displayProducts() {
  console.log("Available Products:");
  products.forEach((product) => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

// Function to add a product to the cart
function addToCart(productId, quantity) {
  const selectedProduct = products.find((product) => product.id === productId);

  if (selectedProduct) {
    const itemInCart = cart.find((item) => item.product.id === productId);

    if (itemInCart) {
      itemInCart.quantity += quantity;
    } else {
      cart.push({ product: selectedProduct, quantity });
    }

    console.log(`${quantity} ${selectedProduct.name}(s) added to the cart.`);
  } else {
    console.log("Invalid product ID.");
  }
}

// Function to display the current cart
function displayCart() {
  console.log("Shopping Cart:");
  cart.forEach((item) => {
    console.log(`${item.product.name} - Quantity: ${item.quantity}`);
  });
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
}

// Function to checkout
function checkout() {
  displayCart();
  const total = calculateTotal();
  console.log(`Total: $${total.toFixed(2)}`);
  console.log("Thank you for shopping with us!");
  // You can add additional logic here, such as clearing the cart or processing a payment.
}

// Main program
function main() {
  console.log("Welcome to the E-commerce Console App");

  while (true) {
    console.log("\nOptions:");
    console.log("1. View Products");
    console.log("2. Add to Cart");
    console.log("3. View Cart");
    console.log("4. Checkout");
    console.log("5. Exit");

    const choice = prompt("Enter your choice: ");

    switch (choice) {
      case "1":
        displayProducts();
        break;
      case "2":
        const productId = prompt("Enter the product ID: ");
        const quantity = parseInt(prompt("Enter the quantity: "), 10);
        addToCart(productId, quantity);
        break;
      case "3":
        displayCart();
        break;
      case "4":
        checkout();
        break;
      case "5":
        console.log("Goodbye!");
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

// Run the application
main();
