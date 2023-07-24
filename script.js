const container = document.querySelector(".container");

function createDivs(num) {
  for (let i = 1; i <= num; i++) {
    let gridRows = document.createElement("div");
    gridRows.classList.add("row");
    container.appendChild(gridRows);

    for (let j = 1; j <= num; j++) {
      let gridColumn = document.createElement("div");
      gridColumn.classList.add("column");
      gridRows.appendChild(gridColumn);
    }
  }
}

createDivs(50);
