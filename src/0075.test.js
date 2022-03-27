const WeightedGraph = require("./0075");

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);

g.addEdge("Z", "Q", 2);

g.addEdge("C", "G", 4);

g.addEdge("D", "Q", 8);

g.addEdge("E", "H", 1);

g.addEdge("H", "Q", 3);

g.addEdge("Q", "C", 6);

g.addEdge("G", "Q", 9);

test(`g.Dijkstra("A", "E")`, () => {
  expect(g.Dijkstra("A", "E")).toEqual(["A", "Z", "Q", "H", "E"]);
});

test(`g.Dijkstra("A", "Q")`, () => {
  expect(g.Dijkstra("A", "Q")).toEqual(["A", "Z", "Q"]);
});

test(`g.Dijkstra("A", "G")`, () => {
  expect(g.Dijkstra("A", "G")).toEqual(["A", "C", "G"]);
});

test(`g.Dijkstra("A", "D")`, () => {
  expect(g.Dijkstra("A", "D")).toEqual(["A", "Z", "Q", "D"]);
});
