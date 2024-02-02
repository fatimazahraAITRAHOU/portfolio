let navigation = document.getElementById('nav');
let menuTogglet = document.getElementById('menu');
let header = document.querySelector('.hedear');
menuTogglet.addEventListener('click',function(){
    navigation.classList.toggle('open')
})

let swt = document.getElementById("swt");
let body = document.getElementById("h");
let dark = document.getElementsByClassName("dark");
let card1 = document.getElementsByClassName("card1");
let footer = document.getElementById("footer");
let nav = document.getElementById("nav");

swt.addEventListener("click", function () {
  if (swt.classList.contains("fa-sun")) {
    setTimeout(() => {
      swt.classList.replace("fa-sun", "fa-moon");
    }, 500);

    
    body.style.backgroundColor = "#2D033B";
     
    for (let i = 0; i < dark.length; i++) {
      dark[i].style.color = "#C147E9";
      nav.style.backgroundColor = "#2D033B";
     footer.style.backgroundColor = "#C147E9";
     card1.style.backgroundColor = "#C147E9";
     document.body.style.backgroundColor = "#2D033B";

    }
  } else {
    setTimeout(() => {
      swt.classList.replace("fa-moon", "fa-sun");
    }, 500);

    for (let i = 0; i < dark.length; i++) {
      dark[i].style.color = "";
      nav.style.backgroundColor = "";
       footer.style.backgroundColor = "";
       card1.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
     
    }

  }
  
});