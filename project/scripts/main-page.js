const usdFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const hanbaagaa = document.getElementById('menu');
const navigation = document.querySelector('.sidebar');

hanbaagaa.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hanbaagaa.classList.toggle('open');
});

function hanbaagaaOTabetaida(){
    navigation.classList.toggle('open');
    hanbaagaa.classList.toggle('open');
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

const products = [
    {
        id: "konpeito",
        name: "Konpeitō",
        price: 3.30,
        category: "candy",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kompeito_konpeito.JPG/2560px-Kompeito_konpeito.JPG",
        maker : "Kasugai",
        country: "japan"
    },
    {
        id: "warugaki",
        name: "Warugaki Beer",
        price: 3.00,
        category: "candy",
        pic: "https://www.sakurabox.com/cdn/shop/files/Warugaki_2.jpg?v=1723777853&width=802",
        maker : "Kyoshin Seika",
        country: "japan"
    },
    {
        id: "whistlecandy",
        name: "Whistle Candy",
        price: 2.00,
        category: "candy",
        pic: "https://m.media-amazon.com/images/I/71oVM4jVQcL._AC_UF894,1000_QL80_.jpg",
        maker : "Coris",
        country: "japan"
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
        country: "japan"
    },
    {
        id: "piichigami",
        name: "Peach Gummies",
        price: 5.00,
        category: "candy",
        pic: "https://cdn.nijiya.com/pmug7u3ffzw17uelkaeqw7komrpx",
        maker : "Kasugai",
        country: "japan"
    },
    {
        id: "mangoogami",
        name: "Mango Gummies",
        price: 5.00,
        category: "candy",
        pic: "https://makoto-ya.sg/wp-content/uploads/2023/07/bk-1308-2.png",
        maker : "Kasugai",
        country: "japan"
    },
    {
        id: "calpis",
        name: "Calpis",
        price: 3.00,
        category: "soda",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Calpis_karupisu.JPG/500px-Calpis_karupisu.JPG",
        maker : "Asahi",
        country: "japan"
    },
    {
        id: "mitsuya",
        name: "Mitsuya Cider",
        price: 3.00,
        category: "soda",
        pic: "https://i.ebayimg.com/images/g/Hx0AAOSwozNcP0Gb/s-l1200.jpg",
        maker : "Asahi",
        country: "japan"
    },
    {
        id: "ramune",
        name: "Ramune",
        price: 3.00,
        category: "soda",
        pic: "https://umamishop.ca/cdn/shop/products/product_8ac9d739-561b-44c5-8893-bfae10724fe3.jpg?v=1611303846&width=1024",
        maker : "Shirakiku",
        country: "japan"
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
        price: 2.50,
        category: "soda",
        pic: "https://www.britishfoodshop.com/cdn/shop/products/100702_2048x.jpg?v=1633395159",
        maker : "A.G. Barr",
        country: "european"
    },
    {
        id: "Sanshoku",
        name: "Sanshoku Dango",
        price: 2.60,
        category: "confection",
        pic: "https://img06.weeecdn.com/item/image/182/187/5D469176BF7914DB.jpg",
        maker : "Shirakiku",
        country: "japan"
    },
    {
        id: "puccho",
        name: "Puchao",
        price: 5.00,
        category: "candy",
        pic: "https://m.media-amazon.com/images/I/91PDe+bzegL._AC_UF894,1000_QL80_.jpg",
        maker : "UHA Mikakuto",
        country: "japan"
    },
    {
        id: "hoshinokakare",
        name: "Kirby Puchao",
        price: 5.00,
        category: "candy",
        pic: "https://japanese-snacks-republic.com/media/binary/000/110/004/110004.webp",
        maker : "UHA Mikakuto",
        country: "japan"
    },
    {
        id: "koora-ramune-puccho",
        name: "Cola / Ramune Puchao",
        price: 5.00,
        category: "candy",
        pic: "https://www.auntiekcandy.com/cdn/shop/products/Puchao_Soda_Cola_Bag_GIMP_1024x.jpg?v=1625596176",
        maker : "UHA Mikakuto",
        country: "japan"
    },
    {
        id: "shiojake-puccho",
        name: "Salted Salmon Puchao",
        price: 5.00,
        category: "candy",
        pic: "https://soranews24.com/wp-content/uploads/sites/3/2015/07/fish-candy-top.jpg",
        maker : "UHA Mikakuto",
        country: "japan"
    },
    {
        id: "ubecrunch",
        name: "Ube Crunch Rolls",
        price: 2.00,
        category: "confection",
        pic: "https://www.instacart.com/assets/domains/product-image/file/large_ee524f09-7fc5-4498-b08c-ef1eb76e1bcc.jpeg",
        maker : "Triko Foods",
        country: "taiwan"
    },
    {
        id: "hi-chew",
        name: "Hi-Chew",
        price: 2.00,
        category: "candy",
        pic: "https://i5.walmartimages.com/seo/Hi-Chew-Original-Mix-Chewy-Candy-12-7-oz-Stand-up-Pouch_715e379d-a778-4dca-8523-5369726a68e2.9e929ed786400ed2185074aae7c4453a.jpeg",
        maker : "Morinaga",
        country: "japan"
    },
    {
        id: "kouri-ame",
        name: "Ice Candy",
        price: 3.00,
        category: "candy",
        pic: "https://www.japancandystore.com/cdn/shop/files/20240222-270.jpg?v=1709093108",
        maker : "UHA Mikakuto",
        country: "japan"
    },
    {
        id: "kohakutou",
        name: "Kohakutou",
        price: 3.00,
        category: "candy",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCl2_ti54hAAQ8-W6C1MWATfl1grrGfZ1sQ&s",
        maker : "Kohakutou Okada",
        country: "japan"
    },
    {
        id: "kagi-gouri-gami",
        name: "Shaved Ice Gummies",
        price: 3.00,
        category: "candy",
        pic: "https://professorsnacks.com/cdn/shop/products/IOBJ9637_828x1472.jpg?v=1617825568",
        maker : "Kabaya",
        country: "japan"
    },
    {
        id: "koora-appu",
        name: "Cola-up",
        price: 3.50,
        category: "candy",
        pic: "https://japanesetaste.com/cdn/shop/files/P-3-MEJI-GMYCLA-1_6-Meiji_Gummy_Cola_Up_Japanese_Candy_Gummies_100g_Pack_of_6.jpg?crop=center&height=1200&v=1746686462&width=1200",
        maker : "Meiji",
        country: "japan"
    },
    {
        id: "suupaa-koora-kyandi",
        name: "Super Cola",
        price: 3.50,
        category: "candy",
        pic: "https://hmartus.vtexassets.com/arquivos/ids/161275-800-800?v=638448907947570000&width=800&height=800&aspect=true",
        maker : "Nobel Seika",
        country: "japan"
    },
    {
        id: "wagashi-hako",
        name: "Wagashi Box",
        price: 2.00,
        category: "confection",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiDuf7R5uudAXSV-ihMtvZaKwIMfhJubJoQ&s",
        maker : "Hanazana",
        country: "japan"
    },
    {
        id: "ichigo-mochi-aisu",
        name: "Mochi Ice Cream 🍓",
        price: 2.00,
        category: "confection",
        pic: "https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/1564405684709975144/91463c105c5efb8952c6bd18f9f74718_large.png&height=512&type=jpeg&quality=90",
        maker : "Shirakiku",
        country: "japan"
    },
    {
        id: "mangoo-mochi-aisu",
        name: "Mochi Ice Cream 🥭",
        price: 2.00,
        category: "confection",
        pic: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrfGB6npb1i05MTJtLelEbuX3X8mdXLRyjkF49puYnzLbDLOG_TrX1YgGY6JGp0ovHrdspVLiR0dLEn_t_ydo3VXN7NmIA6_suGKS7yNH3Z1AFKdLXGhrM",
        maker : "Shirakiku",
        country: "japan"
    },
    {
        id: "pepsi-mojito",
        name: "Pepsi Zero Mojito",
        price: 2.00,
        category: "soda",
        pic: "https://snackje.com/cdn/shop/files/Pepsi-Zero-Mojito-KR-355ml.webp?v=1759763603",
        maker : "Lotte Chilsung & Pepsi Co.",
        country: "korea"
    },
    {
        id: "fanta-piichi",
        name: "Peach White Peach",
        price: 2.00,
        category: "soda",
        pic: "https://popshoplife.com/cdn/shop/files/IMG-5192_1200x1200.jpg?v=1755183996",
        maker : "Coca-Cola",
        country: "japan"
    },
    {
        id: "mini-koora",
        name: "Mini Cola",
        price: 2.00,
        category: "candy",
        pic: "https://www.japancandystore.com/cdn/shop/products/20200914_021.jpg?v=1675384045",
        maker : "Orion Co., Ltd.",
        country: "japan"
    },
    {
        id: "coora-ramune",
        name: "Cola Ramune",
        price: 2.00,
        category: "soda",
        pic: "https://sugarlifecandy.com/cdn/shop/files/ramune-cola_1200x.png?v=1718914423",
        maker : "Hatakosen",
        country: "japan"
    },
    {
        id: "mitsuya-candy",
        name: "Mitsuya Cider Candy",
        price: 2.00,
        category: "candy",
        pic: "https://www.j-grab.com/cdn/shop/files/Asahi_Mitsuya_Cider_Candy_Assortment_112g_6_Bags_Made_in_JAPAN-1_600x600_crop_center.png?v=1766247101",
        maker : "Asahi",
        country: "japan"
    },
    {
        id: "kanten",
        name: "Hanatsumi Kanten",
        price: 12.00,
        category: "candy",
        pic: "https://m.media-amazon.com/images/I/61LAq1V98PL._AC_UF894,1000_QL80_.jpg",
        maker : "Tsuyamaya Confectionery",
        country: "japan"
    },
    {
        id: "peko-chan",
        name: "Peko-chan Milk Candy",
        price: 12.00,
        category: "candy",
        pic: "https://m.media-amazon.com/images/I/81rnbCwURWL._AC_UF894,1000_QL80_.jpg",
        maker : "Fujiya",
        country: "japan"
    },
    {
        id: "peko-chan-poppu",
        name: "Peko-chan Pop Candy",
        price: 12.00,
        category: "candy",
        pic: "https://www.japancandystore.com/cdn/shop/products/20210722_056.jpg?v=1675387354",
        maker : "Fujiya",
        country: "japan"
    },
    {
        id: "piichi-jelly",
        name: "White Peach Jelly",
        price: 2.00,
        category: "candy",
        pic: "https://img08.weeecdn.net/item/image/287/908/73A3AA1F8CA95CCB.jpg!c750x0_q80_t1.auto",
        maker : "Tarami",
        country: "japan"
    },
    {
        id: "budou-jelly",
        name: "Japanese Grape Jelly",
        price: 2.00,
        category: "candy",
        pic: "https://okashigroup.com/wp-content/uploads/2024/03/920-1.jpg",
        maker : "Triko Foods",
        country: "taiwan"
    },
    {
        id: "dasik",
        name: "Dasik Tea Cookies",
        price: 2.00,
        category: "confection",
        pic: "https://www.maangchi.com/wp-content/uploads/2021/09/dasik-insta.jpg",
        maker : "Aeum",
        country: "korea"
    },
    {
        id: "squashies-gum",
        name: "Bubblegum Squashies",
        price: 2.00,
        category: "candy",
        pic: "https://i5.walmartimages.com/asr/cffb8ddb-4067-4e74-801c-49a8c290c03a.caf81be979713bfd8356b1421e6782fb.jpeg",
        maker : "Swizzel's",
        country: "european"
    },
    {
        id: "fanta-toropikaru",
        name: "Fanta Tropical",
        price: 2.00,
        category: "soda",
        pic: "https://cdn.powered-by-nitrosell.com/product_images/23/5695/large-fanta-tropical-can-330ml.png",
        maker : "Coca-Cola",
        country: "european"
    },
    {
        id: "gooruden-gobi-chokureeto",
        name: "Golden Gobi Chocolate",
        price: 6.57,
        category: "candy",
        pic: "https://cdn.faire.com/fastly/2c1e430d25da34d731d7c7fc4ff349e0ca80832f0d51c570abe56091580639a2.jpeg",
        maker : "Esun Od, LLC",
        country: "mongolia"
    },
    {
        id: "toukyou-banana-keeki",
        name: "Tokyo Banana Cake",
        price: 2.00,
        category: "confection",
        pic: "https://www.tokyobanana.jp/language/images/products/28_original_01.jpg",
        maker : "Grapestone Co.",
        country: "japan"
    },
    {
        id: "terelj",
        name: "Terelj Soda",
        price: 2.00,
        category: "soda",
        pic: "https://www.monde-selection.com/wp-content/uploads/2024/05/1040952-768x768.png",
        maker : "APU JSC",
        country: "mongolia"
    },
    {
        id: "pokemon-banana-keeki",
        name: "Pokémon Banana Cake",
        price: 2.00,
        category: "confection",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iQQLeADLCeDJqk0uwUQwTwqkVLAU67mBFA&s",
        maker : "Grapestone Co.",
        country: "japan"
    },
    {
        id: "renineedo",
        name: "Leninade",
        price: 2.00,
        category: "soda",
        pic: "https://www.sodapoponline.com/cdn/shop/products/leninadesoda_600x.jpg?v=1611077424",
        maker : "Real Soda In Real Bottles",
        country: "european"
    },
    {
        id: "garigarikun-sooda",
        name: "GariGarikun Soda",
        price: 2.00,
        category: "confection",
        pic: "https://i.namu.wiki/i/K-H99xOQiCk74uSAxzMsxva2pLxAdOzfO-dBUd_gacvSipba8mtB4ChBTIhFMB3yJI8VnNzEEXWzxgjUgMHq4g.webp",
        maker : "Akagi",
        country: "japan"
    },
    {
        id: "tarufun",
        name: "Tarkhuna",
        price: 5.00,
        category: "soda",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E9%BE%99%E8%92%BF%E6%B1%BD%E6%B0%B4.jpg/960px-%E9%BE%99%E8%92%BF%E6%B1%BD%E6%B0%B4.jpg",
        maker : "Natakhtari",
        country: "georgia"
    },
]

let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

function cartSwap(btn) {
    const cartImg = btn.querySelector('img');
    const originalSrc = 'images/cart-plus.svg';
    const filledSrc = 'images/cart-plus-fill.svg';

    cartImg.src = filledSrc;

    setTimeout(() => {
        cartImg.src = originalSrc;
    }, 1500);
    

    const productId = btn.dataset.id;
    if (!productId) return;
    const itemInCart = shoppingCart.find(item => item.product.id === productId)

    if (itemInCart) {
        itemInCart.quantity += 1;
    } else {
        const product = products.find(p => p.id === productId);
        if (product) {
            shoppingCart.push({product, quantity: 1});
        }
    }

    //console.log(shoppingCart);

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))

}


