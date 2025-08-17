import { useParams } from "react-router-dom"
import { jestMethods } from "./methods/methodsList"
import CodeBlock from "./CodeBlock"

const codeExamples: Record<string, string> = {
  test: `test('example test', () => {
  expect(true).toBe(true);
});`,
  it: `it('should add numbers correctly', () => {
  expect(1 + 2).toBe(3);
});`,
  describe: `describe('Math operations', () => {
  it('should add numbers correctly', () => {
    expect(1 + 2).toBe(3);
  });
});`,
  xdescribe: `xdescribe('Skipped tests', () => {
  it('this test will not run', () => {
    expect(true).toBe(false);
  });
});`,
  fit: `fit('focused test', () => {
  expect(1 + 1).toBe(2);
});`,
  xit: `xit('skipped test', () => {
  expect(1 + 1).toBe(3);
});`,
  jest: `jest.mock('moduleName', () => {
  return {
    functionName: jest.fn(() => 'mocked value'),
  };
});`,
  jestExpect: `test('jest expect example', () => {
  const value = 5;
  expect(value).toBeGreaterThan(3);
});`,
  jestFn: `test('mock function example', () => {
  const mock = jest.fn();
  mock('hello');
  expect(mock).toHaveBeenCalledWith('hello');
});`,
  jestSpyOn: `test('spyOn example', () => {
  const obj = { method: () => 'original' };
  const spy = jest.spyOn(obj, 'method');
  obj.method();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});`,
  jestMock: `jest.mock('moduleName', () => ({
  functionName: jest.fn(() => 'mocked value'),
}));`,
  jestClearAllMocks: `beforeEach(() => {
  jest.clearAllMocks();
});`,
  jestResetAllMocks: `beforeEach(() => {
  jest.resetAllMocks();
});`,
  jestRestoreAllMocks: `beforeEach(() => {
  jest.restoreAllMocks();
});`,
  beforeEach: `beforeEach(() => {
  console.log('This runs before each test');
});`,
  afterEach: `afterEach(() => {
  console.log('This runs after each test');
});`,
  beforeAll: `beforeAll(() => {
  console.log('This runs once before all tests');
});`,
  afterAll: `afterAll(() => {
  console.log('This runs once after all tests');    
});`,
  expect: `test('expect example', () => {
  const value = 10;
  expect(value).toBe(10);
});`,
  expectExtend: `import '@testing-library/jest-dom/extend-expect';    
test('custom matcher example', () => {
  const element = document.createElement('div');
  element.textContent = 'Hello, World!';
  expect(element).toHaveTextContent('Hello, World!');
});

expect.extend({
  matcherName(received, expected, ...otherArgs) {
    // Your custom logic here
    return {
      pass: boolean,
      message: () => string
    };
  }
});

expect.extend({
  toBeWithinRange($received: number, $min: number, $max: number) {
    const pass = $received >= $min && received <= $max;
    
    return {
      pass,
      message: () => 
        pass
          ? Expected $received NOT to be within range $min - $max
          : Expected $received to be within range $min - $max
    };
  }
});

// Usage in tests
test('number range check', () => {
  expect(5).toBeWithinRange(1, 10);  // ✅ passes
  expect(15).not.toBeWithinRange(1, 10);  // ✅ passes
});
`,
  toBe: `test('toBe example', () => {
  expect(1 + 1).toBe(2);
});`,
  toEqual: `test('toEqual example', () => {
  const obj = { a: 1 };
  expect(obj).toEqual({ a: 1 });  

});`,
  toBeTruthy: `test('toBeTruthy example', () => { 
  expect(true).toBeTruthy();
});`,
  toBeFalsy: `test('toBeFalsy example', () => {
  expect(false).toBeFalsy();  
});`,
  toBeNull: `test('toBeNull example', () => {
  expect(null).toBeNull();
});`,
  toBeDefined: `test('toBeDefined example', () => {
  const value = 42;
  expect(value).toBeDefined();
});`,
  toBeUndefined: `test('toBeUndefined example', () => {
  let value;
  expect(value).toBeUndefined();
});`,
  toBeNan: `test('toBeNaN example', () => {
  const value = NaN;
  expect(value).toBeNaN();
});`,
  toBeGreaterThan: `test('toBeGreaterThan example', () => {
  const value = 10;
  expect(value).toBeGreaterThan(5);
});`,
  toBeLessThan: `test('toBeLessThan example', () => {
  const value = 3;
  expect(value).toBeLessThan(5);
});`,
  toBeGreaterThanOrEqual: `test('toBeGreaterThanOrEqual example', () => {
  const value = 5;
  expect(value).toBeGreaterThanOrEqual(5);
});`,
  toBeLessThanOrEqual: `test('toBeLessThanOrEqual example', () => {
  const value = 3;
  expect(value).toBeLessThanOrEqual(5);
});`,
  toBeClose: `test('toBeClose example', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3, 5); // 5 decimal places
});`,
  toHaveLength: `test('toHaveLength example', () => {
  const arr = [1, 2, 3];
  expect(arr).toHaveLength(3);
});`,
  toContain: `test('toContain example', () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(2); 
});`,
  toContainEqual: `test('toContainEqual example', () => {
  const arr = [{ a: 1 }, { b: 2 }];
  expect(arr).toContainEqual({ a: 1 });
});`,
  toMatch: `test('toMatch example', () => {   
  const str = 'Hello, World!';
  expect(str).toMatch(/World/);
});`,
  toMatchObject: `test('toMatchObject example', () => {
  const obj = { a: 1, b: 2 };
  expect(obj).toMatchObject({ a: 1 });    
});`,
  toHaveProperty: `test('toHaveProperty example', () => {
  const obj = { a: { b: 2 } };
  expect(obj).toHaveProperty('a.b', 2);
});`,
  toThrow: `test('toThrow example', () => {
  const fn = () => {
    throw new Error('Error occurred');
  };
  expect(fn).toThrow('Error occurred'); 
});`,
  toThrowError: `test('toThrowError example', () => {
  const fn = () => {
    throw new TypeError('Type error occurred');
  };
  expect(fn).toThrowError(TypeError);
});`,
  toHaveBeenCalled: `test('toHaveBeenCalled example', () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();  
});`,
  toHaveBeenCalledWith: `test('toHaveBeenCalledWith example', () => {
  const mockFn = jest.fn();
  mockFn('arg1', 'arg2');
  expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
});`,
  toHaveBeenLastCalledWith: `test('toHaveBeenLastCalledWith example', () => {
  const mockFn = jest.fn();
  mockFn('first call');
  mockFn('last call');
  expect(mockFn).toHaveBeenLastCalledWith('last call');
});`,
  toHaveBeenNthCalledWith: `test('toHaveBeenNthCalledWith example', () => {
  const mockFn = jest.fn();
  mockFn('first call');
  mockFn('second call');
  expect(mockFn).toHaveBeenNthCalledWith(2, 'second call');
});`,
  toHaveReturned: `test('toHaveReturned example', () => {
  const mockFn = jest.fn(() => 'return value');
  mockFn();
  expect(mockFn).toHaveReturned();
});`,
  toHaveReturnedWith: `test('toHaveReturnedWith example', () => {
  const mockFn = jest.fn(() => 'return value');
  mockFn();
  expect(mockFn).toHaveReturnedWith('return value');
});`,
  toHaveLastReturned: `test('toHaveLastReturned example', () => {
  const mockFn = jest.fn(() => 'return value');
  mockFn();
  mockFn();
  expect(mockFn).toHaveLastReturnedWith('return value');
});`,
  tpHaveLastReturnedWith: `test('toHaveLastReturnedWith example', () => {
  const mockFn = jest.fn(() => 'return value');
  mockFn();
  mockFn();
  expect(mockFn).toHaveLastReturnedWith('return value');
});`,
  toHaveBeenCalledTimes: `test('toHaveBeenCalledTimes example', () => {
  const mockFn = jest.fn();
  mockFn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
});`,
}

export default function JestMethodExample() {
  const { name } = useParams()
  const method = jestMethods.find((m) => m.name === name)

  if (!method) return <p>Method not found</p>

  return (
    <div>
      <h2>{method.label}</h2>
      <p>{method.description}</p>
      <CodeBlock
        code={codeExamples[name!] ?? "No example yet."}
        language="ts"
      />
    </div>
  )
}
