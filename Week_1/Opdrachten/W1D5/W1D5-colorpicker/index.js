//JS voor dropdownbutton


/*Als je over button hovert of op clickt, verandert button van kleur
      & togglet het MENU
(if hover or click =true verander class van .dropdowncontentdefault in .dropdowncontenttoggled)
 */
let dropdownToggler = document.getElementById("listItemDiv");
let menuButton = document.getElementById("menu-button");
let listItems=document.getElementsByClassName("list-items");




const toggleHamburger=function(){

menuButton.addEventListener('click', function(i) {

dropdownToggler.classList.toggle("dropdown-contentToggled")
});

}

toggleHamburger();


const toggleMenu=function(){

  dropdownToggler.addEventListener('click', function(){

    dropdownToggler.classList.toggle("dropdown-contentDefault")
  });
}



/*
const hoverMenu=function(){

  let menuWhole=document.getElementById("dropdown-div");
  menuWhole.addEventListener('mouseover', function(event){

    event.dropdownToggler.classList.toggle("dropdown-contentToggled")

  });

  menuWhole.addEventListener('mouseout', function(event){

    event.dropdownToggler.classList.toggle("dropdown-contentDefault")
  });




}

/*
menuButton.addEventListener('mouseover', function(i) {
  if (dropdownToggler.classList != "dropdown-contentToggled") {
    dropdownToggler.classList = "dropdown-contentToggled"
  }
});

menuButton.addEventListener('mouseout', function(i) {
  if (dropdownToggler.classList != "dropdown-contentDefault") {
    dropdownToggler.classList = "dropdown-contentDefault"
  }
});


dropdownToggler.addEventListener('mouseover', function(){

if (dropdownToggler.classList!= "")

}) */








//JS voor list elementen


/*let listElements=document.getElementByClassName("list-item");

listElements.addEventListener('click', function(){


})
*/

let body=document.body;
let yellowButton=document.getElementById("itemYellow");
let greenButton=document.getElementById("itemGreen");
let redButton=document.getElementById("itemRed");
let blueButton=document.getElementById("itemBlue");







const beYellow=function(){

  yellowButton.addEventListener("click", function(){

    body.classList="backgroundYellow";
    yellowButton.classList="backgroundYellow";
    redButton.classList="list-item";
    greenButton.classList="list-item";
    blueButton.classList="list-item";
    toggleHamburger();

  })
}

beYellow();

const beBlue=function(){

  blueButton.addEventListener("click", function(){

    body.classList="backgroundBlue";
    blueButton.classList="backgroundBlue";
    yellowButton.classList="list-item";
    redButton.classList="list-item";
    greenButton.classList="list-item";
    toggleHamburger();

  })
}

beBlue();

const beGreen=function(){

  greenButton.addEventListener("click", function(){

    body.classList="backgroundGreen";
    greenButton.classList="backgroundGreen";
    blueButton.classList="list-item";
    yellowButton.classList="list-item";
    redButton.classList="list-item";
    toggleHamburger();

  })
}

beGreen();

const beRed=function(){

  redButton.addEventListener("click", function(){

    body.classList="backgroundRed";
    redButton.classList="backgroundRed";
    blueButton.classList="list-item";
    yellowButton.classList="list-item";
    greenButton.classList="list-item";
    toggleHamburger();

  })
}

beRed();
