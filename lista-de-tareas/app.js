const input = document.querySelector('#input');
const inputBu = document.querySelector('#boton-agregar');
const lugar = document.querySelector('#div-tareas');
const botonRea = document.querySelector('.boton-realizado');
const botonBor = document.querySelectorAll('.boton-borrado');

let texto;
const agrega = () => {
    if(input.value === ""){
        alert('Por favor ingrese una tarea');
    }else{
        texto = input.value;
        creaHTML();
        input.value = ''; 
    }
}

const creaHTML = () => {
    const div = document.createElement('div');
    div.classList.add('container-realizadas');

    const p = document.createElement('p');
    p.innerText = texto;
    p.classList.add('tarea-realizada');

    const div2 = document.createElement('div');
    div2.classList.add('div-boton-realizado');

    const boton1 = document.createElement('button');
    boton1.classList.add('boton-realizado');
    boton1.addEventListener('click',reali);

    const boton2 = document.createElement('button');
    boton2.classList.add('boton-borrado');
    boton2.addEventListener('click',borrar);

    const i1 = document.createElement('i');
    i1.classList.add('bi','bi-check-square-fill');

    const i2 = document.createElement('i');
    i2.classList.add('bi','bi-trash-fill');

    const tareaRe = lugar.appendChild(div);
    tareaRe.appendChild(p);
    const paraBoton = tareaRe.appendChild(div2);
    paraBoton.appendChild(boton1).appendChild(i1);
    paraBoton.appendChild(boton2).appendChild(i2);
}

const reali = (e) => {
    const bot = e.target.parentNode;
    const parrafo = e.target.parentNode.parentNode.previousSibling
    if(parrafo.classList.contains('tarea-realizada-marcada')){
        bot.innerHTML = '<i class="bi bi-check-square-fill">';
        parrafo.classList.remove('tarea-realizada-marcada');
        parrafo.classList.add('tarea-realizada');
    }else{
        bot.innerHTML = '<i class="bi bi-x-circle-fill"></i>';
        parrafo.classList.remove('tarea-realizada');
        parrafo.classList.add('tarea-realizada-marcada')
    }
}

const borrar = (e) => {
    const div = e.target.parentNode.parentNode.parentNode;
    div.remove();
}

const key = (e) => {
    if(e.key == 'Enter') agrega();
}

inputBu.addEventListener('click',agrega);
input.addEventListener('keydown', key);