import { isArray, isFunction, isString } from "./index";

/**
 * Assert error function
 * @param {string} msg
 */
function assertionError(msg?: string): void {
  throw new Error(msg);
}

/**
 * Assert
 * @param {unknown} condition
 */
export function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    assertionError(`Assert fail: ${msg}`);
  }
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

/**
 * Assert condition is function
 * @param {unknown} condition
 */
export function assertFunction(
  condition: unknown,
  msg?: string
): asserts condition is Function {
  if (!isFunction(condition)) {
    assertionError("Not a Function");
  }
}
