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