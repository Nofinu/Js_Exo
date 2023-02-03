import ImageItem from "./classes/ImageItem.js";

const divBtnSelection = document.querySelector('#divBtnSelection') as HTMLDivElement
const displayImage = document.querySelector('#displayImage') as HTMLImageElement
const Description = document.querySelector('#description') as HTMLDivElement
const btnArrowleft = document.querySelector('#button1') as HTMLButtonElement
const btnArrowright= document.querySelector('#button2') as HTMLButtonElement
let btnImg = divBtnSelection.querySelectorAll('button')

let btnblue:number = 0
let listeImage : ImageItem[] = [new ImageItem("./asset/imageMontagne.jpg","Montagne","une image de montagne"),new ImageItem("./asset/champDeFleure.jpg","Fleure","une image de champ de fleure")]

function RefreshButton ():void{
    divBtnSelection.innerHTML =""
    listeImage.forEach(image =>{
        divBtnSelection.innerHTML +=`<button data-key="${image.getId}" class="btnTransparent">${image.getTitle}</button>`
    })
    btnImg = divBtnSelection.querySelectorAll('button')
}

function RefreshImage (index:number):void{
    displayImage.src = listeImage[index].getUrl
    Description.innerText = listeImage[index].Description
}

function start ():void{
    const btninit = divBtnSelection.querySelector('button')as HTMLButtonElement
    btninit.classList.remove('btnTransparent')
    btninit.classList.add('BtnBlue')
}

function goToTransparent (index:number):void{
    btnImg[index].classList.remove('BtnBlue')
    btnImg[index].classList.add('btnTransparent')
}

function goToBlue (index:number):void{
    btnImg[index].classList.remove('btnTransparent')
    btnImg[index].classList.add('BtnBlue')
}


divBtnSelection.addEventListener('click',(e:Event)=>{
    goToTransparent(btnblue)
    let btnselectioner:number = Number((e.target as HTMLButtonElement).dataset.key)-1
    RefreshImage(btnselectioner)
    goToBlue(btnselectioner)
    btnblue = btnselectioner
})

btnArrowleft.addEventListener('click',()=>{
    if(btnblue === 0){
        goToTransparent(btnblue)
        btnblue = listeImage.length-1
        goToBlue(btnblue)
        RefreshImage(btnblue)
    }
    else{
        goToTransparent(btnblue)
        btnblue--
        goToBlue(btnblue)
        RefreshImage(btnblue)
    }
})

btnArrowright.addEventListener('click',()=>{
    if(btnblue === listeImage.length-1){
        goToTransparent(btnblue)
        btnblue = 0
        goToBlue(btnblue)
        RefreshImage(btnblue)
    }
    else{
        goToTransparent(btnblue)
        btnblue++
        goToBlue(btnblue)
        RefreshImage(btnblue)
    }
})


RefreshButton()
RefreshImage(0)
start()


