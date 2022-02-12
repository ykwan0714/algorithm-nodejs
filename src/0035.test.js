const SinglyLinkedList = require("./0035");

const singlyLinkedList = new SinglyLinkedList();

test(`singlyLinkedList.push(5)`, () => {
  expect(singlyLinkedList.push(5)).toEqual(singlyLinkedList);
});

test(`singlyLinkedList.length`, () => {
  expect(singlyLinkedList.length).toEqual(1);
});

test(`singlyLinkedList.head.val`, () => {
  expect(singlyLinkedList.head.val).toEqual(5);
});

test(`singlyLinkedList.tail.val`, () => {
  expect(singlyLinkedList.tail.val).toEqual(5);
});

test(`singlyLinkedList.push(10)`, () => {
  expect(singlyLinkedList.push(10)).toEqual(singlyLinkedList);
});

test(`singlyLinkedList.length`, () => {
  expect(singlyLinkedList.length).toEqual(2);
});

test(`singlyLinkedList.head.val`, () => {
  expect(singlyLinkedList.head.val).toEqual(5);
});

test(`singlyLinkedList.head.next.val`, () => {
  expect(singlyLinkedList.head.next.val).toEqual(10);
});

test(`singlyLinkedList.tail.val`, () => {
  expect(singlyLinkedList.tail.val).toEqual(10);
});

test(`singlyLinkedList.push(15)`, () => {
  expect(singlyLinkedList.push(15)).toEqual(singlyLinkedList);
});

test(`singlyLinkedList.length`, () => {
  expect(singlyLinkedList.length).toEqual(3);
});

test(`singlyLinkedList.head.val`, () => {
  expect(singlyLinkedList.head.val).toEqual(5);
});

test(`singlyLinkedList.head.next.val`, () => {
  expect(singlyLinkedList.head.next.val).toEqual(10);
});

test(`singlyLinkedList.head.next.next.val`, () => {
  expect(singlyLinkedList.head.next.next.val).toEqual(15);
});

test(`singlyLinkedList.tail.val`, () => {
  expect(singlyLinkedList.tail.val).toEqual(15);
});
