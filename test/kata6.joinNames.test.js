const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
  const names1 = [{name: 'Homer'}, {name: 'Marge'}, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];
  const names2 = [{name: 'Homer'}, {name: 'Marge'}, {name: 'Bart'}, {name: 'Lisa'}];
  const names3 = [{name: 'Homer'}, {name: 'Marge'}, {name: 'Bart'}];
  const names4 = [{name: 'Homer'}, {name: 'Marge'}];
  const names5 = [{name: 'Homer'}];

  expect(joinNames(names1)).toBe("Homer, Marge, Bart, Lisa & Maggie");
  expect(joinNames(names2)).toBe("Homer, Marge, Bart & Lisa");
  expect(joinNames(names3)).toBe("Homer, Marge & Bart");
  expect(joinNames(names4)).toBe("Homer & Marge");
  expect(joinNames(names5)).toBe("Homer");
});
});
