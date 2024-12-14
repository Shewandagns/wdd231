document.addEventListener("DOMContentLoaded", () => {
    // Populate dynamic sections
    const topics = [
        { title: "Account Issues", description: "Learn how to manage your account." },
        { title: "Shipping & Delivery", description: "Information about shipping and delivery." },
        { title: "Payment Methods", description: "Help with making payments." }
    ];
    
    const faqList = [
        { question: "How do I create an account?", answer: "Click on 'Sign Up' and fill in your details." },
        { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and more." },
        { question: "How do I track my order?", answer: "You can track your order under 'Order History'." }
    ];
    
    const solutions = [
        { title: "Troubleshooting Account Issues", description: "Fix common problems with your account." },
        { title: "How to Change Your Shipping Address", description: "A step-by-step guide to update your address." },
        { title: "Payment Troubleshooting", description: "Resolve issues with payments or payment failures." }
    ];
    
    const topicsContainer = document.getElementById("topics");
    topics.forEach(topic => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${topic.title}</h3><p>${topic.description}</p>`;
        topicsContainer.appendChild(div);
    });
    
    const faqContainer = document.getElementById("faq-list");
    faqList.forEach(faq => {
        const li = document.createElement("li");
        li.innerHTML = `<button onclick="alert('${faq.answer}')">${faq.question}</button>`;
        faqContainer.appendChild(li);
    });
    
    const solutionsContainer = document.getElementById("solutions");
    solutions.forEach(solution => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${solution.title}</h3><p>${solution.description}</p>`;
        solutionsContainer.appendChild(div);
    });

    // Set current year and last modified date
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
});
