
document.addEventListener("DOMContentLoaded", () => {
const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();

const flag = sessionStorage.getItem("justSubmitted");
let itemCount = 0;

if (flag === "true") {
    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    sessionStorage.setItem("lastPurchaseCount", itemCount);


    localStorage.removeItem("shoppingCart");

    sessionStorage.removeItem("justSubmitted");
} else {

    itemCount = sessionStorage.getItem("lastPurchaseCount") || 0;
}

    document.getElementById("review-count").textContent = itemCount;
});