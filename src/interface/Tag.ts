import { Filters } from './Filters';

/**
 * @see https://api.vndb.org/kana#post-tag
 */
export interface Tag {
  id: string;

  name: string;

  aliases: string[];
  /**
   * String, may contain formatting codes.
   *
   *  formatting codes: https://vndb.org/d9#4
   */
  description: string;
  /**
   * String, "cont" for content, "ero" for sexual content and "tech" for technical tags.
   */
  category: string;

  searchable: boolean;

  applicable: boolean;
  /**
   * Integer, number of VNs this tag has been applied to, including any child tags.
   */
  vn_count: number;
}

export interface BaseTagFilters extends Pick<Tag, 'id' | 'category'> {
  search: string;
}

export type TagFilters = Filters<BaseTagFilters>;

/**
 * @see https://api.vndb.org/kana#post-trait
 */
export interface Trait {
  /**
   * vndbid
   */
  id: string;
  /**
   * String. Trait names are not necessarily self-describing, so they should always be displayed together with their “group” (see below), which is the top-level parent that the trait belongs to.
   */
  name: string;
  /**
   * Array of strings.
   */
  aliases: string[];
  /**
   * String, may contain formatting codes.
   *
   * formatting codes: https://vndb.org/d9#4
   */
  description: string;

  searchable: boolean;

  applicable: boolean;

  /**
   * vndbid
   */
  group_id: string;

  group_name: string;
  /**
   * Integer, number of characters this trait has been applied to, including child traits.
   */
  char_count: number;
}

export interface BaseTraitFilters extends Pick<Trait, 'id'> {
  search: string;
}

export type TraitFilters = Filters<BaseTraitFilters>;
