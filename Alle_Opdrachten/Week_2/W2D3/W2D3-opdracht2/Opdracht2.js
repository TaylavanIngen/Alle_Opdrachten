//A

const arrayWithWords = ["nice", "awesome", "tof"]
const addTheWordCool = function(array) {
  array.push("cool");
  return array;
}

console.log("Add cool:", addTheWordCool(arrayWithWords));

//B

let fruits = ['appels', 'peren', 'citroenen'];

let amountOfElementsInArray = function(array) {

  return array.length;

}

console.log(amountOfElementsInArray(fruits));

//C


let benelux = ["Belgie", "Nederland", "Luxemburg"];

let selectBelgiumFromBenelux = function(array) {

  return array[0];
}


console.log(selectBelgiumFromBenelux(benelux));
// resultaat: "Belgie"


//D


let lastElementInArray = function(array) {

  return array[array.length - 1];
}


console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"


//E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function(array) {
  return presidents.slice(1);
}
const impeachTrumpSplice = function(array) {

  return presidents.splice(1);
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


//F


let wincIsLeuk = ['Winc', 'Academy', 'is', 'leuk', ';-}']

let stringsTogether = function(array) {

  return array.join(" ");
}


console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"


//G


let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];

let combineArrays = function(array1, array2) {

  return array1.concat(array2);

}


combineArrays([1, 2, 3], [4, 5, 6])
// result should be [1,2,3,4,5,6] 
