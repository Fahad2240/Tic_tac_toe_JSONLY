let boxes =document.querySelectorAll(".box");
let rstBtn = document.querySelector("#my-reset-btn");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turn0 = true;
const winPattern = [
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
]
boxes.forEach((box)=> {
 box.addEventListener("click", ()=>{
    console.log("box was clicked");
    if(turn0){
        box.innerText = "0";
        box.style.color = "red"
        turn0 = false;
    }
    else{
        box.innerText = "X";
        turn0 = true;
         box.style.color = "blue"
    }
    box.disabled = true ;
    checkWinner();

 });

});
const disabledBoxes = () => {
    for(box of boxes){
        box.disabled =true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations ! the winner Is ${winner}`
    disabledBoxes();
    msgContainer.classList.remove("hide");
}
const checkWinner = () =>{
    for(let pattern of winPattern){
     
         let pos1 = boxes[pattern[0]].innerText;
         let pos2 = boxes[pattern[1]].innerText;
         let pos3 = boxes[pattern[2]].innerText;
         if (pos1 != "" && pos2 != "" && pos3 != "" ){
            if (pos1 === pos2 && pos2 === pos3){
               if (pos1 === "0")
               { console.log("player One Win");
                showWinner("player One");
               }

               else{ console.log("player Two Win");
                showWinner("player Two");
               }
            }

         };


    };
};
const resetGame =() => {
    turn0 =true;
    enablesBoxes();
    msgContainer.classList.add("hide")
} 
enablesBoxes = () =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText ="";
       
    }
}
newGame.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);