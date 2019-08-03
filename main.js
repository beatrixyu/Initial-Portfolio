let personal = true;
let arrPersonal = document.getElementById("personalstatement").children;

// hidden element
arrPersonal[0].style.right = "-500px";
arrPersonal[0].style.opacity = "0";
arrPersonal[1].style.opacity = "1";

window.onscroll = scrollFunction;
window.onload = mainContent;
function personalstatement() {
  let personalstatement = document
    .getElementById("personalstatement")
    .getBoundingClientRect().top;
  console.log(personalstatement[0].offsetTop);
  if (personalstatement < window.innerHeight / 1.2 && personal) {
    personal = false;
    setTimeout(() => {
      arrPersonal[0].style.right = "0";
      arrPersonal[0].style.opacity = "1";
    }, 700);
    setTimeout(() => {
      arrPersonal[1].style.opacity = "1";
    }, 2500);
  }
}

window.addEventListener("scroll", personalstatement);
