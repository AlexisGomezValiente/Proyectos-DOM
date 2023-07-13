let lista = document.querySelectorAll('.top');

function miClick(event){
    console.log(event.target.innerText);

    if(event.target.classList[1] == 'fondo-naranja'){
        alert('Es naranja')
    }
}

for(let top of lista){
    top.addEventListener('click', miClick)
}