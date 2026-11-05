const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.getElementById("qrcode");

generateBtn.addEventListener("click", function () {
    const text = qrInput.value.trim();

    if (!text) {
        alert("Enter text or URL!");
        return;
    }

    if (typeof QRCode === "undefined") {
        alert("QR library failed to load. Check your internet connection.");
        return;
    }

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: text,
        width: 220,
        height: 220,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.style.display = "block";
});

downloadBtn.addEventListener("click", function () {
    const canvas = qrContainer.querySelector("canvas");

    if (canvas) {
        const link = document.createElement("a");
        link.download = "toolora-qrcode.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }
});