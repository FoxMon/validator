import { describe, it } from "vitest";
import { isContain } from "../../lib";

describe("IS CONTAIN Decorator", () => {
  it("Contain property check", () => {
    class B {
      @isContain({ value: 1 })
      arr: number[];

      constructor(arr: number[]) {
        this.arr = arr;
      }
    }

    // Pass
    new B([1]);

    // It must fail
    // new B([2]);
    // new B([3]);
    // new B(["2"]);
    // new B([]);
    // new B([false]);
    // new B([{}]);
  });
});
