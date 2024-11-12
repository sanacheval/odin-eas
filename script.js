let container = document.querySelector("div.container");

for (let i=0; i<16; i++) {
    for (let i=0; i<16; i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.margin = "auto";
        div.style.padding = "2.9%";
        div.addEventListener("mouseover", () => {
            div.style.background = "pink";
        })
        container.appendChild(div);
    }
    container.style.margin = "auto";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.border = "none";
}