const allItems = document.getElementById("all");
allItems.addEventListener("click", () => {
    getList(products, "Our Products")
    hanbaagaaOTabetaida();
})

const candies = document.getElementById("candy")
candies.addEventListener("click", () => {
    let kyandi = products.filter(product => product.category === "candy");
    getList(kyandi, "Our Candy");
    hanbaagaaOTabetaida();
});


const confection = document.getElementById("confection")
confection.addEventListener("click", () => {
    let kashiToYogashi = products.filter(product => product.category === "confection")
    getList(kashiToYogashi, "Our Confections");
    hanbaagaaOTabetaida();
})

const sodas = document.getElementById("soda")
sodas.addEventListener("click", () => {
    let sōdasui = products.filter(product => product.category === "soda")
    getList(sōdasui, "Our Sodas");
    hanbaagaaOTabetaida();
})

const japan = document.getElementById("japan")
japan.addEventListener("click", () => {
    let nihon = products.filter(product => product.country === "japan" || product.id === "budou-jelly")
    getList(nihon, "Japanese Products");
    hanbaagaaOTabetaida();
})

const europeanCountries = document.getElementById("european")
europeanCountries.addEventListener("click", () => {
    let yōroppaShokoku = products.filter(product => product.country === "european" || product.country === "georgia")
    getList(yōroppaShokoku, "European Products");
    hanbaagaaOTabetaida();
})


