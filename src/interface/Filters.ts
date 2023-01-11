type Field<T = string> = T;

type Operators = '=' | '!=' | '>=' | '>' | '<=' | '<';

type BaseFilters<T> = [
  Field<keyof T>,
  Operators,
  BaseFilters<T> | /** value */ T[keyof T] | BaseFilters<T>[] | any,
];

type Conjunction = 'and' | 'or';

/**
 * @see https://api.vndb.org/kana#filters
 */
export type Filters<T = Record<string, any>> =
  | [Conjunction, ...Filters<T>[]]
  | BaseFilters<T>;
