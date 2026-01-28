const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

getProducts(products);

function getProducts(list){
    let productSelect = document.querySelector("#product-name");

    list.forEach(element => {
        let option = document.createElement("option")
        let optionTitle = element.name
        option.innerHTML = `${optionTitle.toUpperCase()}`;
        option.setAttribute("value", element.id);
        productSelect.appendChild(option);
    });
} 

const form = document.querySelector("form");
form.addEventListener("submit", () => {
    sessionStorage.setItem("justSubmitted", "true");
})