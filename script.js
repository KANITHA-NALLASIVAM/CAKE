const cart = [];
const cartItemsElement = document.getElementById('cart-items');
const cartCountElement = document.getElementById('cart-count');
const cartTotalElement = document.getElementById('cart-total');
// const buyNowButton = document.getElementById('buy-now');
// const buttons = document.querySelectorAll(".add-to-cart");
const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");

    addToCart(id, name, price);
  });
});

function addToCart(id, name, price) {
  console.log(`Added to cart: ${name} (₹${price})`);
  // Logic to add the item to the cart
}

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach((button) => {
    
    button.addEventListener('click', (e) => {
    const product = e.target.closest('.product');
    const productId = product.getAttribute('data-id');
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1,
      });
    }

    updateCart();
  });
});

// Update cart display
function updateCart() {
  cartItemsElement.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    count += item.quantity;

    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
    cartItemsElement.appendChild(li);
  });

  cartCountElement.textContent = count;
  cartTotalElement.textContent = total.toFixed(2);
  
  if (cart.length > 0) {
    buyNowButton.style.display = 'block';
  } else {
    buyNowButton.style.display = 'none';
  }
}
buyNowButton.addEventListener('click', () => {
    alert(`Thank you for your purchase! Your total is ₹${cartTotalElement.textContent}`);
    // Clear cart
    cart.length = 0;
    updateCart();
  });