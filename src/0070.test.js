const Graph = require("./0070");

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.removeEdge("B", "A");
graph.removeEdge("C", "D");

test(`graph.adjacencyList["A"]`, () => {
  expect(graph.adjacencyList["A"]).toEqual(expect.objectContaining(["C"]));
});

test(`graph.adjacencyList["B"]`, () => {
  expect(graph.adjacencyList["B"]).toEqual(expect.objectContaining(["D"]));
});

test(`graph.adjacencyList["C"]`, () => {
  expect(graph.adjacencyList["C"]).toEqual(expect.objectContaining(["A"]));
});

test(`graph.adjacencyList["D"]`, () => {
  expect(graph.adjacencyList["D"]).toEqual(expect.objectContaining(["B"]));
});
