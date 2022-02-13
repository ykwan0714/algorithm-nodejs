const Stack = require("./0056");

const firstStack = new Stack();

test(`firstStack.push(10)`, () => {
  expect(firstStack.push(10)).toEqual(1);
});

test(`firstStack.first.value`, () => {
  expect(firstStack.first.value).toEqual(10);
});

test(`firstStack.last.value`, () => {
  expect(firstStack.last.value).toEqual(10);
});

test(`firstStack.push(100)`, () => {
  expect(firstStack.push(100)).toEqual(2);
});

test(`firstStack.first.value`, () => {
  expect(firstStack.first.value).toEqual(100);
});

test(`firstStack.last.value`, () => {
  expect(firstStack.last.value).toEqual(10);
});

test(`firstStack.push(1000)`, () => {
  expect(firstStack.push(1000)).toEqual(3);
});

test(`firstStack.first.value`, () => {
  expect(firstStack.first.value).toEqual(1000);
});

test(`firstStack.last.value`, () => {
  expect(firstStack.last.value).toEqual(10);
});

//

const secondStack = new Stack();

test(`secondStack.push(10)`, () => {
  expect(secondStack.push(10)).toEqual(1);
});

test(`secondStack.size`, () => {
  expect(secondStack.size).toEqual(1);
});

test(`secondStack.push(100)`, () => {
  expect(secondStack.push(100)).toEqual(2);
});

test(`secondStack.size`, () => {
  expect(secondStack.size).toEqual(2);
});

test(`secondStack.push(1000)`, () => {
  expect(secondStack.push(1000)).toEqual(3);
});

test(`secondStack.size`, () => {
  expect(secondStack.size).toEqual(3);
});
