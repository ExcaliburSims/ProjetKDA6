
let prenom = document.querySelector('#lastname');
let nom = document.querySelector('#firstname');
let groupe = document.querySelector('#selection');
let bio = document.querySelector('#message');
let creer = document.querySelector('#buttonCreer');
let reinit = document.querySelector('#buttonReinit');
let contact = document.querySelector('#card');
let image = document.querySelector('#myImg');

window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            image.src = URL.createObjectURL(this.files[0]);
        }
    });
});

function CreationElmnt() {
    let divCard = document.createElement('div');
    divCard.setAttribute('class', 'card');

    let divImg = document.createElement('div');
    divImg.setAttribute('class', 'img');

    let Img = document.createElement('img');
    Img.setAttribute('class', 'circular');
    Img.setAttribute('src', `${image.src}`);

    let divText = document.createElement('div');
    divText.setAttribute('class', 'text');

    let divPara1 = document.createElement('div');
    divPara1.setAttribute('class', 'para1');

    let para1 = document.createElement('p');

    let btn = document.createElement('button');
    btn.setAttribute('class', 'supprimer')
    btn.innerHTML = "<span>&times</span>";

    let para2 = document.createElement('p');
    let choice = groupe.selectedIndex;
    let valeur = groupe.options[choice].value;
    para2.setAttribute('id', 'text-groupe');
    para2.textContent = `${valeur}`;

    let para3 = document.createElement('p');
    para3.setAttribute('id', 'text-bio');
    para3.textContent = `${bio.value}`;

    let prenomSpan = document.createElement('span');
    prenomSpan.setAttribute('id', 'text-prenom')
    prenomSpan.textContent = `${prenom.value}`;

    let nomSpan = document.createElement('span');
    nomSpan.setAttribute('id', 'text-nom')
    nomSpan.textContent = ` ${nom.value}`;

    para1.appendChild(prenomSpan);
    para1.appendChild(nomSpan);

    divPara1.appendChild(para1);
    divPara1.appendChild(btn);

    divText.appendChild(divPara1);
    divText.appendChild(para2);
    divText.appendChild(para3);

    divImg.appendChild(Img);

    divCard.appendChild(divImg);
    divCard.appendChild(divText);

    contact.appendChild(divCard)

    btn.addEventListener('click', () => {
        divCard.remove();
    })
}

function Reinitialiser() {
    prenom.value = "";
    nom.value = "";
    bio.value = "";
}

function ChoixImage() {

}
creer.addEventListener('click', (e) => {
    e.preventDefault();
    CreationElmnt()
})
reinit.addEventListener('click', () => {
    Reinitialiser()
})
