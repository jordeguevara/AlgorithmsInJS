
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    const currentState = JSON.parse(JSON.stringify(board)) //copy of original , now we muatate board  
    for(let row = 0; row < board.length;row++){
        for(let col =0; col < board[row].length;col++){
            if(isAlive(currentState[row][col])){
                
                if(fewerThanTwoNeighbors(currentState, row, col)){
                    board[row][col] = 0; //underpop
                }
           
                else if (doesLiveOn(currentState,row,col)){
                    board[row][col] = 1; // thrive
                }
                else if (doesDie(currentState,row,col)){
                    board[row][col] = 0; //overpop
                }
            
            }
            else{
                if(hasExatctlyThreeNeighbors(currentState, row, col)){
                    board[row][col] = 1;
                }
            }
        }
    }
    
    return board

};

const fewerThanTwoNeighbors = (board, row, col) => {
  const numOfNeighbors =  checkNeighbors(board,row,col);
  return numOfNeighbors < 2; 
    
}

const doesLiveOn = (board, row, col)  =>{
    const numOfNeighbors =  checkNeighbors(board,row,col);
    let result = numOfNeighbors >= 2 ? (numOfNeighbors <= 3 ? true: false) : false;
    return result;
   
}

const doesDie = (board, row, col) => {
    const numOfNeighbors =  checkNeighbors(board,row,col);
    return numOfNeighbors > 3;
}

const hasExatctlyThreeNeighbors = (board, row, col) => {
        const numOfNeighbors =  checkNeighbors(board,row,col);
    return numOfNeighbors === 3;
}

const isAlive = (val) => {
    if(val === 1)
        return true;
}

// returns # of neighbors 
const checkNeighbors = (board,row,col) => {
    let numNeighbors =0;
    // check up
    if(board[row +1] && board[row+1][col])
        numNeighbors++;
    // check down
    if(board[row -1] && board[row-1][col])
        numNeighbors++;
    //check left 
    if(board[row] && board[row][col-1])
        numNeighbors++;
     // check right
    if(board[row] && board[row][col+1])
         numNeighbors++;
    // check down - right
    if(board[row-1] && board[row-1][col +1])
         numNeighbors++;
    // check down - left 
    if(board[row -1] && board[row-1][col -1])
         numNeighbors++;
    //check up = left
    if(board[row+1] && board[row+1][col -1])
         numNeighbors++;
    //check up - right
    if(board[row+1] && board[row+1][col +1])
         numNeighbors++;

    
    return numNeighbors;
}


console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))



// var gameOfLife = function(board) {
//     const boardClone = JSON.parse(JSON.stringify(board));
    
//     const boardCell = (row, col) => {
//       if (boardClone[row] !== undefined && boardClone[row][col] !== undefined) {
          
//         return Number(boardClone[row][col]);
//       }
//       return null;
//     };
    
//     const getNeighbours = (row, col) => {
//       let dead = 0;
//       let alive = 0;
      
//       const neighbours = [
//         boardCell(row - 1, col),
//         boardCell(row + 1, col),
//         boardCell(row, col - 1),
//         boardCell(row, col + 1),
//         boardCell(row - 1, col - 1),
//         boardCell(row - 1, col + 1),
//         boardCell(row + 1, col - 1),
//         boardCell(row + 1, col + 1),
//       ];
      
//       neighbours.forEach(cell => {
//         if (cell === 1) alive++;
//         if (cell === 0) dead++;
//       });
      
//       return { dead, alive };
//     };
    
//     const getNextState = (cell, dead, alive) => {
//       if (cell) {
//         if (alive < 2) return 0;
//         if (alive === 2 || alive === 3) return 1;
//         if (alive > 3) return 0;
//       } else {
//         if (alive === 3) return 1;
//       }
      
//       return cell;
//     };
    
//     for(let i=0; i<board.length; i++) {
//       for(let j=0; j<board[i].length; j++) {
//         const cell = boardClone[i][j];
//         const { dead, alive } = getNeighbours(i, j);
//         board[i][j] = getNextState(cell, dead, alive);
//       }
//     }
//   };
//    console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))