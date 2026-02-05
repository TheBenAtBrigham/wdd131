const usdFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function cartSwap(btn) {
    const cartImg = btn.querySelector('img');
    const originalSrc = 'images/cart-plus.svg';
    const filledSrc = 'images/cart-plus-fill.svg';

    cartImg.src = filledSrc;

    setTimeout(() => {
        cartImg.src = originalSrc;
    }, 1500);
}

let adjustFontSize = (el) => {
  const parentWidth = el.parentElement.clientWidth;

  
  el.style.whiteSpace = "nowrap";
  el.style.display = "inline-block"; 

  let fontSize = 20; 
  el.style.fontSize = fontSize + "px";

  while (el.scrollWidth > parentWidth && fontSize > 8) {
    fontSize--;
    el.style.fontSize = fontSize + "px";
  }
};


const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


const products = [
    {
        id: "konpeito",
        name: "Konpeitō",
        price: 3.00,
        category: "candy",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kompeito_konpeito.JPG/2560px-Kompeito_konpeito.JPG",
        maker : "Kasugai",
        country: ""
    },
    {
        id: "warugaki",
        name: "Warugaki Beer",
        price: 3.00,
        category: "candy",
        pic: "https://www.sakurabox.com/cdn/shop/files/Warugaki_2.jpg?v=1723777853&width=802",
        maker : "Kyoshin Seika",
        country: ""
    },
    {
        id: "whistlecandy",
        name: "Whistle Candy",
        price: 2.00,
        category: "candy",
        pic: "https://m.media-amazon.com/images/I/71oVM4jVQcL._AC_UF894,1000_QL80_.jpg",
        maker : "Coris",
        country: ""
    },
    {
        id: "winegum",
        name: "Wine Gums",
        price: 2.00,
        category: "candy",
        pic: "https://m.media-amazon.com/images/I/61uxd6X4VyL.jpg",
        maker : "Maynard Bassetts",
        country: "european"
    },
    {
        id: "heysongsars",
        name: "Sarsaparilla",
        price: 2.00,
        category: "soda",
        pic: "https://upload.wikimedia.org/wikipedia/en/a/a5/Sarsaparilla-Hey-Song-4294.jpg",
        maker : "HeySong",
        country: "taiwan"
    },
    {
        id: "suikagami",
        name: "Watermelon Gummies",
        price: 5.00,
        category: "candy",
        pic: "https://m.media-amazon.com/images/I/81OZt0TCydL._AC_UF894,1000_QL80_.jpg",
        maker : "Kasugai",
        country: ""
    },
    {
        id: "suikagami",
        name: "Peach Gummies",
        price: 5.00,
        category: "candy",
        pic: "https://cdn.nijiya.com/pmug7u3ffzw17uelkaeqw7komrpx",
        maker : "Kasugai",
        country: ""
    },
    {
        id: "calpis",
        name: "Calpis",
        price: 3.00,
        category: "soda",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Calpis_karupisu.JPG/500px-Calpis_karupisu.JPG",
        maker : "Asahi",
        country: ""
    },
    {
        id: "mitsuya",
        name: "Mitsuya Cider",
        price: 3.00,
        category: "soda",
        pic: "https://i.ebayimg.com/images/g/Hx0AAOSwozNcP0Gb/s-l1200.jpg",
        maker : "Asahi",
        country: ""
    },
    {
        id: "ramune",
        name: "Ramune",
        price: 3.00,
        category: "soda",
        pic: "https://umamishop.ca/cdn/shop/products/product_8ac9d739-561b-44c5-8893-bfae10724fe3.jpg?v=1611303846&width=1024",
        maker : "Shirakiku",
        country: ""
    },
    {
        id: "molecola",
        name: "MoleCola",
        price: 2.00,
        category: "soda",
        pic: "https://www.worldmarket.com/on/demandware.static/-/Sites-wm-master-catalog/default/dwa011a490/images/large/124878_XXX_v1.jpg",
        maker : "Trinca",
        country: "european"
    },
    {
        id: "irnbru",
        name: "Irn-Bru",
        price: 2.00,
        category: "soda",
        pic: "https://www.britishfoodshop.com/cdn/shop/products/100702_2048x.jpg?v=1633395159",
        maker : "A.G. Barr",
        country: "european"
    },
    {
        id: "",
        name: "",
        price: 2.00,
        category: "",
        pic: "",
        maker : "",
        country: ""
    },
]

getList(products);

function getList(list){
    let productBody = document.querySelector(".item-grid");
    list.forEach(entry => {
        let section = document.createElement("section");
        let header = document.createElement("h2");
        header.innerHTML = entry.name;
        let divOne = document.createElement("div");
        let itemImg = document.createElement("img");
        let divTwo = document.createElement("div");
        let flag = document.createElement("img");
        let emblem = document.createElement("img");
        let buttonAdd = document.createElement("button");
        let maker = document.createElement("p");
        let priceTag = document.createElement("p");


        flag.classList.add("flag");
        flag.setAttribute("alt", entry.country);
        if (entry.country === "european") {
            flag.setAttribute("src", "images/flags/europe.webp")
        }
        else if (entry.country === "taiwan") {
            flag.setAttribute("src", "images/flags/taiwan.webp")
        }
        else {
            flag.setAttribute("src", "images/flags/nihon.webp")
        }

        emblem.classList.add("category");
        emblem.setAttribute("alt", entry.category)
        if (entry.category === "candy") {
            emblem.setAttribute("src", "images/category/konpeito.svg")
        }
        else if (entry.category === "soda"){
            emblem.setAttribute("src", "images/category/cup.svg")
        }
        else {
            emblem.setAttribute("src", "images/category/cookie.svg")
        }
        
        itemImg.setAttribute("src", entry.pic);
        itemImg.setAttribute("alt", entry.name);
        itemImg.setAttribute("loading", "lazy");

        //buttonAdd.innerHTML = `<img id="cart" src="images/cart-plus.svg" onclick="cartSwap(this)" alt="cart" >`;
        buttonAdd.innerHTML = `<img id="cart" src="images/cart-plus.svg" alt="cart" >`;
        buttonAdd.setAttribute("onclick", "cartSwap(this)")
        buttonAdd.setAttribute("id", "add-cart");

        maker.innerHTML = `Made by ${entry.maker}`

        let formattedPrice = usdFormat.format(entry.price)

        priceTag.innerHTML = formattedPrice

        priceTag.classList.add("price");

        divOne.appendChild(flag);
        divOne.appendChild(header);
        divOne.appendChild(emblem);

        divTwo.appendChild(buttonAdd);
        divTwo.appendChild(maker);
        divTwo.appendChild(priceTag);

        section.appendChild(divOne);
        section.appendChild(itemImg);
        section.appendChild(divTwo);

        productBody.appendChild(section);
    });

    document.querySelectorAll('section h2').forEach(adjustFontSize);
}

