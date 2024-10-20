let color = "black";
let click = false; 

document.addEventListener("DOMContentLoaded",function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click",function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now u can draw. click on the screen to stop drawing";
            }
            else{
                draw.innerHTML = "click on the screen to draw";
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click",function(){
        let size = getsize();
        createBoard(size);
    })
    console.log("yoo");
})

function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numd = size*size;

    for(let i = 0;i<numd;i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover",colordiv)
        board.insertAdjacentElement("beforeend",div)
    }
}

function getsize(){
    let input = prompt("give me the size of the board");
    let message = document.querySelector("#message")
    if(input==""){
        message.innerHTML = "number dede bhai";
    }

    else if(input<=0 || input>100){
        message.innerHTML = "invalid h, number 1 to 100 hona chahiye";
    }

    else{
        message.innerHTML = "now u can play!";
        return input;
    }
}


function colordiv(){
    if(click){
        if(color=="random"){
            this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`
        }

        else{
            this.style.backgroundColor = 'black';
        }
    }
}

function setcolor(colorchoice){
    color = colorchoice;
}


function reset(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div)=>div.style.backgroundColor = "white");
}
