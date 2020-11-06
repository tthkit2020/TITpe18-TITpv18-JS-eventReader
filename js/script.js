const images = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg"];
const imageToChange = document.getElementById("image");
const documentBody = document.getElementsByTagName('body')[0];
const switchButton = document.getElementById('switch');

function changeImage(){
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * images.length-1) + 1);
    console.log(rnd);    
    imageToChange.src = images[rnd];
}

function changeMode() {
    if(switchButton.innerHTML === 'Night'){
        documentBody.style.background = 'black';
        switchButton.innerHTML = 'Day';
    } else {
        documentBody.style.background = 'white';
        switchButton.innerHTML = 'Night';
    }
    
}