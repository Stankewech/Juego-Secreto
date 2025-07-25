let lista=[1,10];
let lista2=[2,8];
let muestra;

let lista3= lista.map((numero,index)=>{
    return numero + lista2[index];
}
)

let numero=parseInt(prompt('introduce un numero'));

if(lista.includes(numero)){
    muestra= parseInt(lista.indexOf(numero));
}

console.log(lista3);
console.log(muestra);
