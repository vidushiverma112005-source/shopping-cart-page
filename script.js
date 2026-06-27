const cartItemsContainer = document.getElementById("cart-items");
const totalItemsElement = document.getElementById("total-items");
const totalPriceElement = document.getElementById("total-price");

let cart = [
  {
    id: 1,
    name: "Shoes",
    price: 2000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200"
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 800,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200"
  },
  {
    id: 3,
    name: "Watch",
    price: 1500,
    quantity: 1,
    image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200"
  }
];
function renderCart() {

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      `<p class="empty-message">Your cart is empty</p>`;

    totalItemsElement.textContent = 0;
    totalPriceElement.textContent = 0;
    return;
  }

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item) => {

    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
      </div>

      <div class="quantity-controls">
        <button onclick="decreaseQuantity(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity(${item.id})">+</button>
      </div>

      <button class="remove-btn"
        onclick="removeItem(${item.id})">
        Remove
      </button>
    `;

    cartItemsContainer.appendChild(itemDiv);
  });

  totalItemsElement.textContent = totalItems;
  totalPriceElement.textContent = totalPrice;
}

function increaseQuantity(id) {

  cart = cart.map(item => {
    if (item.id === id) {
      item.quantity++;
    }
    return item;
  });

  renderCart();
}

function decreaseQuantity(id) {

  cart = cart.map(item => {
    if (item.id === id && item.quantity > 1) {
      item.quantity--;
    }
    return item;
  });

  renderCart();
}

function removeItem(id) {

  cart = cart.filter(item => item.id !== id);

  renderCart();
}

renderCart();