
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    document.querySelector("#currentyear").textContent = today.getFullYear();

    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (itemCount === 0) {
        document.getElementById("arigatou").textContent = "You haven't purchased anything...";
    }

    document.getElementById("review-count").textContent = itemCount;

    localStorage.removeItem("shoppingCart");
});