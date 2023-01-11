export type GetValueType<T, V extends string[]> = {
  [P in V[number]]: P extends keyof T ? T[P] : never;
};
