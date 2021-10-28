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