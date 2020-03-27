document.querySelectorAll(".big-five-button").forEach(item=> { item.addEventListener('click', event => {
  console.log("click!");
  console.log(item.innerHTML)
}
)
}
)


let newSpottedAnimal=document.createElement("li");
newSpottedAnimal.innerHTML="Rhino";

let SpottedAnimalsList=document.getElementById("spotted-animals-list");

SpottedAnimalsList.appendChild(newSpottedAnimal);


let removeAllButton= document.getElementById("remove-all-button");

removeAllButton.addEventListener('click', event =>{

while (SpottedAnimalsList.hasChildNodes()) {
  SpottedAnimalsList.removeChild(SpottedAnimalsList.firstChild);

}})




//list.removeChild(list.childNodes[0])
