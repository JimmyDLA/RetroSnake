
document.addEventListener("DOMContentLoaded", function () {
    console.log("JS is running");
    
    let gridContainer = $("#container");

    function drawBoxes(){
        let groundSize = parseInt($("#container").css("height"));
        let ratio = 700/groundSize;
        let boxSize = 20 / ratio;
        let totalBoxes = ((groundSize * groundSize)/(boxSize * boxSize)).toFixed(0);
        for (let i = 0; i < totalBoxes ; i++) {
            let box = document.createElement("DIV")
            if (i%2 == 0) {
                box.className = "box dark";
                box.id = "" + i;

            } else{
                box.className = "box light";
                box.id = ""+ i;
            }
            box.style.height = boxSize;
            box.style.width = boxSize;
            document.querySelector("#container").appendChild(box);
        }
    }

    drawBoxes();

})
