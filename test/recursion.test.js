import { describe, expect, test } from "@jest/globals";
import {
  iterationFactorial,
  recursionFactorial,
  iteratedFibonacci,
  recursedFibonacci,
  iteratedReverseString,
  recursedReverseString,
  re2cursedInversedReverseString,
} from "../src/recursion";

describe.each([
  { input: -1, expected: undefined },
  { input: 0, expected: 1 },
  { input: 1, expected: 1 },
  { input: 2, expected: 2 },
  { input: 3, expected: 6 },
  { input: 5, expected: 120 },
  { input: 10, expected: 3628800 },
])("With", ({ input, expected }) => {
  test(`iterationFactorial given ${input} should return ${expected}`, () => {
    expect(iterationFactorial(input)).toBe(expected);
  });
  test(`recursionFactorial given ${input} should return ${expected}`, () => {
    expect(recursionFactorial(input)).toBe(expected);
  });
});

describe.each([
  { input: 0, expected: 0 },
  { input: 1, expected: 1 },
  { input: 2, expected: 1 },
  { input: 3, expected: 2 },
  { input: 5, expected: 5 },
  { input: 7, expected: 13 },
  { input: 10, expected: 55 },
])("With", ({ input, expected }) => {
  test(`iteratedFibonacci given ${input} should return ${expected}`, () => {
    expect(iteratedFibonacci(input)).toBe(expected);
  });
  test(`recursedFibonacci given ${input} should return ${expected}`, () => {
    expect(recursedFibonacci(input)).toBe(expected);
  });
});

describe.each([
  { input: "", expected: "" },
  { input: "A", expected: "A" },
  { input: "Hello World!", expected: "!dlroW olleH" },
  { input: "This is a string", expected: "gnirts a si sihT" },
  { input: "kayak", expected: "kayak" },
])("With", ({ input, expected }) => {
  test(`iteratedReverseString given ${input} should return ${expected}`, () => {
    expect(iteratedReverseString(input)).toBe(expected);
  });
  test(`recursedReverseString given ${input} should return ${expected}`, () => {
    expect(recursedReverseString(input)).toBe(expected);
  });
  test(`re2cursedInversedReverseString given ${input} should return ${expected}`, () => {
    expect(re2cursedInversedReverseString(input)).toBe(expected);
  });
});
