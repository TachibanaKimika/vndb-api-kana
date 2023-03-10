import { Character, CharacterFilters } from './Character';
import { Filters } from './Filters';
import { Producer, ProducerFilters } from './Producer';
import { Release, ReleaseFilters } from './release';
import { Tag, TagFilters, Trait, TraitFilters } from './Tag';
import { Vn, VnFilters } from './Vn';
import { ApiPath } from '../apis/createApis';
import { CreateAxiosDefaults } from 'axios';

export interface BaseQuery {
  /**
   * Filters are used to determine which database items to fetch, see the section on Filters below.
   *
   * filters: https://api.vndb.org/kana#filters
   *
   * @default []
   */
  filters?: Filters<any>;
  /**
   * string[] will be format to string in this package.
   *
   * String. Comma-separated list of fields to fetch for each database item. Dot notation can be used to select nested JSON objects, e.g. "image.url" will select the url field inside the image object. Multiple nested fields can be selected with brackets, e.g. "image{id,url,dims}" is equivalent to "image.id, image.url, image.dims".
   *
   * Every field of interest must be explicitely mentioned, there is no support for wildcard matching. The same applies to nested objects, it is an error to list image without sub-fields in the example above.
   *
   * The top-level id field is always selected by default and does not have to be mentioned in this list.
   *
   * @default ""
   */
  fields: string[];
  /**
   * Field to sort on. Supported values depend on the type of data being queried and are documented separately.
   *
   * @default id
   */
  sort?: string;
  /**
   * Set to true to sort in descending order.
   *
   * @default false
   */
  reverse?: boolean;
  /**
   * Number of results per page, max 100. Can also be set to 0 if you’re not interested in the results at all, but just want to verify your query or get the count, compact_filters or normalized_filters.
   *
   * @default 10
   */
  results?: number;
  /**
   * Page number to request, starting from 1. See also the note on pagination below.
   *
   * pagination: https://api.vndb.org/kana#pagination
   *
   * @default 1
   */
  page?: number;
  /**
   * User ID. This field is mainly used for POST /ulist, but it also sets the default user ID to use for the visual novel “label” filter. Defaults to the currently authenticated user.
   *
   * @default null;
   */
  user?: string | null;
  /**
   * Whether the response should include the count field (see below). This option should be avoided when the count is not needed since it has a considerable performance impact.
   *
   * @default false
   */
  count?: boolean;
  /**
   * Whether the response should include the compact_filters field (see below).
   *
   * normalized_filters
   *
   * Whether the response should include the normalized_filters field (see below).
   *
   * @default false
   */
  compact_filters?: boolean;
  /**
   * Whether the response should include the normalized_filters field (see below).
   *
   * @default false
   */
  normalized_filters?: boolean;
}

export interface BaseResponse<T> {
  /**
   * Array of objects representing the query results.
   */
  results: T[];
  /**
   * When true, repeating the query with an incremented page number will yield more results. This is a cheaper form of pagination than using the count field.
   */
  more: boolean;
  /**
   * Only present if the query contained "count":true. Indicates the total number of entries that matched the given filters.
   */
  count: number;
  /**
   * Only present if the query contained "compact_filters":true. This is a compact string representation of the filters given in the query.
   */
  compact_filters: string;
  /**
   * Only present if the query contained "normalized_filters":true. This is a normalized JSON representation of the filters given in the query.
   */
  normalized_filters: string[];
}

type NestedPath<T extends 'array' | 'object', P, C = undefined> = `${P &
  string}${C extends string ? (C extends 'undefined' ? '' : `.${C}`) : ''}`;

type DeepNested<V, K = ''> = V extends object[]
  ? NestedPath<'array', K, DeepPath<V[number]> | undefined>
  : V extends unknown[]
  ? NestedPath<'array', K>
  : V extends object
  ? NestedPath<'object', K, DeepPath<V>>
  : never;

type DeepPath<T extends object> = {
  [Q in keyof T]-?: Q | DeepNested<NonNullable<T[Q]>, Q>;
}[keyof T];

export type VnField = DeepPath<Vn>;
export type ReleaseField = DeepPath<Release>;
export type CharacterField = DeepPath<Character>;
export type ProducerField = DeepPath<Producer>;
export type TagField = DeepPath<Tag>;
export type TraitField = DeepPath<Trait>;

export interface VnRequest extends BaseQuery {
  filters: VnFilters;
  fields: VnField[];
  sort?: 'id' | 'title' | 'released' | 'popularity' | 'rating' | 'votecount';
}

export interface ReleaseRequest extends BaseQuery {
  filters: ReleaseFilters;
  fields: ReleaseField[];
  sort?: 'id' | 'title' | 'released';
}

export interface CharacterRequest extends BaseQuery {
  filters: CharacterFilters;
  fields: CharacterField[];
  sort?: 'id' | 'name';
}

export interface ProducerRequest extends BaseQuery {
  filters: ProducerFilters;
  fields: ProducerField[];
  sort?: 'id' | 'name';
}

export interface TagRequest extends BaseQuery {
  filters: TagFilters;
  fields: TagField[];
  sort?: 'id' | 'name' | 'vn_count';
}

export interface TraitRequest extends BaseQuery {
  filters: TraitFilters;
  fields: TraitField[];
  sort?: 'id' | 'name' | 'char_count';
}

export type UseRequest = <T, S>(
  params: T,
  path: ApiPath,
  /** default has BaseURL header */
  config?: CreateAxiosDefaults,
) => Promise<S>;
