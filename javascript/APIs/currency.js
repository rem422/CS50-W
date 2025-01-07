document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then((response) => response.json())
        .then((data) => {
        const currency = documennt
        .querySelector("#currency")
        .value.toUpperCase();
        const rate = data.rates[currency];

        if (rate !== undefined) {
            document.querySelector("#result").innerHTML = `1 USD is equal to ${rate.toFixed()} ${currency}.`;
        } else {
            document.querySelector("#result").innerHTML = "Invalid currency.";
        }
        })
        .catch((error) => {
            console.log("Error:", error);
        });

        return false;
    });
});
