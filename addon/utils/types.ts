export type ParseFn<T, P> = (uri: T, name: P) => T;
export type ActiveCheck<T, P> = (uri: T, name: P) => boolean;
export type ChangeFn<T> = (uri: T) => void;
