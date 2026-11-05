const textInput = document.getElementById("textInput");
const clearBtn = document.getElementById("clearBtn");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const charNoSpaces = document.getElementById("charNoSpaces");
const lineCount = document.getElementById("lineCount");
const readingTime = document.getElementById("readingTime");

function updateStats() {
    const text = textInput.value;

    // Word count
    const words = text.trim().length === 0
        ? 0
        : text.trim().split(/\s+/u).length;

    // Character count
    const characters = [...text].length;

    // Characters without spaces
    const noSpaces = [...text.replace(/\s/gu, "")].length;

    // Line count
    const lines = text.length === 0
        ? 0
        : text.split(/\r\n|\r|\n/).length;

    // Reading time (200 words per minute)
    const minutes = Math.ceil(words / 200);

    wordCount.textContent = words;
    charCount.textContent = characters;
    charNoSpaces.textContent = noSpaces;
    lineCount.textContent = lines;

    readingTime.textContent = words === 0
        ? "0 min"
        : minutes + (minutes === 1 ? " min" : " min");
}

// Update while typing
textInput.addEventListener("input", updateStats);

// Clear button
clearBtn.addEventListener("click", function() {
    textInput.value = "";
    updateStats();
});

updateStats();
