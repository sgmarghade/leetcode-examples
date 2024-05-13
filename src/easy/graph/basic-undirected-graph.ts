//Adjacency matrix representation. Each value is edge true vs false
const adjacencyMatrix: number[][] = [
    //C1,C2,C3
    [0, 1, 0], //Row 1
    [1, 0, 1], //Row 2
    [0, 1, 0]  //Row 3
];

//Adjacency list
//We need to store only connected vertices for given vertex.
type AdjacencyListString = { [key: string]: string[] };
type AdjacencyListSet = { [key: string]: Set<string> };

//Efficient in lookup and storage. List can be list of obj as well to store extra value like weightage
const adjacencyList: AdjacencyListString = {
    'A': ['B'],
    'B': ['C', 'A'], //B is connected to A and C
    'C': ['B'] //C is connected to B
}

class ListGraph {
    adjacencyList: AdjacencyListSet; //Performant than string[]
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        //Below 2 lines are adding undirected graph vertices
        //For directed we add 1 vertex.
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1: string, vertex2: string) {
        if(this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].delete(vertex2);
        }

        if(this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].delete(vertex1);
        }
    }

    hasEdge(vertex1: string, vertex2: string): boolean {
        return this.adjacencyList[vertex1] && this.adjacencyList[vertex1].has(vertex2);
    }

    removeVertex(vertex: string) {
        if(!this.adjacencyList[vertex]) {
            return;
        }

        for(let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' ==> ' + [...this.adjacencyList[vertex]]);
        }
    }

}

const listGraph = new ListGraph();
listGraph.addVertex('A');
listGraph.addVertex('B');
listGraph.addVertex('C');

listGraph.addEdge('A', 'B');
listGraph.addEdge('B', 'C');

listGraph.display();
console.log(listGraph.hasEdge('A', 'C'));
console.log(listGraph.hasEdge('C', 'B'));

console.log('***************** Remove edge between A and C which is missing ***');
listGraph.removeEdge('A', 'C');
listGraph.display();

console.log('************ Remove edge between A and B ************');
listGraph.removeEdge('A', 'B');
listGraph.display();

console.log('Remove vertex A');
listGraph.removeVertex('A');
listGraph.display();