export interface JestMethodMeta {
  name: string
  label: string
  description: string
}

export const jestMethods: JestMethodMeta[] = [
  {
    name: "test",
    label: "test",
    description: "Runs a test with the specified name and callback.",
  },
  {
    name: "it",
    label: "it",
    description: "Alias for 'test', defines a test case.",
  },
  {
    name: "describe",
    label: "describe",
    description: "Groups tests together.",
  },
  {
    name: "xdescribe",
    label: "xdescribe",
    description: "Disables a group of tests.",
  },
  {
    name: "fit",
    label: "fit",
    description: "Focuses on a single test, skipping others.",
  },
  { name: "xit", label: "xit", description: "Disables a single test." },
  {
    name: "jest",
    label: "jest",
    description: "Global object for Jest configuration and utilities.",
  },
  {
    name: "jestExpect",
    label: "jest.expect",
    description: "Used to create an expectation for a value.",
  },
  { name: "jestFn", label: "jest.fn", description: "Creates a mock function." },
  {
    name: "jestSpyOn",
    label: "jest.spyOn",
    description: "Creates a mock function that spies on an object's method.",
  },
  { name: "jestMock", label: "jest.mock", description: "Mocks a module." },
  {
    name: "jestClearAllMocks",
    label: "jest.clearAllMocks",
    description: "Clears all mock function calls and instances.",
  },
  {
    name: "jestResetAllMocks",
    label: "jest.resetAllMocks",
    description: "Resets all mock functions to their initial state.",
  },
  {
    name: "jestRestoreAllMocks",
    label: "jest.restoreAllMocks",
    description:
      "Restores all mock functions to their original implementations.",
  },
  {
    name: "beforeEach",
    label: "beforeEach",
    description: "Runs before each test in a block.",
  },
  {
    name: "afterEach",
    label: "afterEach",
    description: "Runs after each test in a block.",
  },
  {
    name: "beforeAll",
    label: "beforeAll",
    description: "Runs once before all tests in a block.",
  },
  {
    name: "afterAll",
    label: "afterAll",
    description: "Runs once after all tests in a block.",
  },
  {
    name: "expect",
    label: "expect",
    description: "Used to create an expectation for a value.",
  },
  {
    name: "expectExtend",
    label: "expect.extend",
    description: "Adds custom matchers to Jest's expect function.",
  },
  {
    name: "toBe",
    label: "toBe",
    description: "Strict equality matcher (a === b).",
  },
  {
    name: "toEqual",
    label: "toEqual",
    description: "Checks for deep equality (useful for objects/arrays)",
  },
  {
    name: "toBeTruthy",
    label: "toBeTruthy",
    description: "Checks if a value is truthy.",
  },
  {
    name: "toBeFalsy",
    label: "toBeFalsy",
    description: "Checks if a value is falsy.",
  },
  {
    name: "toBeNull",
    label: "toBeNull",
    description: "Checks if a value is null.",
  },
  {
    name: "toBeUndefined",
    label: "toBeUndefined",
    description: "Checks if a value is undefined.",
  },
  {
    name: "toBeDefined",
    label: "toBeDefined",
    description: "Checks if a value is defined.",
  },
  {
    name: "toBeNaN",
    label: "toBeNaN",
    description: "Checks if a value is NaN.",
  },
  {
    name: "toBeGreaterThan",
    label: "toBeGreaterThan",
    description: "Checks if a value is greater than another.",
  },
  {
    name: "toBeLessThan",
    label: "toBeLessThan",
    description: "Checks if a value is less than another.",
  },
  {
    name: "toBeGreaterThanOrEqual",
    label: "toBeGreaterThanOrEqual",
    description: "Checks if a value is greater than or equal to another.",
  },
  {
    name: "toBeLessThanOrEqual",
    label: "toBeLessThanOrEqual",
    description: "Checks if a value is less than or equal to another.",
  },
  {
    name: "toBeCloseTo",
    label: "toBeCloseTo",
    description:
      "Checks if a number is close to another (useful for floating point comparisons).",
  },
  {
    name: "toHaveLength",
    label: "toHaveLength",
    description: "Checks if an array or string has a specific length.",
  },
  {
    name: "toContain",
    label: "toContain",
    description: "Checks if an array or iterable contains a specific item.",
  },
  {
    name: "toContainEqual",
    label: "toContainEqual",
    description:
      "Checks if an array contains an item that is equal to a specific value.",
  },
  {
    name: "toMatch",
    label: "toMatch",
    description:
      "Checks if a string matches a regular expression or substring.",
  },
  {
    name: "toMatchObject",
    label: "toMatchObject",
    description: "Checks if an object matches a subset of properties.",
  },
  {
    name: "toThrow",
    label: "toThrow",
    description: "Checks if a function throws an error when called.",
  },
  {
    name: "toThrowError",
    label: "toThrowError",
    description: "Checks if a function throws a specific error type.",
  },
  {
    name: "toHaveBeenCalled",
    label: "toHaveBeenCalled",
    description: "Checks if a mock function was called.",
  },
  {
    name: "toHaveBeenCalledWith",
    label: "toHaveBeenCalledWith",
    description:
      "Checks if a mock function was called with specific arguments.",
  },
  {
    name: "toHaveBeenLastCalledWith",
    label: "toHaveBeenLastCalledWith",
    description:
      "Checks if a mock function was last called with specific arguments.",
  },
  {
    name: "toHaveBeenNthCalledWith",
    label: "toHaveBeenNthCalledWith",
    description:
      "Checks if a mock function was called with specific arguments at a specific call index.",
  },
  {
    name: "toHaveReturned",
    label: "toHaveReturned",
    description: "Checks if a mock function returned a value.",
  },
  {
    name: "toHaveReturnedWith",
    label: "toHaveReturnedWith",
    description: "Checks if a mock function returned a specific value.",
  },
  {
    name: "toHaveLastReturned",
    label: "toHaveLastReturned",
    description:
      "Checks if a mock function's last return value matches a specific value.",
  },
  {
    name: "toHaveBeenCalledTimes",
    label: "toHaveBeenCalledTimes",
    description: "Checks how many times a mock function was called.",
  },
  {
    name: "toHaveBeenCalledBefore",
    label: "toHaveBeenCalledBefore",
    description:
      "Checks if a mock function was called before another mock function.",
  },
  {
    name: "toHaveBeenCalledAfter",
    label: "toHaveBeenCalledAfter",
    description:
      "Checks if a mock function was called after another mock function.",
  },
  {
    name: "toHaveBeenCalledWithAny",
    label: "toHaveBeenCalledWithAny",
    description:
      "Checks if a mock function was called with any of the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithAll",
    label: "toHaveBeenCalledWithAll",
    description:
      "Checks if a mock function was called with all of the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithNone",
    label: "toHaveBeenCalledWithNone",
    description:
      "Checks if a mock function was not called with any of the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithSome",
    label: "toHaveBeenCalledWithSome",
    description:
      "Checks if a mock function was called with some of the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithExactly",
    label: "toHaveBeenCalledWithExactly",
    description:
      "Checks if a mock function was called with exactly the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithAtLeast",
    label: "toHaveBeenCalledWithAtLeast",
    description:
      "Checks if a mock function was called with at least the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithAtMost",
    label: "toHaveBeenCalledWithAtMost",
    description:
      "Checks if a mock function was called with at most the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithBetween",
    label: "toHaveBeenCalledWithBetween",
    description:
      "Checks if a mock function was called with arguments within a specified range.",
  },
  {
    name: "toHaveLastReturnedWith",
    label: "toHaveLastReturnedWith",
    description:
      "Checks if a mock function's last return value matches a specific value.",
  },
  {
    name: "toHaveBeenCalledTimes",
    label: "toHaveBeenCalledTimes",
    description: "Checks how many times a mock function was called.",
  },
  {
    name: "toHaveBeenCalled",
    label: "toHaveBeenCalled",
    description: "Checks if a mock function was called.",
  },
  {
    name: "toHaveBeenCalledWith",
    label: "toHaveBeenCalledWith",
    description:
      "Checks if a mock function was called with specific arguments.",
  },
  {
    name: "toHaveBeenLastCalledWith",
    label: "toHaveBeenLastCalledWith",
    description:
      "Checks if a mock function was last called with specific arguments.",
  },
  {
    name: "toHaveBeenNthCalledWith",
    label: "toHaveBeenNthCalledWith",
    description:
      "Checks if a mock function was called with specific arguments at a specific call index.",
  },
  {
    name: "toHaveReturned",
    label: "toHaveReturned",
    description: "Checks if a mock function returned a value.",
  },
  {
    name: "toHaveReturnedWith",
    label: "toHaveReturnedWith",
    description: "Checks if a mock function returned a specific value.",
  },
  {
    name: "toHaveLastReturnedWith",
    label: "toHaveLastReturnedWith",
    description:
      "Checks if a mock function's last return value matches a specific value.",
  },
  {
    name: "toHaveBeenCalledTimes",
    label: "toHaveBeenCalledTimes",
    description: "Checks how many times a mock function was called.",
  },
  {
    name: "toHaveBeenCalledBefore",
    label: "toHaveBeenCalledBefore",
    description:
      "Checks if a mock function was called before another mock function.",
  },
  {
    name: "toHaveBeenCalledAfter",
    label: "toHaveBeenCalledAfter",
    description:
      "Checks if a mock function was called after another mock function.",
  },
  {
    name: "toHaveBeenCalledWithAny",
    label: "toHaveBeenCalledWithAny",
    description:
      "Checks if a mock function was called with any of the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithAll",
    label: "toHaveBeenCalledWithAll",
    description:
      "Checks if a mock function was called with all of the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithNone",
    label: "toHaveBeenCalledWithNone",
    description:
      "Checks if a mock function was not called with any of the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithSome",
    label: "toHaveBeenCalledWithSome",
    description:
      "Checks if a mock function was called with some of the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithExactly",
    label: "toHaveBeenCalledWithExactly",
    description:
      "Checks if a mock function was called with exactly the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithAtLeast",
    label: "toHaveBeenCalledWithAtLeast",
    description:
      "Checks if a mock function was called with at least the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithAtMost",
    label: "toHaveBeenCalledWithAtMost",
    description:
      "Checks if a mock function was called with at most the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithBetween",
    label: "toHaveBeenCalledWithBetween",
    description:
      "Checks if a mock function was called with arguments within a specified range.",
  },
  {
    name: "toHaveBeenCalledWithNot",
    label: "toHaveBeenCalledWithNot",
    description:
      "Checks if a mock function was not called with the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithAnyOrder",
    label: "toHaveBeenCalledWithAnyOrder",
    description:
      "Checks if a mock function was called with the specified arguments in any order.",
  },
  {
    name: "toHaveBeenCalledWithInOrder",
    label: "toHaveBeenCalledWithInOrder",
    description:
      "Checks if a mock function was called with the specified arguments in the exact order.",
  },
  {
    name: "toHaveBeenCalledWithAtLeastOnce",
    label: "toHaveBeenCalledWithAtLeastOnce",
    description:
      "Checks if a mock function was called with the specified arguments at least once.",
  },
  {
    name: "toHaveBeenCalledWithAtMostOnce",
    label: "toHaveBeenCalledWithAtMostOnce",
    description:
      "Checks if a mock function was called with the specified arguments at most once.",
  },
  {
    name: "toHaveBeenCalledWithExactlyOnce",
    label: "toHaveBeenCalledWithExactlyOnce",
    description:
      "Checks if a mock function was called with the specified arguments exactly once.",
  },
  {
    name: "toHaveBeenCalledWithNever",
    label: "toHaveBeenCalledWithNever",
    description:
      "Checks if a mock function was never called with the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithAlways",
    label: "toHaveBeenCalledWithAlways",
    description:
      "Checks if a mock function was always called with the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithSometimes",
    label: "toHaveBeenCalledWithSometimes",
    description:
      "Checks if a mock function was sometimes called with the specified arguments.",
  },
  {
    name: "toHaveBeenCalledWithOnce",
    label: "toHaveBeenCalledWithOnce",
    description:
      "Checks if a mock function was called with the specified arguments exactly once.",
  },
  {
    name: "toHaveBeenCalledWithTwice",
    label: "toHaveBeenCalledWithTwice",
    description:
      "Checks if a mock function was called with the specified arguments exactly twice.",
  },
  {
    name: "toHaveBeenCalledWithThrice",
    label: "toHaveBeenCalledWithThrice",
    description:
      "Checks if a mock function was called with the specified arguments exactly thrice.",
  },
  {
    name: "toHaveBeenCalledWithMultipleTimes",
    label: "toHaveBeenCalledWithMultipleTimes",
    description:
      "Checks if a mock function was called with the specified arguments multiple times.",
  },
  // {
  //   name: "toHaveBeenCalledWithOnceOrMore",
  //   label: "toHaveBeenCalledWithOnceOrMore",
  //   description:
  //     "Checks if a mock function was called with the specified arguments once or more.",
  // },
  // {
  //   name: "toHaveBeenCalledWithTwiceOrMore",
  //   label: "toHaveBeenCalledWithTwiceOrMore",
  //   description:
  //     "Checks if a mock function was called with the specified arguments twice or more.",
  // },
  // {
  //   name: "toHaveBeenCalledWithThriceOrMore",
  //   label: "toHaveBeenCalledWithThriceOrMore",
  //   description:
  //     "Checks if a mock function was called with the specified arguments thrice or more.",
  // },
  // {
  //   name: "toHaveBeenCalledWithMultipleTimesOrMore",
  //   label: "toHaveBeenCalledWithMultipleTimesOrMore",
  //   description:
  //     "Checks if a mock function was called with the specified arguments multiple times or more.",
  // },
  // {
  //   name: "toHaveBeenCalledWithOnceOrLess",
  //   label: "toHaveBeenCalledWithOnceOrLess",
  //   description:
  //     "Checks if a mock function was called with the specified arguments once or less.",
  // },
  // {
  //   name: "toHaveBeenCalledWithTwiceOrLess",
  //   label: "toHaveBeenCalledWithTwiceOrLess",
  //   description:
  //     "Checks if a mock function was called with the specified arguments twice or less.",
  // },
  // {
  //   name: "toHaveBeenCalledWithThriceOrLess",
  //   label: "toHaveBeenCalledWithThriceOrLess",
  //   description:
  //     "Checks if a mock function was called with the specified arguments thrice or less.",
  // },
  // {
  //   name: "toHaveBeenCalledWithMultipleTimesOrLess",
  //   label: "toHaveBeenCalledWithMultipleTimesOrLess",
  //   description:
  //     "Checks if a mock function was called with the specified arguments multiple times or less.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastOnceOrMore",
  //   label: "toHaveBeenCalledWithAtLeastOnceOrMore",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least once or more.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastTwiceOrMore",
  //   label: "toHaveBeenCalledWithAtLeastTwiceOrMore",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least twice or more.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastThriceOrMore",
  //   label: "toHaveBeenCalledWithAtLeastThriceOrMore",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least thrice or more.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastMultipleTimesOrMore",
  //   label: "toHaveBeenCalledWithAtLeastMultipleTimesOrMore",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least multiple times or more.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastOnceOrLess",
  //   label: "toHaveBeenCalledWithAtLeastOnceOrLess",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least once or less.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastTwiceOrLess",
  //   label: "toHaveBeenCalledWithAtLeastTwiceOrLess",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least twice or less.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastThriceOrLess",
  //   label: "toHaveBeenCalledWithAtLeastThriceOrLess",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least thrice or less.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastMultipleTimesOrLess",
  //   label: "toHaveBeenCalledWithAtLeastMultipleTimesOrLess",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least multiple times or less.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastOnceOrExactly",
  //   label: "toHaveBeenCalledWithAtLeastOnceOrExactly",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least once or exactly.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastTwiceOrExactly",
  //   label: "toHaveBeenCalledWithAtLeastTwiceOrExactly",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least twice or exactly.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastThriceOrExactly",
  //   label: "toHaveBeenCalledWithAtLeastThriceOrExactly",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least thrice or exactly.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastMultipleTimesOrExactly",
  //   label: "toHaveBeenCalledWithAtLeastMultipleTimesOrExactly",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least multiple times or exactly.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastOnceOrNever",
  //   label: "toHaveBeenCalledWithAtLeastOnceOrNever",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least once or never.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastTwiceOrNever",
  //   label: "toHaveBeenCalledWithAtLeastTwiceOrNever",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least twice or never.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastThriceOrNever",
  //   label: "toHaveBeenCalledWithAtLeastThriceOrNever",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least thrice or never.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastMultipleTimesOrNever",
  //   label: "toHaveBeenCalledWithAtLeastMultipleTimesOrNever",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least multiple times or never.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastOnceOrAlways",
  //   label: "toHaveBeenCalledWithAtLeastOnceOrAlways",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least once or always.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastTwiceOrAlways",
  //   label: "toHaveBeenCalledWithAtLeastTwiceOrAlways",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least twice or always.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastThriceOrAlways",
  //   label: "toHaveBeenCalledWithAtLeastThriceOrAlways",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least thrice or always.",
  // },
  // {
  //   name: "toHaveBeenCalledWithAtLeastMultipleTimesOrAlways",
  //   label: "toHaveBeenCalledWith  MultipleTimesOrAlways",
  //   description:
  //     "Checks if a mock function was called with the specified arguments at least multiple times or always.",
  // },
  {
    name: "toHaveBeenCalledWithAtLeastOnceOrSometimes",
    label: "toHaveBeenCalledWithAtLeastOnceOrSometimes",
    description:
      "Checks if a mock function was called with the specified arguments at least once or sometimes.",
  },
  {
    name: "toHaveBeenCalledWithAtLeastTwiceOrSometimes",
    label: "toHaveBeenCalledWithAtLeastTwiceOrSometimes",
    description:
      "Checks if a mock function was called with the specified arguments at least  twice or sometimes.",
  },
]
