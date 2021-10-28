



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


