function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.getElementById('cartCount').textContent = totalCount;
}
updateCartCount(); // ← استدعاء عند تحميل الصفحة


const container = document.getElementById("terms-container");

// Create and append the title
const title = document.createElement("h2");
title.textContent = "Terms & Conditions";
container.appendChild(title);

// The paragraph content
const paragraphText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`;

// Append the same paragraph 3 times
for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    p.className = "terms-paragraph";
    p.textContent = paragraphText;
    container.appendChild(p);
}


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
