function borrarPrimero(arreglo){

    arreglo.shift();
}

const arreglo = [1,2,3,4];

borrarPrimero(arreglo);
console.log(arreglo);
