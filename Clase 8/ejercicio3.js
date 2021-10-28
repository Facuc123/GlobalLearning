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