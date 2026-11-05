
const searchInput = document.getElementById("toolSearch");

const toolCards = document.querySelectorAll(".tool-card");

searchInput.addEventListener("input", function () {

    const query = this.value.toLowerCase().trim();

    toolCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(query)
            ? "block"
            : "none";

    });

});
