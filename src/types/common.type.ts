/**
 * Common type package
 */
export namespace CommonType {
  /**
   * Define CommonVariable type
   * string || number || boolean || unknown
   */
  export type CommonVariable = string | number | boolean | unknown;

  /**
   * Define CommonMethodReturn type
   * CommonVariable || void || Function
   */
  export type CommonMethodReturn = CommonVariable | void | Function;
}
