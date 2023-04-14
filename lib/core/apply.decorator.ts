import { registPropertyDecorator } from "./regist.property";
import { CheckType, DecoratorType } from "../../src/types";
import { assertFunction } from "../../src/utils";
import { match } from "../../src/utils";

/**
 * Regist decorator.
 * If decorator options exist, it must be check all of options.
 * @param options
 * @param decoratorOptions
 */
export function applyDecorator(
  options: CheckType.Options,
  decoratorOptions?: DecoratorType.DecoratorOptions
): Function {
  // TODO: decoratorOptions
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
      (type) => type === "property",
      () => registPropertyDecorator(originFunc)
    )
    .otherwise(() => null);
  /**
   * The matchedFunction must be function.
   * Type assert and return this function.
   */
  assertFunction(matchedFunction);
  return matchedFunction;
}