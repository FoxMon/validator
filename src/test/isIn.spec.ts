import { describe, it } from "vitest";
import { isIn } from "../../lib";

describe("IS IN DECORATOR", () => {
  it("Is in check", () => {
    class ArrayIn {
      @isIn({ value: "a", msg: "Check fail" })
      arr: unknown[];

      constructor(arr: unknown[]) {
        this.arr = arr;
      }
    }

    // Pass
    new ArrayIn(["a", "b"]);

    // It will fail
    // new ArrayIn(["b"]);
    // new ArrayIn([1, 2]);
    // new ArrayIn([{}]);
  });
});
