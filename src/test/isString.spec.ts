import { describe, it } from "vitest";
import { isString } from "../../lib/common";

describe("IS STRING Decorator", () => {
  it("String property check", () => {
    class A {
      @isString()
      str: unknown;

      constructor(str: unknown) {
        this.str = str;
      }
    }

    // Pass
    new A("");

    // It must fail
    // new A(null);
    // new A(undefined);
    // new A(false);
    // new A(1);
    // new A({});
    // new A([]);
  });
});
