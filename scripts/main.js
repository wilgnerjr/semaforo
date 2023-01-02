const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
// const vr = document.getElementsByClassName('vr');
// const ay = document.getElementsByClassName('ay');
// const vg = document.getElementsByClassName('vg');
// const aa = document.getElementsByClassName('aa');

let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stop();
    turnOn[event.target.id]();
}

const nextIndex = () => {

    // colorIndex = colorIndex < 2? ++colorIndex : 0;

    if (colorIndex < 2) {
        colorIndex++;
    }
    else{
        colorIndex = 0 ;
    }
}

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const stop = () => {
    clearInterval(intervalId);
}
const turnOn = {
    'red': () => img.src = "./imagens/vermelho.png",
    'yellow': () => img.src = "./imagens/amarelo.png",
    'green': () => img.src = "./imagens/verde.png" ,
    'automatic' : () => intervalId = setInterval(changeColor, 700 )
}

buttons.addEventListener('click', trafficLight );