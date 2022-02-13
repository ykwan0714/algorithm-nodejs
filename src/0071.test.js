const Graph = require("./0071");

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.removeVertex("C");
graph.removeVertex("B");

graph.adjacencyList["A"];
graph.adjacencyList["D"];

/**
 * https://www.udemy.com/course/best-javascript-data-structures/learn/quiz/5338933#overview
 * 테스트 케이스에서 still exists 라는 말을 이해하지 못했습니다.
 */

test(`graph.adjacencyList["A"]`, () => {
  expect(graph.adjacencyList["A"]).toEqual(expect.objectContaining([]));
});

test(`graph.adjacencyList["D"]`, () => {
  expect(graph.adjacencyList["D"]).toEqual(expect.objectContaining([]));
});
