function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.getElementById('cartCount').textContent = totalCount;
}
updateCartCount(); // ← استدعاء عند تحميل الصفحة



// Create and append Privacy Policy content dynamically

const section = document.getElementById("policy-section");

// Create and append heading
const heading = document.createElement("h2");
heading.textContent = "Privacy Policy";
section.appendChild(heading);

// Placeholder lorem text
const lorem = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam 
quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.`;

// Create and append 3 paragraphs
for (let i = 0; i < 3; i++) {
    const para = document.createElement("p");
    para.textContent = lorem;
    section.appendChild(para);
}