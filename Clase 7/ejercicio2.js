//EJERCICIO 2

const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  
function ejemplo(list) {
  let contador = 0
    for (let index = 0; index < list.length; index++) {
        if(list[index].continent == 'Europe'){
            contador +=1;
        } 
    }
    console.log("La cantidad de gente de Europa fueron %d",contador);
  }
 
  ejemplo(list);