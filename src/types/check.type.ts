import { DecoratorType } from "./decorator.type";

/**
 * CheckType for decorator function option type
 */
export namespace CheckType {
  /**
   * To regist function decorator...
   */
  export interface Options {
    /**
     * Name option
     */
    decoratorName: string;
    /**
     * Function option
     */
    func: DecoratorType.DecoratorFunction;
  }
}
