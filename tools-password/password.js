
const passwordOutput = document.getElementById("password");

const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const message = document.getElementById("message");

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

function generatePassword() {

    const length = Number(lengthInput.value);

    const options = [
        {
            id: "uppercase",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        },
        {
            id: "lowercase",
            chars: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            id: "numbers",
            chars: "0123456789"
        },
        {
            id: "symbols",
            chars: "!@#$%^&*()_+-=[]{}"
        }
    ];

    const selected = options.filter(option =>
        document.getElementById(option.id).checked
    );

    if (selected.length === 0) {
        message.textContent = "Select at least one option!";
        return;
    }

    const allChars = selected.map(option => option.chars).join("");

    const chars = [
        ...selected.map(option => {
            const array = new Uint32Array(1);
            crypto.getRandomValues(array);
            return option.chars[array[0] % option.chars.length];
        })
    ];

    while (chars.length < length) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        chars.push(allChars[array[0] % allChars.length]);
    }

    for (let i = chars.length - 1; i > 0; i--) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        const j = array[0] % (i + 1);

        [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    passwordOutput.value = chars.join("");

    message.textContent = "Password generated successfully!";
}

async function copyPassword() {

    if (!passwordOutput.value) {
        message.textContent = "Generate a password first!";
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordOutput.value);
        message.textContent = "Password copied!";
    } catch {
        message.textContent = "Copy is unavailable in this browser context.";
    }
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

generatePassword();
