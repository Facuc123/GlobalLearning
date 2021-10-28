function ejercicio2(arreglo2){
    if(arreglo2.length>5){
    arreglo2.pop(arreglo2);
    arreglo2.pop(arreglo2);
    arreglo2.pop(arreglo2);
    console.log(arreglo2);
    }else{
     console.log("El arreglo no tiene mas de 5 valores!");   
    }
}

const arreglo2 = [1,2,3,4,5,6,7];
ejercicio2(arreglo2);