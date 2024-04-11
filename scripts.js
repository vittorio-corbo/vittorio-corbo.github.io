function changeFx() {
  document.getElementById("demos").innerHTML = "Paragraph changed.";
}

//HIGHLIGHT PAGE I AM ON\

  function change_text() {
      document.getElementById("myH2").style.color = "#0000ff";
  }
  function old_color() {
      //my color
      document.getElementById("myH2").style.color = "#FFFFFF";
      //document.getElementById("myH2").style.color = "#000f27";
  }
  

function gimme_pizza() {
  var pizza = "pizzaaaa";
  document.getElementById("pizzas").innerHTML = pizza;
}




function myFunction() {
    //var myVar;
    //myVar = setTimeout(showPage, 1000);
    setTimeout(showPage, 500);

}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}






// FX FOR LIGHTBOX/MODAL
var never = 0
  
// Get arbitrary element with id "my-element"
//var myElementToCheckIfClicksAreInsideOf = document.querySelector("#pizza");
var myElementToCheckIfClicksAreInsideOf = document.querySelector(".modal-content");
// Listen for click events on body

document.body.addEventListener('click', function (event) {
    console.log(never)
    if ((never != 0) && (event.target.className == "modal")){ //ADD CHECK IF THINGY IS VISIBLE
      //CHECK IF IT IS OF CLASS MODAL
      if (!myElementToCheckIfClicksAreInsideOf.contains(event.target)) {
        if (event.target.tagName == 'DIV'){
          closeModal(event.target.id)
        }
      }
    }else{
      never = 1
    }
});


function openModal(div_name) {
  document.getElementById(div_name).style.display = "block";
  never = 0
}


function closeModal(div_id) {
  document.getElementById(div_id).style.display = "none";

  console.log("close")
}

var slideIndex = 1;
//showSlides(slideIndex);//I think I don't need this, fingers crossed tho!

function plusSlides(n,class_name) {
  showSlides(slideIndex += n,class_name);
}

function currentSlide(n,class_name) {
  showSlides(slideIndex = n,class_name);
}

function showSlides(n,class_name) {
  var i;
  var slides = document.getElementsByClassName(class_name);
  //var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function hideall(){
  //var divsToHide = document.getElementsByClassName("right_main"); //divsToHide is an array
  var divsToHide = document.getElementsByClassName("center_main"); //divsToHide is an array
  for(var i = 0; i < divsToHide.length; i++){
      //divsToHide[i].style.visibility = "hidden"; // or
      divsToHide[i].style.display = "none"; // depending on what you're doing
  }
}

function show(id){
  // classname.style.display = initial;
  document.getElementById(id).style.display = 'block';
  // classname.style.display = initial;

}


// FOR LEFT EXPANDING NAV
function toggleSubMenu(menu) {
  // Hide all submenus
  document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.style.display = 'none';
  });

  // Remove active class from all menu items
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('active');
  });

  // Show the clicked submenu and mark the menu as active
  const submenu = document.getElementById(`submenu${menu}`);
  submenu.style.display = 'block';
  const activeMenuItem = document.querySelector(`.menu-item[onclick="toggleSubMenu(${menu})"]`);
  activeMenuItem.classList.add('active');
}



const obs = new IntersectionObserver(
  (entries, observer) => {
    entries.map((entry) => {
      sectionStates[Number(entry.target.getAttribute("data-menu-section"))] =
        entry.isIntersecting;
    });
    const idx = sectionStates.findIndex(Boolean);
    // if (idx > -1) console.log(idx);
    if (idx > -1) toggleSubMenu(idx);
  },
  { rootMargin: "-50%" }
);

const sections = document.querySelectorAll("[data-menu-section]");
const sectionStates = Array(sections.length).fill(false);
sections.forEach((elm) => obs.observe(elm));



//try
function handleHashChange() {

  var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
  //alert(hash);

  if (hash != ""){
    hideall();
    show(hash);
    //go to top
    window.scrollTo(0, 0);//hakcy solution
  }else{
    //show main one
    //hideall();
    //show options
    show("prof");
    show("vitto");
    show("smol");
    show("twin");

  }
}

window.addEventListener('hashchange', handleHashChange)
handleHashChange()




