
function WeightedGraph() {
  Graph.call(this)
}

WeightedGraph.prototype = Object.create(Graph.prototype)
WeightedGraph.prototype.constructor = WeightedGraph
WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
  this.adjacencyList[vertex1].push({ node: vertex2, weight })
  this.adjacencyList[vertex2].push({ node: vertex1, weight })
}

WeightedGraph.prototype.Dijkstra = function (start, end) {
  const queue = new PriorityQueue()
  const distance = {}
  const previous = {}
  const path = []
  let smallestNode
  for (let vertex in this.adjacencyList) {
    previous[vertex] = null
    distance[vertex] = Infinity
  }
  distance[start] = 0
  queue.enqueue(start, 0)
  while (queue.values.length) {
    smallestNode = queue.dequeue().val
    if (smallestNode === end) {
      while (previous[smallestNode]) {
        path.push(smallestNode)
        smallestNode = previous[smallestNode]
      }
      break
    }
    if (smallestNode) {
      this.adjacencyList[smallestNode].forEach((neigbor) => {
        const { node, weight } = neigbor
        let neigborDistance = distance[smallestNode] + weight
        if (neigborDistance < distance[node]) {
          distance[node] = neigborDistance
          previous[node] = smallestNode
          queue.enqueue(node, neigborDistance)
        }

      })
    }
  }
  return path.concat(start).reverse()
}
/***
 *** Use Graph as a constructor for WeightedGraph to inherit from!
 ***
 ***/
function Graph() {
  this.adjacencyList = {}
}

Graph.prototype.numEdges = function () {
  let total = 0

  Object.values(this.adjacencyList).forEach((list) => {
    total += list.length
  })

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2
}

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = []
}

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2)
  this.adjacencyList[vertex2].push(vertex1)
}

Graph.prototype.removeVertex = function (vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop()
    this.removeEdge(adjacentVertex, vertex)
  }
  delete this.adjacencyList[vertex]
}

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
  )
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
  )
}

/***
 *** Use the following as a PriorityQueue (it's a min heap)!
 ***
 ***/
class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}


module.exports = WeightedGraph
