const cronometro = document.querySelector('#cronometro');
const iniciarPausar = document.querySelector('.iniciar');
const reiniciar = document.querySelector('.reiniciar');

let [horas, minutos, segundos] = [0, 0, 0];

let intervalo;
let estado = false;

const time = () => {

    segundos++;
    if(segundos / 60 === 1){
        segundos = 0;
        minutos++;

        if(minutos / 60 === 1){
            minutos = 0;
            horas++;
        }
    }

    let segundosFormat = timeFormat(segundos);
    let minutosFormat = timeFormat(minutos);
    let horasFormat = timeFormat(horas);

    cronometro.innerText = `${horasFormat}:${minutosFormat}:${segundosFormat}`;
}

const timeFormat = (unidad) =>{
    return unidad < 10 ? '0' + unidad : unidad;
}

const accion = () => {
    if(estado == false){
        intervalo = window.setInterval(time,1000);
        iniciarPausar.innerHTML = '<i class="bi bi-pause-fill"></i>';
        iniciarPausar.classList.remove('iniciar');
        iniciarPausar.classList.add('pausar');
        estado = true;
    }else{
        window.clearInterval(intervalo);
        iniciarPausar.innerHTML = '<i class="bi bi-play-fill"></i>';
        iniciarPausar.classList.remove('pausar');
        iniciarPausar.classList.add('iniciar');
        estado = false;
    }
}

const reiniciarCro = () => {
    window.clearInterval(intervalo);
    horas = 0;
    minutos = 0;
    segundos = 0;
    cronometro.innerText = '00:00:00';
    
    iniciarPausar.innerHTML = '<i class="bi bi-play-fill"></i>';
    iniciarPausar.classList.remove('pausar');
    iniciarPausar.classList.add('iniciar');

    estado = false;
}

iniciarPausar.addEventListener('click',accion);
reiniciar.addEventListener('click', reiniciarCro);