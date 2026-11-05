const minInput = document.getElementById("minNumber");
const maxInput = document.getElementById("maxNumber");
const quantityInput = document.getElementById("quantity");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const result = document.getElementById("result");

generateBtn.addEventListener("click", function () {
    const min = Number(minInput.value);
    const max = Number(maxInput.value);
    const quantity = Number(quantityInput.value);

    if (
        minInput.value.trim() === "" ||
        maxInput.value.trim() === "" ||
        quantityInput.value.trim() === ""
    ) {
        result.textContent = "Please fill in all fields";
        return;
    }

    if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
        result.textContent = "Enter valid whole numbers";
        return;
    }

    if (min > max) {
        result.textContent = "Minimum cannot exceed maximum";
        return;
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100) {
        result.textContent = "Quantity must be from 1 to 100";
        return;
    }

    const numbers = [];

    for (let i = 0; i < quantity; i++) {
        const randomNumber = Math.floor(
            Math.random() * (max - min + 1)
        ) + min;

        numbers.push(randomNumber);
    }

    result.textContent = numbers.join(", ");
});

copyBtn.addEventListener("click", async function () {
    const text = result.textContent;

    if (text === "---" || text.startsWith("Please") ||
        text.startsWith("Minimum") || text.startsWith("Enter") ||
        text.startsWith("Quantity")) {
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy Result";
        }, 1500);
    } catch {
        copyBtn.textContent = "Copy failed";
    }
});