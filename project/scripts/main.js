// Utility to create a product card
function createProductCard(product) {
    return `
    <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        </div>
    `;
}

// Load Featured Products
fetch('data/products.json')
.then(response => response.json())
.then(data => {
    const featuredContainer = document.getElementById('featured-products');
    data.featured.forEach(product => {
        featuredContainer.innerHTML += createProductCard(product);
    });
    })
    .catch(error => console.error('Error loading featured products:', error));

// Load Categories and Products
fetch('data/categories.json')
    .then(response => response.json())
    .then(data => {
        const categoryList = document.getElementById('category-list');
        const categoryProducts = document.getElementById('category-products');
        
        data.categories.forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.textContent = category.name;
            categoryButton.onclick = () => {
                categoryProducts.innerHTML = category.products 
                .map(product => createProductCard(product)).join('');
        };
        categoryList.appendChild(categoryButton);
    });
    })
    .catch(error => console.error('Error loading categories:', error));

// Load Most Viewed Products
fetch('data/most-viewed.json')
    .then(response => response.json())
    .then(data => {
        const mostViewedContainer = document.getElementById('most-viewed-products');
        data.mostViewed.forEach(product => {
            mostViewedContainer.innerHTML += createProductCard(product);
        });
    })
    .catch(error => console.error('Error loading most viewed products:', error));

  // Update Footer Dates
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
