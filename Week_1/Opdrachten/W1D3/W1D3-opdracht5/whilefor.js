let colors=["Red","Yellow","Blue","Orange","White","Black"];
let i=0;
while (i<colors.length){
  console.log(colors[i]);
  i++;
}

for(i=0;i<colors.length;i++){

  console.log(colors[i]);
}

colors.forEach(function(i) {console.log(i)})


/*1. Hoeveel regels neemt mijn for loop in beslag?
          3
2. Hoeveel regels neemt mijn `forEach` method in beslag?
          1
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en
zonder elke property handmatig te `console.log` en.
Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?*/
