const collectStrings = require("./0023");

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

test(`collectStrings(obj)`, () => {
  expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"]);
});
