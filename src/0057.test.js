const Stack = require("./0057");

const stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);

const removed = stack.pop();

test(`removed`, () => {
  expect(removed).toEqual(1000);
});

test(`stack.size`, () => {
  expect(stack.size).toEqual(2);
});

stack.pop();
stack.pop();

test(`stack.size after 2 pops`, () => {
  expect(stack.size).toEqual(0);
});
