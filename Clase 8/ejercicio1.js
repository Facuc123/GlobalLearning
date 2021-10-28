/*Ejercicio 1: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si todas las 
personas registradas trabajan con el mismo lenguaje. Es decir, necesitamos que nuestra función 
devuelva True si todos los lenguajes son iguales, o que nos devuelva False si hay por lo menos
uno que sea distinto*/
const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Java' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Java' } 
];  

function ejercicio1(list){
    let band = false;
    for (let index = 0; index < list.length-1; index++) {
        if(list[index].language != list[index+1].language){
            band = true;
        } 
    }
    if(band == true){
        console.log('los lenguajes son distintos');
    }else{
        console.log('los lenguajes son iguales');
    }
}

ejercicio1(list);