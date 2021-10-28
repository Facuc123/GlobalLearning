function ejercicio5(arreglo5){
    let x;
    for(i=0;i<arreglo5.length;i++){
        if(arreglo5[i]!=arreglo5[i+1]){
            x=arreglo5[i];
        }
    }
    console.log("El numero diferente es: "+x);
}

const arreglo5 = [1,1,1,1,1,1,2];
ejercicio5(arreglo5);