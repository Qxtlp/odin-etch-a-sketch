function addGrid(size) {
    const grid = document.querySelector("#grid");
    const child = grid.querySelectorAll("div");
    child.forEach(child => child.remove());
    grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr) `
    console.log(size);
    for (let i = 1; i <= size * size; i++) {
        const column = document.createElement("div");
        column.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            column.style.background = "#" + randomColor;
        })
        column.className = "item";
        document.getElementById("grid").appendChild(column);
    }
}