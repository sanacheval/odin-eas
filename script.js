let body = document.querySelector("body");
let btn = document.createElement("button");
let container = document.querySelector("div.container");
btn.textContent = "Change Size of Sketchpad";
btn.style.color = "black";
btn.style.fontSize = "2vw";
btn.style.background = "rgb(141, 141, 216)";
btn.style.border = "1px solid black";
btn.style.display = "block";
btn.style.margin = "auto";
btn.style.marginTop = "15px";
btn.style.marginBottom = "10px";
btn.style.borderRadius = "10px";
body.insertBefore(btn, container);

let notes = document.createElement("p");
notes.style.display = "block";
notes.style.textAlign = "center";
notes.style.fontSize = "1.5vw";
notes.textContent = "Click once to draw, again to erase, and a third time to move around freely";
body.insertBefore(notes, container);

let reset = document.createElement("button");
reset.textContent = "Clear sketchpad";
body.insertBefore(reset, container)

container.style.height = "50vw";
container.style.width = "50vw";
container.style.margin = "auto";
container.style.padding = "auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = "1px solid black";

function makeSketchpad (size) {
    container.innerHTML = "";
    for (let i=0; i<size; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexWrap = "wrap";
        row.style.width = "50vw";
        for (let i=0; i<size; i++) {
            let div = document.createElement(`div`);
            div.style.flex = "1";
            let clickCount=0;
            container.addEventListener("click", () => {
                clickCount++;
                console.log(clickCount);
                if (clickCount>2) {
                    container.style.cursor = "auto";
                    clickCount=0;
                }
                div.addEventListener("mouseover", () => {
                    //draw
                    if (clickCount===1) {
                        container.style.cursor = "pointer";
                        div.style.background = "black";
                    }
                    //erase
                    else if (clickCount===2){
                        container.style.cursor = "not-allowed";
                        div.style.background = "white";
                    }
                })
                container.addEventListener("mouseleave", () => {
                    container.style.cursor = "auto";
                    clickCount=0;
                })
            })
            reset.addEventListener("click", () => {
                div.style.background = "white";
            })

            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

let max=16;
makeSketchpad(max);

btn.addEventListener("click", () => {
    max = prompt("Enter the width of sketchpad");
    while (max>100) {
        max = prompt("Please make the width below 100");
    }
    makeSketchpad(max);
})