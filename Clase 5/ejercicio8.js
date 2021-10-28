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