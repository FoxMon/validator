import { describe, it } from "vitest";
import { isBoolean } from "../../lib";

describe("IS BOOLEAN Decorator", () => {
  it("Boolean property check", () => {
    class A {
      @isBoolean()
      value: unknown;

      constructor(value: unknown) {
        this.value = value;
      }
    }

    // Pass
    new A(false);

    // It must fail
    // new A("");
    // new A(1);
    // new A(0);
    // new A([]);
    // new A({});
  });
});
