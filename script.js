let container = document.querySelector("div.container");

container.style.height = "50vw";
container.style.width = "50vw";
container.style.margin = "auto";
container.style.padding = "auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = "1px solid black";

for (let i=0; i<16; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexWrap = "wrap";
    row.style.width = "50vw";
    for (let i=0; i<16; i++) {
        let div = document.createElement(`div`);
        //div.style.border = "1px solid black";
        div.style.flex = "1";
        div.addEventListener("mouseover", () => {
            div.style.background = "black";
        })
        row.appendChild(div);
    }
    container.appendChild(row);
}