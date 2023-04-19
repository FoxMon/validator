import { registPropertyDecorator } from "./regist.property";
import { registMethodDecorator } from "./regist.method";
import { CheckType, DecoratorType } from "../../src/types";
import { assertFunction } from "../../src/utils";
import { match } from "../../src/utils";

/**
 * Regist decorator.
 * If decorator options exist, it must be check all of options.
 * @param {CheckType.Options} options
 * @param {DecoratorType.DecoratorOptions} decoratorOptions
 * @returns {Function}
 */
export function applyDecorator(
  options: CheckType.Options,
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  /**
   * The func must be Function type.
   */
  assertFunction(options.decoratorFunc);
  const originFunc = options.decoratorFunc;
  const decoratorType: string = options.applyType;
  const matchedFunction: Function | null = match<string, Function | null>(
    decoratorType
  )
    .on(
      (type: string) => type === "property",
      () =>
        registPropertyDecorator(
          originFunc as DecoratorType.DecoratorFunction,
          decoratorOptions
        )
    )
    .on(
      (type: string) => type === "method",
      () =>
        registMethodDecorator(
          originFunc as DecoratorType.DecoratorMethodFunction,
          decoratorOptions
        )
    )
    .otherwise(() => null);
  /**
   * The matchedFunction must be function.
   * If the matchedFunction is null, it must human error.
   * Type assert and return this function.
   */
  assertFunction(matchedFunction);
  return matchedFunction;
}