const miscellaneous = document.getElementById("miscellaneous")
miscellaneous.addEventListener("click", () => {
    let sonota = products.filter(product => !product.country.includes("japan") && !product.country.includes("european"))
    getList(sonota, "Products of Miscellaneous Origin");
    hanbaagaaOTabetaida();
})




getList(products, "All Products");

function getList(list, headerOne){
    let itemHeader = document.querySelector("h1");
    itemHeader.innerHTML = headerOne;
    let productBody = document.querySelector(".item-grid");
    productBody.innerHTML = "";
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
            flag.setAttribute("title", "台湾 / Taiwan / Republic of China")
        }
        else if (entry.country === "korea") {
            flag.setAttribute("src", "images/flags/korea.webp")
            flag.setAttribute("title", "韓国 / South Korea")
        }
        else if (entry.country === "mongolia") {
            flag.setAttribute("src", "images/flags/mongolia.webp")
            flag.setAttribute("title", "モンゴル / Mongolia")
        }
        else if (entry.country === "georgia") {
            flag.setAttribute("src", "images/flags/georgia.webp")
            flag.setAttribute("title", "ジョージア / Georgia")
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
        itemImg.classList.add("item-pic")
        

        buttonAdd.innerHTML = `<img id="cart" src="images/cart-plus.svg" alt="cart" >`;
        buttonAdd.setAttribute("onclick", "cartSwap(this)")
        buttonAdd.setAttribute("id", "add-cart");
        buttonAdd.setAttribute("data-id", entry.id);

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
