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


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

var xhr = new XMLHttpRequest();
xhr.open("GET", "./home.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let products = JSON.parse(xhr.response);
        let product = products.find(p => p.id == productId);

        if (product) {
            displayDetails(product);
        } else {
            document.getElementById('productDetails').innerHTML = "<h3>Product not found.</h3>";
        }
    }
};
xhr.send();

function displayDetails(product) {
    let container = document.getElementById('productDetails');
    container.innerHTML = `
      <div class="row g-4">
        <div class="col-md-6 text-center">
          <img src="${product.imgsrc}" alt="${product.title}" class="img-fluid product-image">
        </div>
        <div class="col-md-6">
          <h2 class="mb-3">${product.title}</h2>
          <p class="text-muted">${product.type}</p>
          <h4 class="text-danger mb-4">${product.price}</h4>

          <div class="mb-3">
            <label for="sizeSelect" class="form-label">Select Size</label>
            <select class="form-select" id="sizeSelect">
              <option value="XS">XS</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
              <option value="4XL">4XL</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="quantityInput" class="form-label">Quantity</label>
            <input type="number" class="form-control w-50" id="quantityInput" value="1" min="1">
          </div>

          <div class="btn-action-group d-flex flex-wrap gap-3">
            <button class="btn btn-success" onclick="addToCart(${product.id})">
              <i class="bi bi-cart-plus"></i> Add to Cart
            </button>

            <button class="btn btn-outline-danger" onclick="addToWishlist(${product.id})">
              <i class="bi bi-heart"></i> Add to Wishlist
            </button>

            <a href="index.html" class="btn btn-secondary">
              <i class="bi bi-arrow-left"></i> Back
            </a>
          </div>
        </div>
      </div>
    `;
}

function addToCart(id) {
    const selectedSize = document.getElementById('sizeSelect').value;
    const quantity = parseInt(document.getElementById('quantityInput').value);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./home.json", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let products = JSON.parse(xhr.response);
            let product = products.find(p => p.id == id);

            if (product) {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];

                let exists = cart.find(item => item.id === product.id && item.size === selectedSize);

                if (exists) {
                    alert("This product with the selected size is already in the cart.");
                } else {
                    cart.push({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        imgsrc: product.imgsrc,
                        size: selectedSize,
                        quantity: quantity
                    });

                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert("Product added to cart!");
                    // window.location.href = "../HOME/cart.html";
                }
            }
        }
    };
    xhr.send();
}
updateCartCount(); // ← يحدث العدد مباشرة بعد الإضافة


function addToWishlist(id) {
    const selectedSize = document.getElementById('sizeSelect')?.value || 'Default';

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./home.json", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let products = JSON.parse(xhr.response);
            let product = products.find(p => p.id == id);

            if (product) {
                let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

                let exists = wishlist.find(item => item.id === product.id && item.size === selectedSize);

                if (exists) {
                    alert("This product with the selected size is already in your wishlist.");
                    // لا يتم التوجيه إلى صفحة المفضلة هنا
                } else {
                    wishlist.push({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        imgsrc: product.imgsrc,
                        type: product.type,
                        size: selectedSize
                    });

                    localStorage.setItem('wishlist', JSON.stringify(wishlist));
                    alert("Product added to wishlist!");
                    // window.location.href = "../HOME/wishlist.html"; // فقط عند الإضافة الجديدة
                }
            }
        }
    };
    xhr.send();
}




