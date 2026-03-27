const winner=document.querySelector('.winner');
const buttons=document.querySelectorAll('.box');
function Player(move,turn){
  let playerMove=move;
  let playerTurn=turn;
  const results=[[false,false,false],[false,false,false],[false,false,false]]
 const changeTurn=()=>{playerTurn=!playerTurn}
 const getTurn=()=>{return playerTurn};
 const updateResult=(row,column)=>{results[row-1][column-1]=true};
 const checkResult=()=>{
if(results[0][0]&&results[0][1]&&results[0][2]){
  return true;
}
if(results[1][0]&&results[1][1]&&results[1][2]){
return true;
}
if(results[2][0]&&results[2][1]&&results[2][2]){
return true;
}
if(results[0][0]&&results[1][0]&&results[2][0]){
return true;
}
if(results[0][1]&&results[1][1]&&results[2][1]){
return true;
}
if(results[0][2]&&results[1][2]&&results[2][2]){
return true;
}
if(results[0][0]&&results[1][1]&&results[2][2]){
return true;
}
if(results[0][2]&&results[1][1]&&results[2][0]){
return true;
}
else{
  return false
}

 }



  return{playerMove,changeTurn,getTurn,updateResult,checkResult};

}
const playerX=Player('X',true);
const playerO=Player('O',false);
document.addEventListener('click',(e)=>{
  if(winner.innerText=='tie'){
    return
  }
if(playerO.checkResult()){
  return;
}
if(playerX.checkResult()){
  return
}
  if(e.target.tagName ==='BUTTON'){
    console.log('hello');
   if(playerX.getTurn()){
    if(e.target.textContent){
      e.stopImmediatePropagation();
    }
     e.target.textContent='X';
     const column=parseInt(e.target.dataset.column);
     const row =parseInt(e.target.dataset.row);
     playerX.updateResult(row,column);
     if(playerX.checkResult()){
      winner.textContent='player x wins';
     }
     else{
      if(numOfFilledbtns()===9){
 winner.textContent='tie';
 //a problem occurs where when it's a tie the text content could be modified
 //i could do a for loop and prevent the event from each button but i have a better idea which is to count on the inside of the winner tag so if i wanted to restart the game i can just delete the content of each button and reassign the results and have a fresh ganme

 return;
      }
     }
     
     playerX.changeTurn();
     playerO.changeTurn();
   }
   else if(playerO.getTurn){
    // to not change the value if it already has one
     if(e.target.textContent){
      e.stopImmediatePropagation();
      return
    }
     e.target.textContent='O';
      const column=parseInt(e.target.dataset.column);
     const row =parseInt(e.target.dataset.row);
     playerO.updateResult(row,column);
     if(playerO.checkResult()){
      winner.textContent='player O wins';
     }
      else{
      if(numOfFilledbtns()===9){
 winner.textContent='tie';
 return;
      }
     }
     playerO.changeTurn();
     playerX.changeTurn();

   }
  }
})
function numOfFilledbtns(){//counting the number of filled boxes so that if no result appears i show a tie as there is no room left
  let result=0;
  buttons.forEach((btn)=>{
if(btn.textContent){
  result++;
}
 })
 return result ;
}