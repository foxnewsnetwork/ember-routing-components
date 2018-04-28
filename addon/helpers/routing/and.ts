import { helper } from '@ember/component/helper';

type Params = [boolean, boolean];
export function routingAnd(params: Params): boolean {
  const [apple, orange] = params;
  return apple && orange;
}

// @ts-ignore
export default helper(routingAnd);
