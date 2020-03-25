//A

const superheroes = [
{name: "Batman", alter_ego: "Bruce Wayne"},
{name: "Superman", alter_ego: "Clark Kent"},
{name: "Spiderman", alter_ego: "Peter Parker"}]


let findSpiderMan= function(array){

  return array.find(function(superhero){
  return superhero.name==="Spiderman";}
)};


console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


//B



let numbers=[1, 2, 3];

let doubleArrayValues= function(array){

  let newNumbers= [];
  array.forEach(function(i){

    newNumbers.push(i*2);
  });
  return newNumbers;
};



console.log(doubleArrayValues(numbers));
// result should be [2, 4, 6]


/*let numbersarray=[1, 2, 3];

let doubleArrayValues= function(array){

const newNumbers2 = array.map(function double(i) {
  return i*2;
});
return newNumbers2;
}


console.log(doubleArrayValues(numbersarray));
// result should be [2, 4, 6]*/

//C



let containsNumberBiggerThan10=function(array){

return array.some(function(number){
  return number > 10;
})


}


containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) ;
// result should be true

//D



let isItalyInTheGreat7=function(array){

return array.some(function(i){
  return i ==="Italy";
})

}




isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])
// result should be true


//E


let tenfold=function(array){

  let tenfoldArray= array.map(function(i){

    return i*10;

  });

  return tenfoldArray;
}




console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//F


let isBelow100=function(array){

  return array.every(function(i){

    return i<100;
  })
}





console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false


//G



let bigSum=function(array){

  return array.reduce(function(currentTotal, numbers){

    return currentTotal+numbers;

  }, 0)
}



console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118
