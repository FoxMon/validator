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
 * @param {number} target
 * @returns {boolean}
 */
export function isNumber(target: unknown): boolean {
  return typeof target === "number";
}

/**
 * Check target is boolean
 * @param {number} target
 * @returns {boolean}
 */
export function isBoolean(target: unknown): boolean {
  return typeof target === "boolean";
}
