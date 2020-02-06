const assert = require('assert').strict;

// const graph = [
//     [0,1,1,0,0],
//     [1,0,0,1,0],
//     [1,0,0,0,0],
//     [0,1,0,0,0],
//     [0,0,0,0,0]
// ]
const graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0],
    3: [1],
    4: []
}
function dfs(index, visited, answer) { // Recursive
    if (!visited || visited[index]) {
        return;
    }
    answer.push(index)
    console.log(index)
    visited[index] = true
    const neighbors = graph[index];
    // console.log(neighbors)
    for (let node of neighbors) {
        dfs(node, visited, answer);

    }
    return answer;
}

// dfs(4, visited, answer);

const testR1 = () => {
    let visited = [false, false, false, false, false]
    const answer = []
    const answerIter = dfs(4, visited, answer)
    const expectedAns = [4]
    return answerIter.includes(...expectedAns);
}

const testR2 = () => {
    let visited = [false, false, false, false, false]
    const answer = []
    const answerIter = dfs(0, visited, answer)
    console.log(answerIter)
    return answerIter.includes(0) && answerIter.includes(1), answerIter.includes(2) && answerIter.includes(3);
}

const testR3 = () => {
    let visited = [false, false, false, false, false]
    const answer = []
    const answerIter = dfs(1, visited, answer)
    return answerIter.includes(0) && answerIter.includes(1), answerIter.includes(2) && answerIter.includes(3);
}

const testR4 = () => {
    let visited = [false, false, false, false, false]
    const answer = []
    const answerIter = dfs(2, visited, answer)
    return answerIter.includes(0) && answerIter.includes(1), answerIter.includes(2) && answerIter.includes(3);
}

const testR5 = () => {
    let visited = [false, false, false, false, false]
    const answer = []
    const answerIter = dfs(3, visited, answer)
    return answerIter.includes(0) && answerIter.includes(1), answerIter.includes(2) && answerIter.includes(3);
}

assert.equal(testR1(), true)
// assert.equal(testR2(), true)
// assert.equal(testR3(), true)
// assert.equal(testR4(), true)
// assert.equal(testR5(), true)

//============================================================================================================================================================

function depthBreathSearch(index) {
    const result = [] ///array of nodes visited in this dfs (should not isolated node)
    const visited = [false, false, false, false, false]
    let stack = [];
    stack.push(index);
    while (stack.length > 0) {
        const node = stack.pop();
        visited[node] = true;
        result.push(node)
        const neighbors = graph[node];
        for (let neighbor of neighbors) {
            if (!visited[neighbor])
                stack.push(neighbor)
        }
    }
    return result;
}

// Iterative Depth first search tests
const test1 = () => {
    const answerIter = depthBreathSearch(4)
    const expectedAns = [4]
    return answerIter.includes(...expectedAns);
}

const test2 = () => {
    const answerIter = depthBreathSearch(0)
    console.log(answerIter)
    return answerIter.includes(0) && answerIter.includes(1), answerIter.includes(2) && answerIter.includes(3);
}

const test3 = () => {
    const answerIter = depthBreathSearch(1)
    return answerIter.includes(0) && answerIter.includes(1), answerIter.includes(2) && answerIter.includes(3);
}

const test4 = () => {
    const answerIter = depthBreathSearch(2)
    return answerIter.includes(0) && answerIter.includes(1), answerIter.includes(2) && answerIter.includes(3);
}

const test5 = () => {
    const answerIter = depthBreathSearch(3)
    return answerIter.includes(0) && answerIter.includes(1), answerIter.includes(2) && answerIter.includes(3);
}

assert.equal(test1(), true)
assert.equal(test2(), true)
assert.equal(test3(), true)
assert.equal(test4(), true)
assert.equal(test5(), true)