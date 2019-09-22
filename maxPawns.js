const grid = [
    '..x...',
    '......',
    '....x.',
    '.x....',
    '..x.x.',
    '...o..',
  ];

//   const grid = [
//       'x....',
//       '.x...',
//       '..o..',
//       '...x.',
//       '.....'
//   ]
  
  const maxPawns = (grid)=>{
    const [r,c] = findWhitePawn(grid);
    const result = [];
    const visited = new Array(grid.length).fill().map(()=> new Array(grid.length).fill(false)); 
    const arr = checkDiagonals(grid,r,c,0,result,0,0,visited);
    const max = Math.max(...arr);
    return max === -Infinity ? 0 : max;

  }

  const findWhitePawn= (grid)=>{
    for(let i = 0; i < grid.length;i++){
        for(let j =0; j <grid[i].length;j++){
           if(grid[i].charAt(j) === 'o')
            return [i,j]
        }
    }
    return -1;
  }

  const checkDiagonals = (grid,r,c,count,arr,dx,dy,visited)=>{
    if(!grid[r] || !grid[r].charAt(c) || grid[r].charAt(c) === '.')
        return;
    if(grid[r].charAt(c) === 'x'){
        // boundary cases 
        if((grid[r] === undefined || grid[r].charAt(c) === undefined) || ( !grid[r + dx] || !grid[r].charAt(c + dy)) || grid[r +dx].charAt(c + dy) === 'x' || visited[r][c] ){
            return;
        }
        count++;
        arr.push(count);
        visited[r][c] = true;
        r = r + dx;
        c = c + dy;
    }
    // checkDiagonals(grid,r+1,c+1,count,arr,1,1,visited); // SouthEast
    // checkDiagonals(grid,r+1,c-1,count,arr,1,-1,visited); //SouthWest
    checkDiagonals(grid,r-1,c+1,count,arr,-1,1,visited); // NorthEast
    checkDiagonals(grid,r-1,c-1,count,arr,-1,-1,visited); // NorthWest
    return arr;
  }


  console.log(maxPawns(grid))