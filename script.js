const container = document.querySelector(".container");



const manageBoard = (()=>{
    let board = [];
    let moveCount = 0;
    const displayBoard = ()=>{
        for (let i = 0; i < 9; i++) {
            let div = document.createElement("div");
            div.classList.add("box");
            div.id = i;
            if((i==1)||(i==7)){
                div.classList.add("topBottom")
            }
            else if((i==3)||(i==5)){
                div.classList.add("leftRight")
            }
            else if(i==4){div.classList.add("center")}
            div.addEventListener('click',()=>{
                if(moveCount%2==0){
                    const cross = document.createElement("img");
                    cross.style.position = 'fixed';
                    cross.src = "./close.png";
                    div.appendChild(cross)
                    moveCount++;
                }
                else{
                    const circle = document.createElement("img");
                    circle.style.position = 'fixed';
                    circle.src = "./rec.png";
                    div.appendChild(circle)
                    moveCount++;
                }
            });
            container.appendChild(div);
        }
    }
    return {displayBoard};
})();

manageBoard.displayBoard();