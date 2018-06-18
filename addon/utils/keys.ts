/**
 * An `EmberKey` is a string that is period
 * separated. It's not quite an array, event
 * though it should be
 */
type EmberKey = string;

export function tails(emberKey: EmberKey): Array<EmberKey> {
  const keys = emberKey.split('.');
  const output = [];

  for (let i = 1; i < keys.length; i++){
    output.push(keys.slice(0, i));
  }

  output.push(keys);

  return output.map(join('.'));
}


const join = (sep) => (xs) => xs.join(sep);
