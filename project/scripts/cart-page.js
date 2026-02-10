const usdFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

function capitalize(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const form = document.querySelector("form")
form.addEventListener("submit", () => {
    sessionStorage.setItem("justSubmitted", "true");
})

let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

function displayShoppingCart(list){

    document.getElementById("zenken-sakujo").disabled = shoppingCart.length === 0;
    document.getElementById("soushin-suru").disabled = shoppingCart.length === 0;


    let totalPrice = 0;
    let numIndex = 0;
    let shoppingCartGrid = document.querySelector(".item-grid");
    shoppingCartGrid.innerHTML = "";
    let priceTotalTag = document.createElement("p");
    

    list.forEach(listed => {
        let section = document.createElement("section");
        let headerTwo = document.createElement("h2");
        let paragraph = document.createElement("p");
        let kuniKara = document.createElement("p")
        let deleteButton = document.createElement("button");
        let quantityDiv = document.createElement("div");
        let deleteDiv = document.createElement("div");

        quantityDiv.innerHTML = quantityDiv.innerHTML = `
            <label for="${listed.product.id}">Quantity:</label>
            <input 
                type="number" 
                min="1" 
                max="100" 
                value="${listed.quantity}"
                data-id="${listed.product.id}"
                name="${listed.product.id}"
                id="${listed.product.id}"
                class="quantity-input"

            />
            `;


        numIndex++
        headerTwo.innerHTML = `${numIndex}. ${listed.product.name}`
        let priceTimesQuantity = listed.product.price * listed.quantity;

        if (listed.quantity > 1) {
            paragraph.innerHTML = `
            ${usdFormat.format(listed.product.price)} x ${listed.quantity} =
            <br><span class="japanese">${usdFormat.format(priceTimesQuantity)}</span>
            `;
        } else {
            paragraph.innerHTML = `
            Price:<br>
            <span class="japanese">${usdFormat.format(listed.product.price)}</span>
            `;
        }


        deleteButton.setAttribute("data-id", listed.product.id);
        deleteButton.setAttribute("id", "sakujo");
        deleteButton.setAttribute("onclick", "sakujoShimasu(this)");
        deleteButton.innerHTML = `<span class="japanese">削除</span> / Delete`;
        deleteDiv.classList.add("delete");
        kuniKara.setAttribute("id", listed.product.country)
        kuniKara.innerHTML = `<span class="japanese">${capitalize(listed.product.category)}</span> <br> From: <br><span class="japanese"></span>`
        

        section.append(headerTwo);
        section.append(quantityDiv);
        section.append(kuniKara);
        section.append(paragraph);
        
        deleteDiv.append(deleteButton);
        
        section.append(deleteDiv);
        shoppingCartGrid.append(section)

        totalPrice = totalPrice + priceTimesQuantity;
    });

    if (totalPrice === 0){
        priceTotalTag.innerHTML = `Your Shopping Cart is Empty`;
    } else {
        priceTotalTag.innerHTML = `Your Shopping Cart Total: <br><span class="japanese"> ${usdFormat.format(totalPrice)}</span>`;
    }
    
    shoppingCartGrid.append(priceTotalTag);
}

document.addEventListener("input", (e) => {
    if (!e.target.classList.contains("quantity-input")) return;

    const productId = e.target.dataset.id;
    const newQuantity = parseInt(e.target.value);

    const item = shoppingCart.find(
        item => item.product.id === productId
    );

    if (!item || newQuantity < 1) return;

    item.quantity = newQuantity;

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    displayShoppingCart(shoppingCart);
});

function sakujoShimasu(btn){
    const productId = btn.dataset.id;

    shoppingCart = shoppingCart.filter(
        item => item.product.id !== productId
    );
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    displayShoppingCart(shoppingCart);
}

document.getElementById("zenken-sakujo").addEventListener("click", () => {
    if (!confirm("Are you sure you want to delete all items?")) return;

    shoppingCart = [];
    localStorage.removeItem("shoppingCart");
    displayShoppingCart(shoppingCart);
})
    


displayShoppingCart(shoppingCart);

//console.log(shoppingCart)