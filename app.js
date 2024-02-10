let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaxio = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'Numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaxio)+1;
    // si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    // Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaxio){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    }else{
    
        // Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesInciales(){
    asignarTextoElemento('h1','juego del numero sercreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaxio}`);
    numeroSecreto = generaNumeroSecreto();    
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja.
    limpiarCaja()
    //indicar mensaje de intervalos de numeros.
    //Generar el numero aleatorio.   
    //Inicializar el numero intentos.
    condicionesInciales();
    //Deshabilitar el boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesInciales();