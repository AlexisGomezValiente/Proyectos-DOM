let color = document.querySelector('#p-color');
let button = document.querySelector('#button-color');
let backg = document.querySelector('body');

function cambiarColor(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for(let i = 0; i < 6; i++){
        let indice = Math.floor(Math.random() * 16);
        colorHex += digitos[indice];
    }

    backg.style.backgroundColor = colorHex;
    color.innerText = colorHex;
}

button.addEventListener('click', cambiarColor);