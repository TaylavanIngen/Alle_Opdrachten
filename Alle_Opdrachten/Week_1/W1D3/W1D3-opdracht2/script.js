

/*DEEL A FUNCTIE
maak een sandwich met kaas

1.Snijd een wit bolletje in twee helften
2.Smeer een helft in met mayo
3.Smeer een helft in met mosterd
4.Leg 2 plakjes kaas op 1 zijde
5.Doe de helften op elkaar
6.Daar is het broodje! */



function maakSandwich() {

console.log("Slice bun");
console.log("Put mayo on side1");
console.log("Put mustard on side2");
console.log("Put the cheese on side1");
console.log("Put the sides on top of each other");

}

maakSandwich();

//DEEL B


//Hier declare ik een function
function makeSandwich(topping){

    console.log("Here you go, a " +topping+" sandwich!");
  }

//Hier call ik de function
makeSandwich('kaas');
makeSandwich('ham');


//DEEL C

function calculateDiscountedPrice(totalAmount, discount){
  return Math.round(totalAmount-discount);
}

calculateDiscountedPrice(43,4.7);

//DEEL D

function calculateDiscountedPrice25(totalAmount, discount){

  if (totalAmount>25){
    return Math.round(totalAmount-discount);
  }
  else{
    return totalAmount;
  }
}

calculateDiscountedPrice25(24, 3);
