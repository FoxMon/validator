import { describe, it } from "vitest";
import { isNumber } from "../../lib";

describe("IS Number Decorator", () => {
  it("Number property check", () => {
    class A {
      @isNumber()
      num: unknown;

      constructor(num: unknown) {
        this.num = num;
      }
    }

    // Pass
    new A(1);

    // It must fail
    // new A("");
    // new A(undefined);
    // new A(null);
    // new A(false);
    // new A({});
    // new A([{}]);
  });
});
