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


let allProducts = [];

var xhr = new XMLHttpRequest();
xhr.open("GET", "./test1.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let product = JSON.parse(xhr.response);
        allProducts = product;
        displayProducts(allProducts);
    }
};
xhr.send();

function displayProducts(productList) {
    let right_side = document.getElementById('right');
    right_side.innerHTML = "";

    for (let key of productList) {
        let div = document.createElement('div');
        div.className = "col-lg-4 col-md-6 col-12 mb-4 d-flex align-items-stretch";

        let card = document.createElement('div');
        card.className = "product-card";

        card.addEventListener('click', () => {
            window.location.href = `details.html?id=${key.id}`;
        });


        let img = document.createElement('img');
        img.src = key.imgsrc;
        card.appendChild(img);

        let htype = document.createElement('h5');
        htype.innerText = key.type;
        htype.style.color = 'brown';
        card.appendChild(htype);

        let h3 = document.createElement('h3');
        h3.innerText = key.title;
        card.appendChild(h3);

        let h4 = document.createElement('h4');
        h4.innerText = key.price;
        card.appendChild(h4);



        div.appendChild(card);
        right_side.appendChild(div);
    }
}

const sizeButtons = document.querySelectorAll('#sizeFilter button');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedSize = button.getAttribute('data-size');
        const filtered = allProducts.filter(item => item.size.toUpperCase() === selectedSize.toUpperCase());
        displayProducts(filtered);
    });
});

document.getElementById('showAll').addEventListener('click', () => {
    displayProducts(allProducts);
});




fetch('./test1.json')
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