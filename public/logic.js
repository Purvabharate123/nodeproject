let cart = [];
let totalPrice = 0;

function addToCart(item, price, quantity) {
    const cartItem = cart.find(product => product.item === item);
    
    if (cartItem) {
        cartItem.quantity += quantity; 
    } else {
        cart.push({ item, price, quantity });
    }

    updateCart();
}

// Function to update the cart
function updateCart() {
    const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    totalPrice = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('total-price').textContent = `Rs. ${totalPrice.toFixed(2)}`;
}

// Function to handle the add to cart button click
document.querySelectorAll('button[data-product]').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        const qtyId = button.getAttribute('data-qty-id');
        const quantity = parseInt(document.getElementById(qtyId).value);

        if (quantity > 0) {
            addToCart(item, price, quantity);
        } else {
            alert('Please enter a valid quantity');
        }
    });
});

document.getElementById('payment-button').addEventListener('click', () => {
    if (totalPrice <= 0) {
        alert('Your cart is empty.');
        return;
    }


    alert(`Payment of Rs. ${totalPrice.toFixed(2)} successful!`);

    cart = [];
    totalPrice = 0;
    updateCart();
});
