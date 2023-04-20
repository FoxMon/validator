import { describe, it } from "vitest";
import { isArray } from "../../lib";

describe("IS ARRAY DECORATOR", () => {
  it("Array Decorator Type", () => {
    class Check {
      @isArray()
      arr: unknown;

      constructor(arr: unknown) {
        this.arr = arr;
      }
    }

    // Pass
    new Check([1, 2]);

    // It will fail
    // new Check({});
    // new Check("");
    // new Check(1);
    // new Check(false);
  });
});
