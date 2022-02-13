const Stack = require("./0058");

const stack = new Stack();

stack.push(10).push(20).push(30);

test(`stack.pop()`, () => {
  expect(stack.pop()).toEqual(30);
});

test(`stack.pop()`, () => {
  expect(stack.pop()).toEqual(20);
});

test(`stack.pop()`, () => {
  expect(stack.pop()).toEqual(10);
});

test(`stack.pop()`, () => {
  expect(stack.pop()).toEqual(null);
});

stack.push(30).push(40).push(50);

test(`stack.pop() after stack.push(30).push(40).push(50)`, () => {
  expect(stack.pop()).toEqual(50);
});

stack.push(60);

test(`stack.pop() after stack.push(60)`, () => {
  expect(stack.pop()).toEqual(60);
});
