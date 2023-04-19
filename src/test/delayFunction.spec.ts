import { describe, it } from "vitest";
import { delayFunction } from "../../lib";

describe("DELAY FUNCTION DECORATOR", () => {
  it("Delay function check", () => {
    class A {
      className: string;

      constructor() {
        this.className = "Hello";
      }

      @delayFunction({ value: 1000 })
      hello() {
        console.log("Hello");
      }
    }

    new A().hello();
  });
});
