/*Check the results of your assignGrade function from the conditionals exercise by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.*/

const assignGrade=function(score){

if(score>=85){
  return "A"
}

else if(score<85 && score>=70){
  return"B"
}

else if(score<70 && score>=55){
  return"C"
}

else if(score<55 && score>=40){

  return "D"
}

else{
return "F"
}

}

for(score=60; score<=100; score++){
  let grade=assignGrade(score);
  if(grade=="A"){
    console.log("For "+score+", you got an "+ grade)
  }
  else{
 console.log("For "+score+", you got a "+ grade)}
}
