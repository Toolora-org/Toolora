
// 1. Percentage of a number

const percentInput = document.getElementById("percent");
const numberInput = document.getElementById("number");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
    const percent = Number(percentInput.value);
    const number = Number(numberInput.value);

    if (percentInput.value.trim() === "" || numberInput.value.trim() === "") {
        result.textContent = "Please enter both values";
        return;
    }

    const answer = (percent / 100) * number;

    result.textContent = "Result: " + answer.toLocaleString("en-US");
});


// 2. What percentage is X of Y?

const valueX = document.getElementById("valueX");
const valueY = document.getElementById("valueY");
const calculateRatioBtn = document.getElementById("calculateRatioBtn");
const ratioResult = document.getElementById("ratioResult");

calculateRatioBtn.addEventListener("click", function () {
    const x = Number(valueX.value);
    const y = Number(valueY.value);

    if (valueX.value.trim() === "" || valueY.value.trim() === "") {
        ratioResult.textContent = "Please enter both values";
        return;
    }

    if (y === 0) {
        ratioResult.textContent = "Cannot divide by zero";
        return;
    }

    const answer = (x / y) * 100;

    ratioResult.textContent = "Result: " + answer.toFixed(2) + "%";
});


// 3. Increase or decrease by percentage

const baseNumber = document.getElementById("baseNumber");
const changePercent = document.getElementById("changePercent");
const operation = document.getElementById("operation");
const changeBtn = document.getElementById("changeBtn");
const changeResult = document.getElementById("changeResult");

changeBtn.addEventListener("click", function () {
    const number = Number(baseNumber.value);
    const percent = Number(changePercent.value);

    if (baseNumber.value.trim() === "" || changePercent.value.trim() === "") {
        changeResult.textContent = "Please enter both values";
        return;
    }

    const multiplier = operation.value === "increase"
        ? 1 + percent / 100
        : 1 - percent / 100;

    const answer = number * multiplier;

    changeResult.textContent = "Result: " + answer.toLocaleString("en-US");
});
