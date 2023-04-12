import { isArray, isString } from "./is";

/**
 * Assert error function
 * @param {string} msg
 */
function assertionError(msg?: string): void {
  throw new Error(msg);
}

/**
 * Assert condition is string
 * @param {unknown} condition
 */
export function assertString(condition: unknown): asserts condition is string {
  if (!isString(condition)) {
    assertionError("Not a string");
  }
}

/**
 * Assert condition is array
 * @param {unknown} condition
 */
export function assertArray(
  condition: unknown
): asserts condition is Array<unknown> {
  if (!isArray(condition)) {
    assertionError("Not a Array");
  }
}
