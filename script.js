function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function toggleDarkLight() {
  var body = document.getElementById("top_page");
  var currentClass = body.className;

  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  var textChangementCouleur = document.getElementById("changementCouleur");
  if(body.className == "dark-mode"){
     textChangementCouleur.innerHTML = "🌞";
     textChangementCouleur.style.fontSize = "18px";
  }else{
     textChangementCouleur.innerHTML = "🌛";
     textChangementCouleur.style.fontSize = "18px";
  }
  closeNav();

}



/*
function myFunction() {
    var hash = sha256.create();
    hash.update('');
    var x = document.getElementById("myDIV");
    x.innerHTML = hash.hex();
}

*/
