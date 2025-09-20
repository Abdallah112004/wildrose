function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = totalCount;
  }
}

function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistCountElement = document.getElementById('wishlistCount');
  if (wishlistCountElement) {
    wishlistCountElement.textContent = wishlist.length;
  }
}

function clearWishlist() {
  if (confirm("Are you sure you want to clear your wishlist?")) {
    const wishlist = []; // ← استخدم const أو let بدلاً من إعادة تعيين متغير خارجي
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderWishlist();           // ← افترض أن هذه الدالة تعرض المفضلة
    updateWishlistCount();     // ← تحديث العداد
  }
}

// ← استدعاء الدوال عند تحميل الصفحة
updateCartCount();
updateWishlistCount();
// renderWishlist();



const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    const container = document.getElementById("cartItems");

    if (cartItems.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "col-md-4";

        div.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${item.imgsrc}" class="card-img-top" alt="${item.title}" style="height: 250px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.type}</p>
          <h6 class="text-danger">${item.price}</h6>
          <p><strong>Size:</strong> ${item.size}</p>
        </div>
      </div>
    `;
        container.appendChild(div);
    });
}

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}

displayCart();




fetch('./home.json')
  .then(res => res.json())
  .then(data => {
    allProducts = data;
  });

const searchInput = document.getElementById('searchInput');
const resultsBox = document.getElementById('searchResults');

// البحث أثناء الكتابة
searchInput.addEventListener('input', function () {
  let keyword = this.value.toLowerCase();

  if (keyword === '') {
    resultsBox.innerHTML = '';
    return;
  }

  let filtered = allProducts.filter(product =>
    product.title.toLowerCase().includes(keyword)
  );

  if (filtered.length === 0) {
    resultsBox.innerHTML = '<div class="result-item">No products found.</div>';
  } else {
    resultsBox.innerHTML = filtered.map(product => `
        <div class="result-item" onclick="window.location.href='details.html?id=${product.id}'">
            <img src="${product.imgsrc}" alt="${product.title}">
            <span>${product.title}</span>
        </div>
    `).join('');
  }
});

// إغلاق نتائج البحث عند الضغط في أي مكان بالخارج
document.addEventListener('click', function (event) {
  const isClickInsideInput = searchInput.contains(event.target);
  const isClickInsideResults = resultsBox.contains(event.target);

  if (!isClickInsideInput && !isClickInsideResults) {
    resultsBox.innerHTML = '';
  }
});


