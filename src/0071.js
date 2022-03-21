class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v != vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v != vertex1
    )
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((v) => {
        this.removeEdge(vertex, v)
      })
      /*
        while (this.adjacencyList[vertex].length) {
          const v = this.adjacencyList[vertex].pop()
          this.removeEdge(vertex, v)
        }
      */
      delete this.adjacencyList[vertex]
    }
  }
}

module.exports = Graph
