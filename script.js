document.body.onload = addGrid;

function addGrid() {
    for (let i = 1; i <= 16 * 16; i++) {
        const column = document.createElement("div");
        column.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            column.style.background = "#" + randomColor;
        })
        column.className = "item";
        document.getElementById("grid").appendChild(column);
    }
}