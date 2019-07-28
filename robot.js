let maze = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
console.log(maze);

let path = [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]];

function getPath(maze) {
//   if (maze === null || maze.length === 0) return;
  let path = new Set();
  console.log(isValidRoute(maze, maze.length - 1, maze[0].length - 1, path))
  if (isValidRoute(maze, maze.length - 1, maze[0].length - 1, path)) {
    return path;
  }
 return null
}

function isValidRoute(maze, row, col, path) {
  if (col < 0 ||row < 0) {
    return false;
  }

  let isOrigin = row === 0 && col === 0;
  if (
    isOrigin ||
    isValidRoute(maze, row - 1, col, path) ||
    isValidRoute(maze, row, col - 1, path)
  ) {
    path.add([row, col]);
    return true;
  }
}

const result = getPath(maze);
console.log(result);

assert(path === result);
