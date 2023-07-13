const pRojo = document.querySelector('#p-rojo');
const pVerde = document.querySelector('#p-verde');
const pAzul = document.querySelector('#p-azul');

const inputRojo = document.querySelector('#rojo');
const inputVerde = document.querySelector('#verde');
const inputAzul = document.querySelector('#azul');

let colorR  = inputRojo.value;
let colorG = inputVerde.value;
let colorB = inputAzul.value;

pRojo.innerText = colorR;
pVerde.innerText = colorG;
pAzul.innerText = colorB;

const cambioFondo = (r,g,b) => {
    let rgb = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = rgb;
}

const cambioGeneral = (event) => {
    if(event.target.id == 'rojo'){
        colorR = event.target.value;
        pRojo.innerText = colorR;
    }else if(event.target.id == 'verde'){
        colorG = event.target.value;
        pVerde.innerText = colorG;
    }else if(event.target.id == 'azul'){
        colorB = event.target.value;
        pAzul.innerText = colorB;
    }

    cambioFondo(colorR,colorG,colorB);
}

inputRojo.addEventListener('change', cambioGeneral);
inputVerde.addEventListener('change',cambioGeneral);
inputAzul.addEventListener('change',cambioGeneral);