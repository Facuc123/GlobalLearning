//EJERCICIO 1

class persona{
    nombre
    posición
    vida
    daño
    experiencia

    constructor(nombre,posición,vida,daño,experiencia){
        this.nombre = nombre;
        this.posición = posición;
        this.vida = vida;
        this.daño = daño;
        this.experiencia = experiencia;
    }

}

const heroe = new persona('heroe','00',100,5,0);

console.log(heroe);

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

//EJERCICIO 3
  
 
 function hola(array){
      array.forEach(function(value){
        let name = value.firstName;
        let lenguaje = value.language;
        console.log(value);
        value.greeting ="Hi " +name+", what do you like the most about " +lenguaje +"?";
      })
     
 }

//  hola(list1);
// console.log(list1);


const list1 = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

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

//ejercicio 6

const list2 = [
{ firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
{ firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
{ firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];

function eje6(array){

    array.forEach((element,index) => {
      
      if(array[index].language == 'JavaScript' || 'Python'){

        console.log(array[index].firstName + " from " +array[index].country + " was the first " + array[index].language + " developer in the conference");

      }

    });

}

eje6(list2);