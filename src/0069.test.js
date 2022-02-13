const Graph = require("./0069");

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

test(`graph.adjacencyList["A"]`, () => {
  expect(graph.adjacencyList["A"]).toEqual([]);
});

test(`graph.adjacencyList["B"]`, () => {
  expect(graph.adjacencyList["B"]).toEqual([]);
});

test(`graph.adjacencyList["C"]`, () => {
  expect(graph.adjacencyList["C"]).toEqual([]);
});
