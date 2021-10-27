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

/**Ejercicio 2: Teniendo en cuenta la misma conferencia anterior,
 *  necesitamos saber quienes son los desarrolladores con mayor edad.

return ==>
[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe',
   age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49,
   language: 'PHP' },
]
 */

const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];

  function ejercicio2(list1){
    let mayor=0;
    list1.forEach((element,index) => {
        mayor = element.age > mayor ? element.age : element.age;
    });
    list1.forEach((element,index) => {
        if(element.age == mayor)
        console.log(element);
    });
}

ejercicio2(list1);

/*Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, necesitamos crear nombre
 de usuario a cada persona registrada dependiendo del nombre y el año en el que nacieron. 
 Este nombre de usuario tiene que agregarse como una nueva propiedad llamada “userName".

return ==> 
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, 
  language: 'Ruby', userName: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20,
   language: 'Clojure',  userName: 'nore2000' }
]

*/
const list2 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];
  
  function ejercicio3(list2){
    let username;
    let lower;
    list2.forEach((element) =>{
        username = element.firstName + element.lastName.toLowerCase() + (2220 - element.age);
        username = username.replace('.','');
        element.userName = username;
    });
    console.log(list2);
  }

  ejercicio3(list2);