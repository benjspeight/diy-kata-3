const { humanCatDogYears } = require("../src");

test('humanCatDogYears returns array of human, cat, and dog years', () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    expect(humanCatDogYears(4)).toEqual([4, 32, 34]);
    expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
    expect(humanCatDogYears(6)).toEqual([6, 40, 44]);
    expect(humanCatDogYears(7)).toEqual([7, 44, 49]);
    expect(humanCatDogYears(8)).toEqual([8, 48, 54]);
    expect(humanCatDogYears(9)).toEqual([9, 52, 59]);
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
  
  
  
  
  
  
