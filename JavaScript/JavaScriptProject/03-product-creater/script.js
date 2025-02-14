document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const gridTable = document.getElementById("grid-table");
    const toast = document.getElementById("toast");

    // Load and render saved cards on page load
    const savedCards = getSavedCards(); // Safely fetch saved cards
    savedCards.forEach(renderData);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form input values
        const productName = document.getElementById("product-name").value.trim();
        const productPrice = document.getElementById("product-price").value.trim();
        const productDescription = document.getElementById("product-description").value.trim();
        const productImage = document.getElementById("product-image").value.trim();

        // Validate fields
        if (!productName || !productPrice || !productDescription || !productImage) {
            showToast();
            return;
        }

        // Create new card data
        const cardData = {
            name: productName,
            price: productPrice,
            description: productDescription,
            image: productImage,
        };

        // Save to localStorage
        const cards = getSavedCards(); // Fetch saved cards
        cards.push(cardData);
        localStorage.setItem("productCard", JSON.stringify(cards));

        // Render the new card
        renderData(cardData);

        // Reset form values
        form.reset();
    });

    // Function to safely fetch saved cards from localStorage
    function getSavedCards() {
        try {
            const cards = JSON.parse(localStorage.getItem("productCard"));
            return Array.isArray(cards) ? cards : []; // Ensure it returns an array
        } catch {
            return []; // Return an empty array if JSON parsing fails
        }
    }

    // Function to render a product card
    function renderData(data) {
        const gridCard = document.createElement("div");
        gridCard.classList.add(
            "bg-black/40",
            "shadow-lg",
            "rounded-lg",
            "overflow-hidden"
        );
        gridCard.innerHTML = `
            <img src="${data.image}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h2 class="text-lg font-semibold">${data.name}</h2>
                <h2 class="text-3xl font-semibold">₹ ${data.price}</h2>
                <p class="text-gray-600 mt-2">${data.description}</p>
            </div>
        `;
        gridTable.appendChild(gridCard);
    }

    // Function to show toast notifications
    function showToast() {
        toast.classList.remove("hidden")
        toast.classList.add("block");
        setTimeout(() => {
            toast.classList.remove("block")
            toast.classList.add("hidden");   
        }, 3000);
        const input = document.querySelectorAll('input');
        input.forEach((e) => {
            e.classList.add("error")
            setTimeout(() => {
                e.classList.remove("error")   
            }, 3000);
        })
        const textarea = document.querySelector('textarea');
        textarea.classList.add("error");
        setTimeout(() => {
            textarea.classList.remove("error")   
        }, 3000);
    }
});
