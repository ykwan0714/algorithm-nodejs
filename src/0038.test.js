const SinglyLinkedList = require("./0038");

const singlyLinkedList = new SinglyLinkedList();

test(`singlyLinkedList.push(5).push(10).push(15)`, () => {
  expect(singlyLinkedList.push(5).push(10).push(15).push(20)).toEqual(
    singlyLinkedList
  );
});

test(`singlyLinkedList.insert(2, 12)`, () => {
  expect(singlyLinkedList.insert(2, 12)).toEqual(true);
});

test(`singlyLinkedList.insert(100, 12)`, () => {
  expect(singlyLinkedList.insert(100, 12)).toEqual(false);
});

test(`singlyLinkedList.length`, () => {
  expect(singlyLinkedList.length).toEqual(5);
});

test(`singlyLinkedList.head.val`, () => {
  expect(singlyLinkedList.head.val).toEqual(5);
});

test(`singlyLinkedList.head.next.val`, () => {
  expect(singlyLinkedList.head.next.val).toEqual(10);
});

test(`singlyLinkedList.head.next.next.val`, () => {
  expect(singlyLinkedList.head.next.next.val).toEqual(12);
});

test(`singlyLinkedList.head.next.next.next.val`, () => {
  expect(singlyLinkedList.head.next.next.next.val).toEqual(15);
});

test(`singlyLinkedList.head.next.next.next.next.val`, () => {
  expect(singlyLinkedList.head.next.next.next.next.val).toEqual(20);
});

//

test(`singlyLinkedList.insert(5, 25)`, () => {
  expect(singlyLinkedList.insert(5, 25)).toEqual(true);
});

test(`singlyLinkedList.head.next.next.next.next.val`, () => {
  expect(singlyLinkedList.head.next.next.next.next.val).toEqual(25);
});
