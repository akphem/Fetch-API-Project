// script.js

async function fetchDataAndStore() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        localStorage.setItem("products", JSON.stringify(data));
        data.forEach(product => {
            createCard(product);
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function createCard(product) {
    const container = document.getElementById('product-container');
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <h2 class="product-title">${product.title}</h2>
        <img class="product-image" src="${product.image}" alt="${product.title}">
        <p class="product-description">${product.description}</p>
        <p class="product-price">$${product.price}</p>
    `;
    container.appendChild(card);
}

fetchDataAndStore();
