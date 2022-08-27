function switchModes(e) {
    catMode = !catMode;
    localStorage.setItem("catMode", catMode);
    displayMode();
}

function displayMode() {
    document.querySelector('body').id = catMode ? "dark" : "";

    const pets = document.querySelectorAll('.pet');
    pets.forEach(pet => pet.innerText = catMode ? 'Cat' : 'Dog');

    const praises = ['Rule', 'Are Awesome', 'Are Great', 'Are the Best', 'FTW', 'Forever'];
    const random = Math.floor(Math.random() * praises.length);
    document.getElementById('praise').innerText = praises[random];

    document.getElementById('facts-link').href = catMode ? "https://alexwohlbruck.github.io/cat-facts/" : "https://kinduff.github.io/dog-api/";

    document.getElementById('photos-link').href = catMode ? "https://thecatapi.com/" : "https://dog.ceo/dog-api/";

    let icons = document.querySelectorAll('h1 i');
    icons.forEach(icon => {
        icon.classList.add(`${catMode ? 'fa-cat' : 'fa-dog'}`);
        icon.classList.remove(`${catMode ? 'fa-dog' : 'fa-cat'}`);
    });
    const fact = catMode ?
        "Cats eat 1000 times their weight every hour." :
        "Dogs like to kill spiders.";
    document.getElementById('fact-text').innerText = fact;
    if (catMode) {
        fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png')
            .then(res => res.json())
            .then(data => {
                document.getElementById("photo").style.backgroundImage =
                    `url("${data[0].url}")`;
            }).catch(error => console.log(error));
    } else {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                document.getElementById("photo").style.backgroundImage =
                    `url("${data.message}")`;
            }).catch(error => console.log(error));
    }

}

const switcher = document.getElementById('catMode');
let catMode = localStorage.getItem("catMode") === 'true';
switcher.checked = catMode;
switcher.addEventListener('click', switchModes);
displayMode();
