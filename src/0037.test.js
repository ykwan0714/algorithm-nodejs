const SinglyLinkedList = require("./0037");

const singlyLinkedList = new SinglyLinkedList();

test(`singlyLinkedList.push(5).push(10).push(15).push(20)`, () => {
  expect(singlyLinkedList.push(5).push(10).push(15).push(20)).toEqual(
    singlyLinkedList
  );
});

test(`singlyLinkedList.get(0).val`, () => {
  expect(singlyLinkedList.get(0).val).toEqual(5);
});

test(`singlyLinkedList.get(1).val`, () => {
  expect(singlyLinkedList.get(1).val).toEqual(10);
});

test(`singlyLinkedList.get(2).val`, () => {
  expect(singlyLinkedList.get(2).val).toEqual(15);
});

test(`singlyLinkedList.get(3).val`, () => {
  expect(singlyLinkedList.get(3).val).toEqual(20);
});

test(`singlyLinkedList.get(4).val`, () => {
  expect(singlyLinkedList.get(4)).toEqual(null);
});
