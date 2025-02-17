document.addEventListener("DOMContentLoaded", () => {
  let productList = document.getElementById("product-list");
  let cartItems = document.getElementById("cart-items");
  let emptyCart = document.getElementById("empty-cart");
  let totalCart = document.getElementById("cart-total");
  let totalPrice = document.getElementById("total-price");
  let checkOutBtn = document.getElementById("checkout-btn");
  let tPrice = 0;

  const products = [
    { name: "product1", id: 1, price: 99.9 },
    { name: "product2", id: 2, price: 79.9 },
    { name: "product3", id: 3, price: 84.9 },
    { name: "product4", id: 4, price: 294 },
  ];

  let cart = [];

  // Display products
  products.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <div class="myProduct">
        <span>${product.name} - $${product.price}</span>
        <button class="addBtn" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let productId = parseInt(e.target.getAttribute("data-id"));
      let product = products.find((p) => p.id === productId);
      if (product) {
        addToCart(product);
      }
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    tPrice = 0; // Reset price before recalculating

    if (cart.length > 0) {
      cart.forEach((item) => {
        tPrice += item.price;

        let cartItemDiv = document.createElement("div");
        cartItemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItemDiv);
      });

      totalPrice.innerHTML = ` $${tPrice.toFixed(2)}`;
      totalCart.classList.remove("hidden");
      emptyCart.classList.add("hidden");
    } else {
      emptyCart.classList.remove("hidden");
      totalCart.classList.add("hidden");
    }
  }
  checkOutBtn.addEventListener("click", () => {
    alert("check out successfully ");
    cart.length = 0;
    renderCart();
  });
});
