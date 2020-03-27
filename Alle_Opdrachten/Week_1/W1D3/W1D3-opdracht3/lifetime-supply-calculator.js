const calculateSupply=function(age, amount){

  const maxAge=85;

var lifeConsumation= ((maxAge-age)*365)*amount ;

  console.log("You will need "+Math.round(lifeConsumation)+" snacks to last you until the ripe old age of "+maxAge);
}

calculateSupply(24, 3.12);
