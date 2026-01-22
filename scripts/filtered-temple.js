const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


const hamBurg = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

hamBurg.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamBurg.classList.toggle('open');
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Sapporo Hokkaidō",
    location: "Sapporo, Hokkaidō, Japan",
    dedicated: "2016, August 21", 
    area: 48480,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
  },
  {
    templeName: "Paris Temple",
    location: "Paris, France",
    dedicated: "2017, May 21", 
    area: 44175,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
  {
    templeName: "Montreal Quebec",
    location: "Montreal, Quebec, France",
    dedicated: "2000, June 4", 
    area: 11550,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
  }
];

createTempleCard(temples, "All");

const homeTemples = document.getElementById("home");
homeTemples.addEventListener("click", () => {
    let home = temples.filter(temple => temple.location.includes("Utah"));
    createTempleCard(home, "Utah");
})

const nonUtahTemples = document.getElementById("not-utah");
nonUtahTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => !temple.location.includes("Utah")), "Non-Utah")
})

const oldTemples = document.getElementById("old")
oldTemples.addEventListener("click", () => {
    let years = temples.filter(temple => {
        let year = temple.dedicated.slice(0,4)
        if (parseInt(year) < 1900){
            return year;
        }
    });
    createTempleCard(years, "Old");
});

const newTemples = document.getElementById("new")
newTemples.addEventListener("click", () => {
    let years = temples.filter(temple => {
        let year = temple.dedicated.slice(0,4)
        if (parseInt(year) > 2000){
            return year;
        }
    });
    createTempleCard(years, "New");

});

const largeTemples = document.querySelector("#large");
largeTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000), "Large")
})

const smallTemples = document.querySelector("#small");
smallTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000), "Small")
})

function createTempleCard(filteredTemples, headerOne){
    let container = document.querySelector(".container");
    let descriptor = document.querySelector("#descriptor");

    descriptor.innerHTML = `${headerOne} Temples`;
    container.innerHTML = "";


    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img")
        card.classList.add("card")
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.name} Temple`);
        img.setAttribute("loading", "lazy");


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        //lastly
        container.append(card);
    })
}

