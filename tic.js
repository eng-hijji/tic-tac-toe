const winner=document.querySelector('.winner');
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
     
     playerX.changeTurn();
     playerO.changeTurn();
   }
   else if(playerO.getTurn){
    // to not change the value if it alredy has one
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
     playerO.changeTurn();
     playerX.changeTurn();

   }
  }
})
