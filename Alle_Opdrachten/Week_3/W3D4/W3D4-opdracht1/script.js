//geef buttons een event


document.querySelectorAll(".filterButton").forEach(item => {

  console.log(item);

  item.addEventListener('change', function(event) {

    while (document.getElementById("container").hasChildNodes()) {
      document.getElementById("container").removeChild(document.getElementById("container").firstChild);}

    switch(event.target.value){

      case "landenlijst": addLandsToDOM(randomPersonData);
      break;

  }})
});

//add to dom


const addLandsToDOM = function(array) {
    let containerDiv=document.getElementById("container");
    let landenDiv=document.createElement("div");
    let landenUL=document.createElement("ul");
    containerDiv.appendChild(landenDiv);
    landenDiv.appendChild(landenUL);

    let landenArray= array.map(function(person){

      return person.region;

    });

    let filteredLandenArray=[...new Set(landenArray)];

    filteredLandenArray.forEach(land=>{


    let landItem = document.createElement("li");


    landItem.appendChild(document.createTextNode(land));
    landenUL.appendChild(landItem);


  })
};






//
