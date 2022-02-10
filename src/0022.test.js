const stringifyNumbers = require("./0022");

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

test(`stringifyNumbers(obj)`, () => {
  expect(stringifyNumbers(obj)).toEqual({
    num: "1",
    test: [],
    data: {
      val: "4",
      info: {
        isRight: true,
        random: "66",
      },
    },
  });
});
