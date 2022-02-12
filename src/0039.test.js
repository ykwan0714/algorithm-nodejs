const SinglyLinkedList = require("./0039");

const singlyLinkedListFirst = new SinglyLinkedList();

test(`singlyLinkedListFirst.push(5).push(10).push(15).push(20).push(25)`, () => {
  expect(
    singlyLinkedListFirst.push(5).push(10).push(15).push(20).push(25)
  ).toEqual(singlyLinkedListFirst);
});

test(`singlyLinkedListFirst.head.val`, () => {
  expect(singlyLinkedListFirst.head.val).toEqual(5);
});

test(`singlyLinkedListFirst.head.val`, () => {
  expect(singlyLinkedListFirst.head.val).toEqual(25);
});

//

singlyLinkedListFirst.rotate(3);

test(`singlyLinkedListFirst.head.val`, () => {
  expect(singlyLinkedListFirst.head.val).toEqual(20);
});

test(`singlyLinkedListFirst.head.next.val`, () => {
  expect(singlyLinkedListFirst.head.next.val).toEqual(25);
});

test(`singlyLinkedListFirst.head.next.next.val`, () => {
  expect(singlyLinkedListFirst.head.next.next.val).toEqual(5);
});

test(`singlyLinkedListFirst.head.next.next.next.val`, () => {
  expect(singlyLinkedListFirst.head.next.next.next.val).toEqual(10);
});

test(`singlyLinkedListFirst.head.next.next.next.next.val`, () => {
  expect(singlyLinkedListFirst.head.next.next.next.next.val).toEqual(15);
});

test(`singlyLinkedListFirst.tail.val`, () => {
  expect(singlyLinkedListFirst.tail.val).toEqual(15);
});

test(`singlyLinkedListFirst.tail.next`, () => {
  expect(singlyLinkedListFirst.tail.next).toEqual(null);
});

//

const singlyLinkedListSecond = new SinglyLinkedList();

test(`singlyLinkedListSecond.push(5).push(10).push(15).push(20).push(25)`, () => {
  expect(
    singlyLinkedListSecond.push(5).push(10).push(15).push(20).push(25)
  ).toEqual(singlyLinkedListSecond);
});

test(`singlyLinkedListSecond.head.val`, () => {
  expect(singlyLinkedListSecond.head.val).toEqual(5);
});

test(`singlyLinkedListSecond.tail.val`, () => {
  expect(singlyLinkedListSecond.tail.val).toEqual(25);
});

//

singlyLinkedListSecond.rotate(-1);

test(`singlyLinkedListSecond.head.val`, () => {
  expect(singlyLinkedListSecond.head.val).toEqual(25);
});

test(`singlyLinkedListSecond.next.val`, () => {
  expect(singlyLinkedListSecond.next.val).toEqual(5);
});

test(`singlyLinkedListSecond.next.next.val`, () => {
  expect(singlyLinkedListSecond.next.next.val).toEqual(10);
});

test(`singlyLinkedListSecond.next.next.next.val`, () => {
  expect(singlyLinkedListSecond.next.next.next.val).toEqual(15);
});

test(`singlyLinkedListSecond.next.next.next.next.val`, () => {
  expect(singlyLinkedListSecond.next.next.next.next.val).toEqual(20);
});

test(`singlyLinkedListSecond.next.next.next.next.val`, () => {
  expect(singlyLinkedListSecond.tail.val).toEqual(20);
});

test(`singlyLinkedListSecond.next.next.next.next.val`, () => {
  expect(singlyLinkedListSecond.tail.next).toEqual(null);
});

const singlyLinkedListThird = new SinglyLinkedList();

test(`singlyLinkedListThird.push(5).push(10).push(15).push(20).push(25)`, () => {
  expect(
    singlyLinkedListThird.push(5).push(10).push(15).push(20).push(25)
  ).toEqual(singlyLinkedListThird);
});

test(`singlyLinkedListThird.head.val`, () => {
  expect(singlyLinkedListThird.head.val).toEqual(5);
});

test(`singlyLinkedListThird.tail.val`, () => {
  expect(singlyLinkedListThird.tail.val).toEqual(25);
});

//

singlyLinkedListThird.rotate(1000);

test(`singlyLinkedListThird.head.val`, () => {
  expect(singlyLinkedListThird.head.val).toEqual(5);
});

test(`singlyLinkedListThird.head.next.val`, () => {
  expect(singlyLinkedListThird.head.next.val).toEqual(10);
});

test(`singlyLinkedListThird.head.next.next.val`, () => {
  expect(singlyLinkedListThird.head.next.next.val).toEqual(15);
});

test(`singlyLinkedListThird.head.next.next.next.val`, () => {
  expect(singlyLinkedListThird.head.next.next.next.val).toEqual(20);
});

test(`singlyLinkedListThird.head.next.next.next.next.val`, () => {
  expect(singlyLinkedListThird.head.next.next.next.next.val).toEqual(25);
});

test(`singlyLinkedListThird.tail.val`, () => {
  expect(singlyLinkedListThird.tail.val).toEqual(25);
});

test(`singlyLinkedListThird.tail.val`, () => {
  expect(singlyLinkedListThird.tail.next).toEqual(null);
});
