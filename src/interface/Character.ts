import { Image } from './Base';
import { Filters } from './Filters';
import { Trait } from './Tag';
import { Vn, VnFilters } from './Vn';

export interface VnInCharacter extends Vn {
  /**
   * Integer, 0, 1 or 2, spoiler level.
   */
  spoiler: number;
  /**
   * String, "main" for protagonist, "primary" for main characters, "side" or "appears".
   */
  role: 'main' | 'primary' | 'side' | 'appears';
}

export interface TraitInCharacter extends Trait {
  /**
   * Integer, 0, 1 or 2, spoiler level.
   */
  spoiler: number;

  lie: boolean;
}

export interface Character {
  /**
   * vndbid
   */
  id: string;

  name: string;
  /**
   * String, possibly null, name in the original script.
   */
  original: string;
  /**
   * Array of strings.
   */
  aliases: string[];
  /**
   * String, possibly null, "a", "b", "ab" or "o".
   */
  blood_type: 'a' | 'b' | 'ab' | 'o' | null;
  /**
   * Object, possibly null, same sub-fields as the image visual novel field.
   */
  image: Image;
  /**
   * Integer, possibly null, cm.
   */
  height: number | null;
  /**
   * Integer, possibly null, kg.
   */
  weight: number | null;
  /**
   * Integer, possibly null, cm.
   */
  bust: number | null;
  /**
   * Integer, possibly null, cm.
   */
  waist: number | null;
  /**
   * Integer, possibly null, cm.
   */
  hips: number | null;
  /**
   * String, possibly null, "AAA", "AA", or any single letter in the alphabet.
   */
  cup: string | null;
  /**
   * Integer, possibly null, years.
   */
  age: number | null;
  /**
   * Possibly null, otherwise an array of two integers: month and day, respectively.
   */
  birthday: [number, number] | null;
  /**
   * Possibly null, otherwise an array of two strings: the character’s apparent (non-spoiler) sex and the character’s real (spoiler) sex. Possible values are null, "m", "f" or "b" (meaning “both”).
   */
  sex: 'f' | 'm' | 'b' | null | [string, string];
  /**
   * Array of objects, possibly empty.
   */
  traits: TraitInCharacter[];
}

export interface BaseCharacterFilters
  extends Pick<
    Character,
    | 'id'
    | 'height'
    | 'weight'
    | 'bust'
    | 'waist'
    | 'hips'
    | 'cup'
    | 'age'
    | 'birthday'
  > {
  /**
   * String search, matches on the VN titles, aliases and release titles. The search algorithm is the same as used on the site.
   */
  search: string;
  /**
   * String, see vns.role field. If this filter is used when nested inside a visual novel filter, then this matches the role of the particular visual novel. Otherwise, this matches the role of any linked visual novel.
   */
  role: string;
  /**
   * The tag and dtag filters accept either a plain tag ID or a three-element array containing the tag ID, maximum spoiler level (0, 1 or 2) and minimum tag level (number between 0 and 3, inclusive), for example ["tag","=",["g505",2,1.2]] matches all visual novels that have a Donkan Protagonist with a vote of at least 1.2 at any spoiler level. If only an ID is given, 0 is assumed for both the spoiler and tag levels. For example, ["tag","=","g505"] is equivalent to ["tag","=",["g505",0,0]].
   */
  trait: string | [string, number, number];
  /**
   * The tag and dtag filters accept either a plain tag ID or a three-element array containing the tag ID, maximum spoiler level (0, 1 or 2) and minimum tag level (number between 0 and 3, inclusive), for example ["tag","=",["g505",2,1.2]] matches all visual novels that have a Donkan Protagonist with a vote of at least 1.2 at any spoiler level. If only an ID is given, 0 is assumed for both the spoiler and tag levels. For example, ["tag","=","g505"] is equivalent to ["tag","=",["g505",0,0]].
   */
  dtrait: string | [string, number, number];
  /**
   * Match characters that are voiced by the matching staff filters. Voice actor information is actually specific to visual novels, but this filter does not (currently) correlate against the parent entry when nested inside a visual novel filter.
   *
   * TODO
   */
  seiyuu: null;
  /**
   * Match characters linked to visual novels described by visual novel filters.
   */
  vn: VnFilters;
}

export type CharacterFilters = Filters<BaseCharacterFilters>;
