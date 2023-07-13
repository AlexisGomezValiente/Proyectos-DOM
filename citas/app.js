let frase = document.querySelector('#frase');
let autor = document.querySelector('#autor');
let boton = document.querySelector('#cambiarCita');

function cambio(){
    let indice = Math.floor(Math.random() * citas.length);
    frase.innerText = citas[indice].cita;
    autor.innerText = citas[indice].autor;

    boton.innerText = 'Siguiente Cita';
}

boton.addEventListener('click',cambio);