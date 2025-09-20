function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      document.getElementById('cartCount').textContent = totalCount;
}
updateCartCount(); // ← استدعاء عند تحميل الصفحة




const data = {
    "Privacy Policy": `
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
    qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam 
    quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
    quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
    `
    ,
    "Refund Policy": `
           "No refund or exchange for swimsuits except in the cases of defects",
                    "So please check our size chart well",
                    "Key Reasons for No Refund, No Exchange Policies:",
                    "Hygiene:",
                    "Products like underwear, swimwear can be unsanitary if returned after use.",
                    "Health and Safety:",
                    "Returning potentially contaminated items can pose health risks for other customers.",
                    "if you are in any way dissatisfied with the Goods you have ordered, You can return them to us and we will give you a full refund of the price of the Goods provided that:",
                    "- The Goods are returned to us \"as new\" i.e. unworn and unwashed with all labels, hygiene stickers and packaging intact, together with your invoice/ order number within 30 days of receipt of the Goods by you."
          `,
    "Shipping Policy": `
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
          `,
    "Terms & Conditions": `
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam,
          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`
};

const tabsContainer = document.getElementById('tabs');
const contentDiv = document.getElementById('content');

Object.keys(data).forEach((key, index) => {
    const tab = document.createElement('div');
    tab.className = 'tab';
    if (index === 0) tab.classList.add('active');
    tab.innerText = key;
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        contentDiv.innerHTML = data[key];
    });
    tabsContainer.appendChild(tab);
});

// Initial content
contentDiv.innerHTML = data[Object.keys(data)[0]];