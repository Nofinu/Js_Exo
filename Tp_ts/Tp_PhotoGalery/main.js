import ImageItem from "./classes/ImageItem.js";
const divBtnSelection = document.querySelector('#divBtnSelection');
const displayImage = document.querySelector('#displayImage');
const Description = document.querySelector('#description');
const btnArrowleft = document.querySelector('#button1');
const btnArrowright = document.querySelector('#button2');
let btnImg = divBtnSelection.querySelectorAll('button');
let btnblue = 0;
let listeImage = [new ImageItem("./asset/imageMontagne.jpg", "Montagne", "une image de montagne"), new ImageItem("./asset/champDeFleure.jpg", "Fleure", "une image de champ de fleure")];
function RefreshButton() {
    divBtnSelection.innerHTML = "";
    listeImage.forEach(image => {
        divBtnSelection.innerHTML += `<button data-key="${image.getId}" class="btnTransparent">${image.getTitle}</button>`;
    });
    btnImg = divBtnSelection.querySelectorAll('button');
}
function RefreshImage(index) {
    displayImage.src = listeImage[index].getUrl;
    Description.innerText = listeImage[index].Description;
}
function start() {
    const btninit = divBtnSelection.querySelector('button');
    btninit.classList.remove('btnTransparent');
    btninit.classList.add('BtnBlue');
}
function goToTransparent(index) {
    btnImg[index].classList.remove('BtnBlue');
    btnImg[index].classList.add('btnTransparent');
}
function goToBlue(index) {
    btnImg[index].classList.remove('btnTransparent');
    btnImg[index].classList.add('BtnBlue');
}
divBtnSelection.addEventListener('click', (e) => {
    goToTransparent(btnblue);
    let btnselectioner = Number(e.target.dataset.key) - 1;
    RefreshImage(btnselectioner);
    goToBlue(btnselectioner);
    btnblue = btnselectioner;
});
btnArrowleft.addEventListener('click', () => {
    if (btnblue === 0) {
        goToTransparent(btnblue);
        btnblue = listeImage.length - 1;
        goToBlue(btnblue);
        RefreshImage(btnblue);
    }
    else {
        goToTransparent(btnblue);
        btnblue--;
        goToBlue(btnblue);
        RefreshImage(btnblue);
    }
});
btnArrowright.addEventListener('click', () => {
    if (btnblue === listeImage.length - 1) {
        goToTransparent(btnblue);
        btnblue = 0;
        goToBlue(btnblue);
        RefreshImage(btnblue);
    }
    else {
        goToTransparent(btnblue);
        btnblue++;
        goToBlue(btnblue);
        RefreshImage(btnblue);
    }
});
RefreshButton();
RefreshImage(0);
start();
