const container = document.querySelector(".container-grid");

// create new grid
function createDivs(num) {
  for (let i = 1; i <= num; i++) {
    let gridRows = document.createElement("div");
    gridRows.classList.add("row");
    container.appendChild(gridRows);
    //console.log(gridRows);

    for (let j = 1; j <= num; j++) {
      let gridColumn = document.createElement("div");
      gridColumn.classList.add("column");
      gridRows.appendChild(gridColumn);
      //console.log(gridColumn);
    }
  }
}

// removes older grid
function resetDivs() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

// Slider
const mySlider = document.querySelector("#my-slider");
const rangeValue = document.querySelector("#rangeValue");

mySlider.addEventListener("input", function () {
  rangeValue.innerHTML = mySlider.value;
  let num = rangeValue.innerHTML;
  resetDivs();
  createDivs(num);
});

function clearGrid() {
  divs.forEach((item) => {
    item.style.backgroundColor = null;
  });
}

function eraseGrid() {
  divs.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = "red";
    });
  });
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function rainbow() {
  divs.forEach((item) => {
    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = getRandomColor();
    });
  });
}

createDivs(16);
const divs = document.querySelectorAll(".column");
//console.log(divs);

function chooseColor() {
  let chosedColor = colorsbttn.value;
  divs.forEach((item) => {
    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = chosedColor;
    });
  });
}

const clearbttn = document.querySelector(".clear");
const eraserbttn = document.querySelector(".eraser");
const rainbowbttn = document.querySelector(".rgb");
const colorsbttn = document.querySelector("#color");

rainbowbttn.addEventListener("click", rainbow);
clearbttn.addEventListener("click", clearGrid);
eraserbttn.addEventListener("click", eraseGrid);
colorsbttn.addEventListener("input", chooseColor);
