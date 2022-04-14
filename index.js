const h1Element = document.querySelector("h1");
h1Element.style.textAlign = "center";

const navElement = document.querySelector("nav");
navElement.style.backgroundColor = "#CEE4FD";
navElement.style.color = "darkblue";
navElement.style.height = "35px";
navElement.style.margin = "2rem";
navElement.style.fontSize = "1.3rem";
navElement.style.padding = "1rem";

const divItems = document.querySelectorAll(".item");
divItems.forEach((element) => {
  element.style.border = "1px solid grey";
  element.style.height = "30px";
  element.style.padding = "1rem";
});

const divCities = document.querySelector(".cities");

const button = document.querySelector(".btnShowhide");
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.marginTop = "2rem";
button.style.float = "right";
button.style.height = "40px";

let showCities = true;

button.addEventListener("click", () => {
  if (showCities) {
    showCities = false;
    divCities.style.visibility = "hidden";
    button.innerText = "Show destinations";
  } else {
    showCities = true;
    divCities.style.visibility = "visible";
    button.innerText = "Hide destinations";
  }
});

const paragraph = document.querySelector("p");

for (let i = 0; i < divItems.length; i++) {
  divItems[i].onclick = function () {
    paragraph.textContent = `You selected ${divItems[i].textContent}`;
    paragraph.style.backgroundColor = "#D6F1D9";
    paragraph.style.color = "darkgreen";
    paragraph.style.fontSize = "1.5rem";
    paragraph.style.padding = "1rem ";
    paragraph.style.margin = "6rem 1rem";
  };

  if (paragraph.textContent !== "") {
    paragraph.style.display = "none";
  } else {
    paragraph.style.display = "block";
  }
}
