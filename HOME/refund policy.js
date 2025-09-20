function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.getElementById('cartCount').textContent = totalCount;
}
updateCartCount(); // ← استدعاء عند تحميل الصفحة



const container = document.getElementById("refund-policy");

// Title
const title = document.createElement("h2");
title.textContent = "Refund Policy";
container.appendChild(title);

// Content paragraphs
const paragraphs = [
    "No refund or exchange for swimsuits except in the cases of defects",
    "So please check our size chart well",
    "Key Reasons for No Refund, No Exchange Policies:",
    "Hygiene:",
    "Products like underwear, swimwear can be unsanitary if returned after use.",
    "Health and Safety:",
    "Returning potentially contaminated items can pose health risks for other customers.",
    "if you are in any way dissatisfied with the Goods you have ordered, You can return them to us and we will give you a full refund of the price of the Goods provided that:",
    "- The Goods are returned to us \"as new\" i.e. unworn and unwashed with all labels, hygiene stickers and packaging intact, together with your invoice/ order number within 30 days of receipt of the Goods by you."
];

// Add each paragraph
paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    container.appendChild(p);
});
