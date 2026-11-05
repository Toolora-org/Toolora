const category = document.getElementById("category");
const inputValue = document.getElementById("inputValue");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

const units = {
    length: {
        Meter: 1,
        Kilometer: 1000,
        Centimeter: 0.01,
        Millimeter: 0.001,
        Mile: 1609.344,
        Foot: 0.3048,
        Inch: 0.0254
    },

    weight: {
        Gram: 1,
        Kilogram: 1000,
        Milligram: 0.001,
        Pound: 453.59237,
        Ounce: 28.349523125
    },

    temperature: {
        Celsius: "C",
        Fahrenheit: "F",
        Kelvin: "K"
    },

    data: {
        Byte: 1,
        KB: 1024,
        MB: 1024 ** 2,
        GB: 1024 ** 3,
        TB: 1024 ** 4
    },

    speed: {
        "Meter/second": 1,
        "Kilometer/hour": 1 / 3.6,
        "Mile/hour": 0.44704,
        "Foot/second": 0.3048
    }
};

function updateUnits() {
    const selectedCategory = category.value;
    const availableUnits = Object.keys(units[selectedCategory]);

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    availableUnits.forEach(function(unit) {
        fromUnit.add(new Option(unit, unit));
        toUnit.add(new Option(unit, unit));
    });

    if (availableUnits.length > 1) {
        toUnit.selectedIndex = 1;
    }

    result.textContent = "---";
}

function convertTemperature(value, from, to) {
    let celsius;

    if (from === "Celsius") {
        celsius = value;
    } else if (from === "Fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    } else {
        celsius = value - 273.15;
    }

    if (to === "Celsius") return celsius;
    if (to === "Fahrenheit") return celsius * 9 / 5 + 32;
    return celsius + 273.15;
}

function convert() {
    if (inputValue.value.trim() === "") {
        result.textContent = "Please enter a value";
        return;
    }

    const value = Number(inputValue.value);

    if (!Number.isFinite(value)) {
        result.textContent = "Enter a valid number";
        return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;
    const selectedCategory = category.value;

    let answer;

    if (selectedCategory === "temperature") {
        answer = convertTemperature(value, from, to);
    } else {
        const conversionUnits = units[selectedCategory];
        answer = value * conversionUnits[from] / conversionUnits[to];
    }

    result.textContent = answer.toLocaleString("en-US", {
        maximumFractionDigits: 8
    }) + " " + to;
}

category.addEventListener("change", updateUnits);
convertBtn.addEventListener("click", convert);

updateUnits();