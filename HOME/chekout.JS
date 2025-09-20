let checkoutItems = JSON.parse(localStorage.getItem("cart")) || [];
let allProducts = [];
let container = document.getElementById("checkoutItems");

// جلب المنتجات من ملف home.json
fetch('./home.json')
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    displayCheckoutItems();
  });

// عرض المنتجات داخل صفحة checkout
function displayCheckoutItems() {
  if (checkoutItems.length === 0) {
    container.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  const content = checkoutItems.map(item => {
    const product = allProducts.find(p => p.id === item.id);
    if (!product) return '';

    const price = parseFloat(product.price.replace('$', '')) || 0;
    total += price;

    return `
      <div class="product-summary d-flex align-items-center">
        <img src="${product.imgsrc}" alt="${product.title}">
        <div class="flex-grow-1">
          <h5>${product.title}</h5>
          <p class="mb-1"><strong>Size:</strong> ${item.size}</p>
          <p class="mb-1"><strong>Type:</strong> ${product.type}</p>
          <p class="mb-0 text-danger fw-bold">Price: $${price.toFixed(2)}</p>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = content + `
    <div class="text-end mt-3">
      <h5>Total: <span class="text-success">$${total.toFixed(2)}</span></h5>
    </div>
  `;
}

// تأكيد الطلب
function confirmOrder() {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;
  const notes = document.getElementById("notes").value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  if (!name || !email || !address || !phone || !country) {
    alert("Please fill in all required customer details.");
    return;
  }

  alert(`Thank you, ${name}! Your order using "${paymentMethod}" has been confirmed.`);
  localStorage.removeItem("cart");
  window.location.href = "./home.html";
}
