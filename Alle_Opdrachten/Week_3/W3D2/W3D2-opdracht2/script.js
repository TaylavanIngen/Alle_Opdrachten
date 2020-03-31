const huiswerkMaken=function(vak, callback){

  console.log(`Goed goed, ik ga nu mijn ${vak} huiswerk maken.`);
  setTimeout(function(){callback()}, 2000);
};

const klaarMetHuiswerkMaken=function(){

  console.log("Kijk pap/mam, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerkMaken);
