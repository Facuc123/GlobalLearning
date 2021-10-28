//EJERCICIO 5

function ejer5(array, leng){
    let band = false;  
    for (let index = 0; index < array.length; index++) {
  
        if(array[index].language == leng){
          band = true;
          console.log(band);
        }
    }
        if(band == true){
          console.log('el lenguaje '+leng+' si está presente');
        }else{
          console.log('el lenguaje '+leng+' no está presente');
        }
  }
  
  ejer5(list1,'C#');
  