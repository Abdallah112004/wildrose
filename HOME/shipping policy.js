function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.getElementById('cartCount').textContent = totalCount;
}
updateCartCount(); // ← استدعاء عند تحميل الصفحة


document.getElementById("mydiv").innerHTML += `
<h1>Shipping Policy</h1>
<p>Orders are shipped and delivered within 4-5 working days from placing your order in Cairo, Giza, Alexandria and up to 6 working days in other cities.</p>
<p>Courier company will contact you before coming to arrange delivery time. They give you 3 attempts, if they didn’t reach you the package will get back to our warehouse.</p>
<p>The exchange or return process requires the following steps:</p>
<p>The courier delivers the package to your doorstep and it is NOT allowed to be opened, however you can send to us your issue evern to exchange the size or RETURN your order on just 2 DAYS .</p>
<p>After 2 days we can not exchange or return SWIMSUIT </p>
<p>You send us on Instagram with your order number and request (exchange or return) within 2 days MAXIMUM from receiving your order. A courier will come pickup your order (NOTE: IT HAS TO BE IN THE SAME CONDITION AS SUPPLIED WITH TICKET AND ORIGINAL PACKAGING).</p>
<p>We receive the package, inspect it and make sure it has all the pieces supplied in their original condition, ticket and original packaging and then proceed with sending you the new order (in case of exchange request) or send you back your money as a bank transfer (in case of return request)..</p>
<p>Please note that for exchanges, shipping fees is paid again when courier delivers the exchange item and for returns, shipping fees will be deducted from the total refunded amount..</p>
<p>Please note that the duration of return and exchange is in accordance to the type of garment our brand sells. Also, because we are very keen to provide all our customers with a fair experience, we have NO EXCEPTIONS under any condition for changes to the above policy.</p>
<p>Thank you for understanding.</p>
`;
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
