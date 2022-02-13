const SinglyLinkedList = require("./0046");

const singlyLinkedList = new SinglyLinkedList();

test(`singlyLinkedList.push(5).push(10).push(15).push(20)`, () => {
  expect(singlyLinkedList.push(5).push(10).push(15).push(20)).toEqual(
    singlyLinkedList
  );
});

test(`singlyLinkedList.remove(2).val`, () => {
  expect(singlyLinkedList.remove(2).val).toEqual(15);
});

test(`singlyLinkedList.remove(100)`, () => {
  expect(singlyLinkedList.remove(100)).toEqual(undefined);
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
  expect(singlyLinkedList.head.next.next.val).toEqual(20);
});
