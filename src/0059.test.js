const Queue = require("./0059");

const queue = new Queue();

test(`queue.enqueue(10)`, () => {
  expect(queue.enqueue(10)).toEqual(1);
});

test(`queue.size`, () => {
  expect(queue.size).toEqual(1);
});

test(`queue.enqueue(100)`, () => {
  expect(queue.enqueue(100)).toEqual(2);
});

test(`queue.size`, () => {
  expect(queue.size).toEqual(2);
});

test(`queue.enqueue(1000)`, () => {
  expect(queue.enqueue(1000)).toEqual(1000);
});

test(`queue.size`, () => {
  expect(queue.size).toEqual(1000);
});
