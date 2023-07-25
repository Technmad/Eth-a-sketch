const container = document.querySelector(".container-grid");
createDivs(16);
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

// each small box in a grid is divs
const divs = document.querySelectorAll(".column");
//console.log(divs);
divs.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "pink";
  });
});

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

const clearbttn = document.querySelector(".clear");
const eraserbttn = document.querySelector(".eraser");

clearbttn.addEventListener("click", clearGrid);
eraserbttn.addEventListener("click", eraseGrid);
