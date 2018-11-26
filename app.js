
document.addEventListener("DOMContentLoaded", function () {
    console.log("JS is running");
    
    let gridContainer = $("#container");
    let snakeHead = document.querySelector("#snake");
    let boxSize;


    function drawBoxes(){
        let groundSize = parseInt($("#container").css("height"));
        let ratio = 700/groundSize;
        boxSize = (20 / ratio);
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
        drawSnake();
    }

    function drawSnake(){
        //get snake head
        snakeHead.style.height = boxSize;
        snakeHead.style.width = boxSize;
        // get center position
        let center = $("#612")[0];
        let centerY = parseInt(center.offsetTop);
        let centerX = parseInt(center.offsetLeft);
        // give center position to snake
        snakeHead.style.left = centerX;
        snakeHead.style.top = centerY;
        
        setInterval(moveSnake, 1000);
       

    }
    
    function moveSnake(){  
        let moveY = boxSize
        let moveX = boxSize
        let snakeX = parseInt(snakeHead.style.left);
        let snakeY = parseInt(snakeHead.style.top);
        snakeHead.style.left = snakeX + moveX;
        
        function checkKey(e) {

            e = e || window.event;

            if (e.keyCode == '38') {
                // up arrow
                moveX = -moveX;
            }
            else if (e.keyCode == '40') {
                // down arrow
                moveX = -moveX;
            }
            else if (e.keyCode == '37') {
                // left arrow
                moveY = -moveY;
            }
            else if (e.keyCode == '39') {
                // right arrow
                moveY = -moveY;
            }

        }


    }

    drawBoxes();

})
