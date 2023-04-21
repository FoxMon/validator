import { describe, it } from "vitest";
import { isInclude } from "../../lib";

describe("INCLUDE DECORATOR CHECK", () => {
  it("Is Include Decorator", () => {
    // Pass case
    class Include {
      // OK
      @isInclude({ value: "a" })
      str: unknown;

      constructor(str: unknown) {
        this.str = str;
      }
    }

    // Pass
    new Include("abcd");

    // It will fail
    // new Include("cdef");
    // new Include({ a: "cdef" });
    // new Include(["a"]);
    // new Include(123);

    // Fail case
    // class IncludeFail {
    //   // Fail
    //   @isInclude({ value: 1 })
    //   str: unknown;

    //   constructor(str: unknown) {
    //     this.str = str;
    //   }
    // }

    // new IncludeFail("abc");
  });
});
