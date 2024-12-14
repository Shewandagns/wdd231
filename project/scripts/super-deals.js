document.addEventListener('DOMContentLoaded', function () {
    const dealsData = [
        {
            "title": "iPhone 14 Pro",
            "description": "Latest model with 5G support, 128GB storage.",
            "price": "$950",
            "discount": 20,
            "image": "images/i14-pro.jpg"
        },
        {
            "title": "Samsung Galaxy S24 Ultra",
            "description": "High-performance laptop with 16GB RAM.",
            "price": "900",
            "discount": 15,
            "image": "images/s24_ultra.jpg"
        },
        {
            "title": "iPhone 12 PRO MAX",
            "description": "Noise-canceling headphones with amazing sound quality.",
            "price": "$550",
            "discount": 10,
            "image": "images/i12_pro_max.jpg"
        },
        {
            "title": "ipad mini 7",
            "description": "Noise-canceling headphones with amazing sound quality.",
            "price": "$670",
            "discount": 10,
            "image": "images/ipad_mini.webp"
        },
        {
            "title": "ipad Pro M2",
            "description": "Latest model with 5G support, 128GB storage.",
            "price": "$1200",
            "discount": 20,
            "image": "images/ipad_pro.webp"
        },
        {
            "title": "Galaxy Tab S7",
            "description": "Latest model with 5G support, 128GB storage.",
            "price": "$465",
            "discount": 20,
            "image": "images/tab-s7.jpg"
        }        
    ];

    const dealsList = document.getElementById('deals-list');

    dealsData.forEach(deal => {
        const dealCard = document.createElement('div');
        dealCard.classList.add('deal-card');

        // Calculate the discounted price
        const originalPrice = parseFloat(deal.price.replace('$', ''));
        const discountAmount = (deal.discount / 100) * originalPrice;
        const discountedPrice = originalPrice - discountAmount;

        // Format the prices
        const formattedOriginalPrice = `$${originalPrice.toFixed(2)}`;
        const formattedDiscountedPrice = `$${discountedPrice.toFixed(2)}`;

        dealCard.innerHTML = `
            <img src="${deal.image}" alt="${deal.title}">
            <h3>${deal.title}</h3>
            <p>${deal.description}</p>
            <div class="price">
                <span class="original-price">${formattedOriginalPrice}</span>
                <span class="discounted-price">${formattedDiscountedPrice}</span>
            </div>
        `;

        dealsList.appendChild(dealCard);
    });

    // Set the current year and last modified date in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
