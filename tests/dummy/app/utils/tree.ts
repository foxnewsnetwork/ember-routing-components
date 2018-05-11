export type Tree<T> = Leaf<T> | Branch<T>;

type Leaf<T> = {
  type: 'leaf',
  payload: T
}

type Branch<T> = {
  type: 'branch',
  branches: Tree<T>[],
  payload: T
}
export function leaf<T>(payload: T): Tree<T> {
  return {
    type: 'leaf',
    payload
  };
}

function append<T>(xs: T[], x: T): T[] {
  return xs.concat(x);
}

function isLeaf<T>(tree: Tree<T>): tree is Leaf<T> {
  return tree.type === 'leaf';
}

function isBranch<T>(tree: Tree<T>): tree is Branch<T> {
  return tree.type === 'branch';
}

export function branch<T>(tree: Tree<T>, payload: T): Tree<T> {
  let oldBranches;
  if (isLeaf(tree)) {
    oldBranches = [];
  } else if (isBranch(tree)) {
    oldBranches = tree.branches;
  } else {
    throw new Error('I expected a tree, but you gave me probably null');
  }

  const branches = append<Tree<T>>(oldBranches, leaf(payload))
  return {
    type: 'branch',
    payload: tree.payload,
    branches
  };
}
