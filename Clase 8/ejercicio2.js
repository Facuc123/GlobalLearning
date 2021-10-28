
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