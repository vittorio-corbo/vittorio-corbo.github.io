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
    setTimeout(showPage, 1000);

}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
