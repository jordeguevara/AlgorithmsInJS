
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
    // check up and down
    if(board[row +1] && board[row+1][col])
        numNeighbors++;
    if(board[row -1] && board[row-1][col])
        board[row +1]++;
    //check left and right
    if(board[row] && board[row][col-1])
        numNeighbors++;
    if(board[row] && board[row][col+1])
         numNeighbors++;
    // check diagnol
    if(board[row-1] && board[row-1][col +1])
         numNeighbors++;
    if(board[row +1] && board[row+1][col -1])
         numNeighbors++;
    if(board[row-1] && board[row+1][col -1])
         numNeighbors++;
    if(board[row-1] && board[row+1][col +1])
         numNeighbors++;
    // check other diagnoal
    
    return numNeighbors;
}


console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))
