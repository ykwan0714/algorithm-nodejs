const Graph = require("./0072");

expect.extend({
  doubleCase(received, recursived, iteratived) {
    const stringifyReceived = JSON.stringify(received);
    const stringifyRecursived = JSON.stringify(recursived);
    const stringifyIteratived = JSON.stringify(iteratived);

    const pass =
      stringifyReceived === stringifyRecursived ||
      stringifyReceived === stringifyIteratived;

    const message = () =>
      `Expected: ${stringifyRecursived} or ${stringifyIteratived}\nReceived: ${stringifyReceived}`;
    if (pass) {
      return {
        message,
        pass: true,
      };
    } else {
      return {
        message,
        pass: false,
      };
    }
  },
});

const graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

test(`graph.depthFirstSearch("S")`, () => {
  expect(graph.depthFirstSearch("S")).doubleCase(
    ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"],
    ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"]
  );
});
