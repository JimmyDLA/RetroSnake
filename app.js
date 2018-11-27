
document.addEventListener("DOMContentLoaded", function () {
    console.log("JS is running");

    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    
    //add new image
    let ground = new Image();
    ground.src = "checkerBoard.jpg";
    let apple = new Image();
    apple.src = "apple.png";
    // console.log(ground);
    // //add new audio
    // let audio = new Audio();
    // audio.src =  "./path"
    let box = 38;
    let snake = [];
    snake[0] = { x: 8 * box, y: 9 * box };
    snake[1] = { x: 8 * box, y: 10 * box };
    let food = {
        x: Math.floor(Math.random() * 16) * box,
        y: Math.floor(Math.random() * 16) * box
    }
    let score = 0;
    let dir;
    

    document.addEventListener("keydown", direction);
    function direction(e){
        if (e.keyCode == 37 && dir != "RIGHT") {
            console.log("left");
            dir = "LEFT";
        } else if (e.keyCode == 38 && dir != "DOWN") {
            console.log("up");
            dir = "UP";
        } else if (e.keyCode == 39 && dir != "LEFT") {
            console.log("right");
            dir = "RIGHT";
        } else if (e.keyCode == 40 && dir != "UP") {
            console.log("down");
            dir = "DOWN";
        }
    }


    function draw() {
        // ctx.drawImage(src, x, y, width, height);
        ctx.drawImage(ground, 0,0,608,608);
        for(i=0; i < snake.length; i++){
            ctx.fillStyle = (i == 0) ? "green":"yellow";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            ctx.strokeStyle = "blue";
            ctx.strokeRect(snake[i].x, snake[i].y, box, box)
        }
        ctx.drawImage(apple, food.x, food.y, box, box);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (dir == "RIGHT") {
            console.log("move right");
            snakeX += box;
        }
        if (dir == "LEFT") {
            console.log("move left");
            snakeX -= box;
        }
        if (dir == "UP") {
            console.log("move up");
            snakeY -= box;
        }
        if (dir == "DOWN") {
            console.log("move down");
            snakeY += box;
        }

        let newHead = {
            x: snakeX,
            y: snakeY
        }

        snake.pop();
        snake.unshift(newHead);
        console.log(snake);
        
    }   

    
    let startGame = setInterval(draw, 200);













    
    // let gridContainer = $("#container");
    // let snakeHead = document.querySelector("#snake");
    // let snakeHead2= document.getElementById("snake");
    // let snakeHead3 = $("#snake");
    // console.log(snakeHead);
    // console.log(snakeHead2);
    // console.log(snakeHead3);
    
    // let boxSize;


    // function drawBoxes(){
    //     let groundSize = parseInt($("#container").css("height"));
    //     let ratio = 700/groundSize;
    //     boxSize = parseFloat(20 / ratio);
    //     console.log(boxSize);
        
    //     let totalBoxes = ((groundSize * groundSize)/(boxSize * boxSize)).toFixed(0);
    //     for (let i = 0; i < totalBoxes ; i++) {
    //         let box = document.createElement("DIV")
    //         if (i%2 == 0) {
    //             box.className = "box dark";
    //             box.id = "" + i;

    //         } else{
    //             box.className = "box light";
    //             box.id = ""+ i;
    //         }
    //         box.style.height = boxSize;
    //         box.style.width = boxSize;
    //         document.querySelector("#container").appendChild(box);
    //     }
    //     drawSnake();
    // }

    // function drawSnake(){
    //     //get snake head
    //     snakeHead.style.height = boxSize.toFixed(4);
    //     snakeHead.style.width = boxSize.toFixed(4);
    //     // get center position
    //     let center = document.getElementById("612");
    //     let centerY = parseInt(center.offsetTop);
    //     let centerX = parseInt(center.offsetLeft);
    //     // give center position to snake
    //     snakeHead.style.left = centerX ;
    //     snakeHead.style.top = centerY ;
        
    //     setInterval(moveSnake, 1000);
       

    // }
    
    // let sqID = 612;


    // function moveSnake(){  
    //     function checkKey(e) {
    //         console.log('checkKey');
            

    //         e = e || window.event;

    //         if (e.keyCode === 38) {
    //             // up arrow
    //         }
    //         else if (e.keyCode === 40) {
    //             // down arrow
    //         }
    //         else if (e.keyCode === 37) {
    //             // left arrow
    //             //move left
    //             sqID -= 1;
    //             let center = $("#" + sqID)[0];
    //             let centerX = parseInt(center.offsetLeft);
    //             snakeHead.style.left = centerX;   
    //             console.log('sqid = ' + sqID);
    //             console.log('centerX = ' + centerX);         
    //         }
    //         else if (e.keyCode === 39) {
    //             // right arrow
    //             //move right
    //             sqID += 1;
    //             let center = $("#" + sqID)[0];
    //             let centerX = parseInt(center.offsetLeft);
    //             snakeHead.style.left = centerX; 
    //             console.log('sqid = ' + sqID);
    //             console.log('centerX = '+ centerX);
                           
    //         }

    //     }
    //     function uniKeyCode(event) {
    //         var key = event.keyCode;
    //         console.log('')
    //     }
    //     $("html").on("keypress", checkKey);
    //     // $("body").on("keyup", checkKey);


    // }

    // drawBoxes();

})
