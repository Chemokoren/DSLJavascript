class Graph{
    constructor() {
        this.adjacencyList ={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] =[];
    }
    addEdge(v1,v2){
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

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex =this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result =[];
        const visited ={};
        const adjacencyList =this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] =true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            })
        })(start);
        return result;
    }

}

let g = new Graph();
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Los Angeles")
g.addVertex("Hong Kong")
g.addEdge("Dallas","Tokyo")
g.addEdge("Dallas","Aspen")
g.addEdge("Hong Kong","Tokyo")
g.addEdge("Hong Kong","Dallas")
g.addEdge("Los Angeles","Hong Kong")
g.addEdge("Los Angeles","Aspen")

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


g1.addEdge("A","B");
g1.addEdge("A","C");
g1.addEdge("B","D");
g1.addEdge("C","E");
g1.addEdge("D","E");
g1.addEdge("D","F");
g1.addEdge("E","F");

console.log(g1.depthFirstRecursive("A"))


//              A
//             /  \
//            B     C
//            |     |
//            D --- E
//             \   /
//               F
