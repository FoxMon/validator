import { describe, it } from "vitest";
import { isDuplicate } from "../../lib";

describe("IS DUPLICATE Check", () => {
  it("isDuplicate decorator", () => {
    class Duplicate {
      @isDuplicate()
      arr: unknown[];

      constructor(arr: unknown[]) {
        this.arr = arr;
      }
    }

    // PASS
    new Duplicate([1, 1]);
    new Duplicate(["A", "A"]);

    // It must fail
    // new Duplicate(["A", "B"]);
  });
});
