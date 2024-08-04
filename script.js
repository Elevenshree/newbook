function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cartItems');
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - ${productPrice.toFixed(2)}`;
    cartItems.appendChild(listItem);
}
