import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";
describe("add", () => {
  test("should add two numbers", () => {
    const a = -Math.random();
    const b = Math.random();

    const result = add(a, b);
    console.log({ result, a, b });
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should subtract two numbers", () => {
    const a = Math.random();
    const b = Math.random();

    const result = subtract(a, b);
    console.log({ result, c: a, d: b });

    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two numbers", () => {
    const a = Math.random();
    const b = -Math.random();

    const result = multiply(a, b);
    console.log({ result, a, b });

    expect(result).toBe(a * b);
  });
});
