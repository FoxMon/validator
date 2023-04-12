/**
 * Check target is array
 * @param {unknown} target
 * @returns {boolean}
 */
export function isArray(target: unknown): boolean {
  return Array.isArray(target);
}

/**
 * Check target is string
 * @param {unknown} target
 * @returns {boolean}
 */
export function isString(target: unknown): boolean {
  return typeof target === "string";
}

/**
 * Check target is number
 * @param {unknown} target
 * @returns {boolean}
 */
export function isNumber(target: unknown): boolean {
  return typeof target === "number";
}

/**
 * Check target is boolean
 * @param {unknown} target
 * @returns {boolean}
 */
export function isBoolean(target: unknown): boolean {
  return typeof target === "boolean";
}

/**
 * Check target is Function
 * @param {unknown} target
 * @returns {boolean}
 */
export function isFunction(target: unknown): boolean {
  return target instanceof Function;
}
