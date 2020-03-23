const age=25;
const isFemale=true;
const driverStatus="notBob";
const name="Marga";
const totalAmount=43


if (age>=18){

  console.log("Welkom in mijn kroeg")

  if(age>=18 && age<=25){

    console.log("Gefeliciteerd, je krijgt 50% korting.")
  }

  else{

    console.log("Je bent helaas te oud voor korting.")
  }

  if (isFemale==true){

    console.log("Jij krijgt korting, voor ladies night.")
  }
  else {

    console.log("Jij krijgt geen korting voor ladies night.")
  }

  if (driverStatus=="Bob"){
    console.log("Jij mag rijden.")
  }
  else {
    console.log("jij mag niet rijden.")
  }

  if(name==="Sarah" || name==="Sara" || name==="Bram" || name==="Abraham"){
    console.log("Gratis biertje voor jou!")
  }

  else {
    console.log("Sorry maar je krijgt geen biertje.")
  }

  //Hier komt de if boom voor 50jaar

  if(totalAmount >=25){

    console.log("Jij krijgt gratis vega-bitterballen!")

    if(totalAmount >=50){

      console.log("Jij krijgt gratis nachos!")

      if (totalAmount >=100){

        console.log("Hey big spender, gratis champagne voor jou!")
      }
    }
  }
}

else {

  console.log("Ga naar huis")
}
