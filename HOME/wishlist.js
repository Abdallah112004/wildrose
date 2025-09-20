function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = totalCount;
  }
}

const wishlistContainer = document.getElementById("wishlistContainer");
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function renderWishlist() {
  wishlistContainer.innerHTML = '';

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<p class="text-center">Your wishlist is empty.</p>';
  } else {
    wishlist.forEach(product => {
      wishlistContainer.innerHTML += `
        <div class="col-md-4">
          <div class="product-card bg-white">
            <a href="./details.html?id=${product.id}" class="product-link">
              <img src="${product.imgsrc}" alt="${product.title}" class="product-img">
              <h5 class="mt-3">${product.title}</h5>
              <p class="text-muted">${product.type}</p>
              <p class="text-danger fw-bold">${product.price}</p>
            </a>
            <button class="btn btn-primary mb-2" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
          </div>
        </div>
      `;
    });
  }
}

function clearWishlist() {
  if (confirm("Are you sure you want to clear your wishlist?")) {
    wishlist = [];
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderWishlist();
  }
}


function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    alert('This product is already in the cart.');
    return;
  }

  cart.push({ ...product, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Product added to cart!');
}

renderWishlist();
updateCartCount();


function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistCountElement = document.getElementById('wishlistCount');
  if (wishlistCountElement) {
    wishlistCountElement.textContent = wishlist.length;
  }
}
renderWishlist();
updateCartCount();
updateWishlistCount(); // ✅ لتحديث عداد المفضلة عند تحميل الصفحة


function clearWishlist() {
  if (confirm("Are you sure you want to clear your wishlist?")) {
    wishlist = [];
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderWishlist();
    updateWishlistCount(); // ✅ لتحديث العداد بعد الحذف
  }
}
