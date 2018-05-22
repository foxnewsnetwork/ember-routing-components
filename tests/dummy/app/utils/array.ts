/**
 * Puts two arrays together into a tuple of one array
 *
 * iterate over with [for in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
 *
 * ![doge](https://www.shareicon.net/download/2015/09/14/101011_doge_512x512.png =50)
 * @param xs an array
 * @param ys another array
 */
export function zip<A, B>(xs: A[], ys: B[]): [A, B][] {
  let output = [];
  for(const i in xs) {
    output.push([xs[i], ys[i]]);
  }
  return output;
}

export function all<A>(xs: A[], checkFn: (a: A) => boolean): boolean {
  return xs.reduce((isTrue, x) => isTrue && checkFn(x), true);
}

export function equal<A>(a: A[], b: A[]): boolean {
  return (a.length === b.length) && all(zip(a, b), ([x, y]) => x === y);
}
