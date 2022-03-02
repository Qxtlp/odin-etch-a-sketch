document.body.onload = addGrid;

function addGrid() {
    for (let i = 1; i <= 16 * 16; i++) {
        const column = document.createElement("div");
        column.className = "item";
        document.getElementById("grid").appendChild(column);

    }
}