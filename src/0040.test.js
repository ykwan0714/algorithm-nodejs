const SinglyLinkedList = require("./0040");

const singlyLinkedList = new SinglyLinkedList();

test(`singlyLinkedList.set(0, 10)`, () => {
  expect(singlyLinkedList.set(0, 10)).toEqual(true);
});

test(`singlyLinkedList.set(1, 2)`, () => {
  expect(singlyLinkedList.set(1, 2)).toEqual(true);
});

test(`singlyLinkedList.length`, () => {
  expect(singlyLinkedList.length).toEqual(2);
});

test(`singlyLinkedList.head.val`, () => {
  expect(singlyLinkedList.head.val).toEqual(10);
});

//

test(`singlyLinkedList.set(10, 10)`, () => {
  expect(singlyLinkedList.set(10, 10)).toEqual(false);
});

//

test(`singlyLinkedList.set(3, 100)`, () => {
  expect(singlyLinkedList.set(3, 100)).toEqual(true);
});

test(`singlyLinkedList.head.next.next.next.val`, () => {
  expect(singlyLinkedList.head.next.next.next.val).toEqual(10);
});
