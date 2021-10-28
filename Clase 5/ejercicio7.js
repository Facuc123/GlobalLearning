
function ejercicio7(arreglo7){
    let x=1;
    for(i=0;i<arreglo7.length-1;i++){
        if(arreglo7[i]*arreglo7[i+1]>x){
            x=arreglo7[i]*arreglo7[i+1];
        }
    }
    console.log("El mayor producto posible es de:"+x);
}

arreglo7=[9,5,10,2,24,-1];
ejercicio7(arreglo7);
