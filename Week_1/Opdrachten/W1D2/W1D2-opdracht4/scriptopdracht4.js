const age=25
const isFemale=true
const driverStatus="notBob"

if (age>=18){

  console.log("Welkom in mijn kroeg")

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
}

else {

  console.log("Ga naar huis")
}
