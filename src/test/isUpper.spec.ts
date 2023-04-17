import { describe, it } from "vitest";
import { isUpper } from "../../lib";

describe("IS UPPER Check", () => {
  it("isUpper decorator", () => {
    class Upper {
      @isUpper()
      str: unknown;

      constructor(str: unknown) {
        this.str = str;
      }
    }

    // PASS
    new Upper("STR");
    new Upper("ABC");

    // It must fail
    // new Upper("Str");
    // new Upper(1);
    // new Upper({});
    // new Upper("A1bc");
  });
});
