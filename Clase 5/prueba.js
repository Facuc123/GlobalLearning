function borrarPrimero(arreglo){

    arreglo.shift();
}

const arreglo = [1,2,3,4];

borrarPrimero(arreglo);
console.log(arreglo);

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

function ejercicio3(arreglo3,x){
 const arreglo3fin = arreglo3.map(arreglo3 => arreglo3 + x);
    console.log(arreglo3fin);
}

const arreglo3=[1,2,3];
ejercicio3(arreglo3,2);

function ejercicio4(y){
    const arreglo4 = [];
    for(let i=0; i<y ; i++){
        arreglo4.push(i);
    }
    console.log(arreglo4);
}

ejercicio4(4);

function ejercicio5(arreglo5){
    let x;|
    for(i=0;i<arreglo5.length;i++){
        if(arreglo5[i]!=arreglo5[i+1]){
            x=arreglo5[i];
        }
    }
    console.log("El numero diferente es: "+x);
}

const arreglo5 = [1,1,1,1,1,1,2];
ejercicio5(arreglo5);

function ejercicio6(arreglo6){
    arreglo6.sort();
    let suma;
    suma = arreglo6[0]+arreglo6[1];
    console.log("el arreglo es:"+arreglo6);
    console.log("la suma minima es:"+suma);
}

var arreglo6 = [2,7,4,1];
ejercicio6(arreglo6);

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

function ejercicio8(arreglo8){
   
    
   for(i=arreglo8.length;i>0;i--){
       for(j=0;j<arreglo8.length;j++){
           if(arreglo8["wolf"]==arreglo8[i]){
            console.log("No sigas comiendo ovejas!");
            i=0;
            j=arreglo8.length;
            break; 
           }
           else{   
               console.log("hey! Oveja numero " + j+1 + "! El lobo está cerca!");
               continue;
           }
       }
   
}
}

const arreglo8 = ["sheep","sheep","sheep","sheep","sheep","wolf","sheep","sheep"];
ejercicio8(arreglo8);