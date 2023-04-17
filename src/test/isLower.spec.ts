import { describe, it } from "vitest";
import { isLower } from "../../lib";

describe("IS LOWER Check", () => {
  it("isLower decorator", () => {
    class Lower {
      @isLower()
      str: unknown;

      constructor(str: unknown) {
        this.str = str;
      }
    }

    // PASS
    new Lower("str");
    new Lower("a1bc");

    // It must fail
    // new Lower("Str");
    // new Lower(1);
    // new Lower({});
    // new Lower("A1bc");
  });
});
