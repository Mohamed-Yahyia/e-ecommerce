// Get HTML elements
const cartItems = document.getElementById('cart-items');
const discountCodeInput = document.getElementById('discount-code');
const applyDiscountBtn = document.getElementById('apply-discount');
const cartTotal = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout');
updateCartTotal()

// Define cart variable
let cart = [];

// Add event listeners
applyDiscountBtn.addEventListener('click', applyDiscount);
checkoutBtn.addEventListener('click', checkout);
cartItems.addEventListener('input', updateCart);
var count = 0;
// Define functions
function applyDiscount() {
  
  const discountCode = discountCodeInput.value;
  if ( count === 0 ) {
  // Replace this with your own logic to apply discounts
  if (discountCode === 'DIS10') {
    const total = Number(cartTotal.innerHTML.replace('EGP', ''));
    const discountedTotal = total * 0.9;
    cartTotal.innerHTML = `${discountedTotal.toFixed(2)}`;
    count = 1;
  }
  }
}

function checkout() {
  // Replace this with your own checkout logic
  window.open("../payment/index.html", "_blank");
  // alert('Checkout complete!');
 
};

function updateCart(event) {
  const input = event.target;
  if (input.classList.contains('quantity-input')) {
    const tr = input.closest('tr');
    const priceTd = tr.querySelector('td:nth-child(3)');
    const price = Number(priceTd.innerHTML.replace('EGP', ''));
    const quantity = Number(input.value);
    const subtotal = price * quantity;
    const subtotalTd = tr.querySelector('td:nth-child(5)');
    subtotalTd.innerHTML = `${subtotal.toFixed(2)} EGP`;
    updateCartTotal();
  }

};

// Call updateCart() for each input with the class "quantity-input" to update the subtotals when the page loads
const quantityInputs = document.querySelectorAll('.quantity-input');

quantityInputs.forEach(input => {
  const tr = input.closest('tr');
  const priceTd = tr.querySelector('td:nth-child(3)').value;
  const price = Number(priceTd.innerHTML);
  const quantity = Number(input.value);
  const subtotal = price * quantity;
  const subtotalTd = tr.querySelector('td:nth-child(5)');
  subtotalTd.innerHTML = `ُ${subtotal.toFixed(2)} EGP`;
});


// Call updateCartTotal() to update the total cart price when the page loads
updateCartTotal();

function updateCartTotal() {
    
  let total = 0;
  cartItems.querySelectorAll('tr').forEach((tr) => {
    const subtotalTd = tr.querySelector('td:nth-child(5)');
    const subtotal = Number(subtotalTd.innerHTML.replace('EGP', ''));
    total += subtotal;
  });
  cartTotal.innerHTML = `${total.toFixed(2)}`;
}

let itmes = [];
let items = JSON.parse(localStorage.getItem('cartitems'));
let item = JSON.parse(localStorage.getItem('cartitem'));
for (let i = 0; i < items.length; i++) {
  itmes.push(items[i]);
}
for (let i = 0; i < item.length; i++) {
  itmes.push(item[i]);
}

console.log(itmes)


function showitmes (){
    let crt = ''
    for (let x = 0; x < itmes.length; x++) {
      crt += `
      <tr>
        <td>
          <img class="itemimg" src="${itmes[x].images}">
        </td>
        <td>${itmes[x].name}</td>
        <td>${itmes[x].newprice}</td>
        <td>
          <input type="number" class="quantity-input" value='${1}' min="1">
        </td>
        <td></td>
      </tr>     
      `;
      document.getElementById('cart-items').innerHTML = crt;
    }
  
};
showitmes ();


