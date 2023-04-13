import { describe, it } from "vitest";
import { isEmpty } from "../../lib/common";

describe("IS EMPTY Decorator", () => {
  it("Empty property check", () => {
    class A {
      @isEmpty()
      str: string;

      constructor(str: string) {
        this.str = str;
      }
    }
    // Pass
    new A("a");
    // It must be fail
    // new A("");
  });
});
