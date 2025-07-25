let numeroSecreto =0;
let intentos =0;
let listaNumerosSorteados= [];
let numeroMaximo=10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarEvento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
console.log(numeroSecreto);
if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}
else{
    if(numeroSecreto<numeroDeUsuario){
        asignarTextoElemento('p', 'El numero es menor');
    }else{
        asignarTextoElemento('p', 'El numero es mayor');
    }
    intentos++;
    limpiarCaja();
    
}
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del calamar');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo} `);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}



function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
}



function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista se genera otro
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles')
    }else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    

}


condicionesIniciales();