const reverse = require("./0015");

test(`reverse("awesome")`, () => {
  expect(reverse("awesome")).toBe("emosewa");
});

test(`reverse("rithmschool")`, () => {
  expect(reverse("rithmschool")).toBe("loohcsmhtir");
});
