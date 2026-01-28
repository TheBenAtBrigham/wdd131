const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const flag = sessionStorage.getItem("justSubmitted");

if (flag === "true") {
    let count = localStorage.getItem("reviewCount") || 0;
    count = parseInt(count, 10) + 1;
    localStorage.setItem("reviewCount", count);

    sessionStorage.removeItem("justSubmitted");

}
document.getElementById("review-count").textContent = 
    localStorage.getItem("reviewCount") || 0;
