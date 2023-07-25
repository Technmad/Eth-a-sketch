const container = document.querySelector(".container-grid");

createDivs(16);

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

const divs = document.querySelectorAll(".column");
//console.log(divs);
divs.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "pink";
  });
});
