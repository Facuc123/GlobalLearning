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