class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }


/*
Pseudocode

DFS(vertex):
	if vertex is empty
	    return (this is base case)
	mark vertex as visited
	add vertex to results list
	for each neighbor in  vertex's neighbors:
		if neighbor is not visited:
		    recursively call DFS on neighbor
 */
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start);
        return result;
    }

    // DFS -iterative(start):
    //     let S be a stack
    // S.push(start)
    // while S is not empty
    // vertex =S.pop()
    // if vertex is not labeled as discovered:
    //     visit vertex (add to result list)
    // label vertex as discovered
    // for each of the vertex's neighbors, N do
    // S.push(N)
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            console.log(stack)
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }

            });
        }
        return result;
    }

    // BREADTH FIRST
// -This function should accept a starting vertex
// -create a queue (you can use an array) and place the starting vertex in it
// -create an array to store the nodes visited
// -create an object to store nodes visited
// -Mark the starting vertex as visited
// -Loop as long as there is anything in the queue
// -Remove the first vertex from the queue and push it into the array that stores nodes visited
// -Loop over each vertex in the adjacency list for the vertex you are visiting
// -If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    breadthFirst(start){
        const queue =[start];
        const result =[];
        const visited ={};
        let currentVertex;
        visited[start] =true;

        while(queue.length){
            currentVertex =queue.shift();
            result.push(currentVertex);

            // this.adjacencyList[currentVertex].forEach(neighbor =>{
            this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor] =true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}

let g = new Graph();
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Los Angeles")
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")
g.addEdge("Hong Kong", "Tokyo")
g.addEdge("Hong Kong", "Dallas")
g.addEdge("Los Angeles", "Hong Kong")
g.addEdge("Los Angeles", "Aspen")

console.log(g)
g.removeVertex("Los Angeles")
console.log(g)


let g1 = new Graph();

g1.addVertex("A");
g1.addVertex("B");
g1.addVertex("C");
g1.addVertex("D");
g1.addVertex("E");
g1.addVertex("F");


g1.addEdge("A", "B");
g1.addEdge("A", "C");
g1.addEdge("B", "D");
g1.addEdge("C", "E");
g1.addEdge("D", "E");
g1.addEdge("D", "F");
g1.addEdge("E", "F");

console.log(g1.depthFirstRecursive("A"))
console.log(g1.depthFirstIterative("A"))
console.log(g1.breadthFirst("A"))


//              A
//             /  \
//            B     C
//            |     |
//            D --- E
//             \   /
//               F
