import { Filters } from './Filters';
import { Image, Title, ScreenShot } from './Base';
import { ReleaseFilters } from './release';
import { CharacterFilters } from './Character';
import { ProducerFilters } from './Producer';

/**
 * vn Fields
 */
export interface Vn {
  /** vndbid. */
  id: string;
  /**
   * String, main title as displayed on the site, typically romanized from the original script.
   */
  title: string;
  /**
   * String, can be null. Alternative title, typically the same as title but in the original script.
   */
  alttitle: string | null;
  /**
   * Array of objects, full list of titles associated with the VN, always contains at least one title.
   */
  titles: Title[];
  /**
   * Array of strings, list of aliases.
   */
  aliases: string[];
  /**
   * String, language the VN has originally been written in.
   */
  olang: string;
  /**
   * Integer, development status. 0 meaning ‘Finished’, 1 is ‘In development’ and 2 for ‘Cancelled’.
   */
  devstatus: number;
  /**
   * Release date, possibly null.
   */
  released: string;
  /**
   * Array of strings, list of languages this VN is available in. Does not include machine translations.
   */
  languages: string;
  /**
   * Array of strings, list of platforms for which this VN is available.
   */
  platforms: string;
  /**
   * Object, can be null.
   */
  image: Image | null;
  /**
   * Array of objects, possibly empty.
   */
  screenshot: ScreenShot[];
  /**
   * Integer, possibly null, rough length estimate of the VN between 1 (very short) and 5 (very long). This field is only used as a fallback for when there are no length votes, so you’ll probably want to fetch length_minutes too.
   */
  length: number | null;
  /**
   * Integer, possibly null, average of user-submitted play times in minutes.
   */
  length_minutes: number | null;
  /**
   * Integer, number of submitted play times.
   */
  length_votes: number | null;
  /**
   * String, possibly null, may contain formatting codes: https://vndb.org/d9#4.
   */
  description: string | null;
  /**
   * Number between 10 and 100, null if nobody voted.
   */
  rating: string | null;
  /**
   * Number between 0 and 100.
   */
  popularity: number;
  /**
   * Integer, number of votes.
   */
  votecount: number;
}

/**
 * vn base Filters
 */
export interface BaseVnFilters
  extends Pick<
    Vn,
    | 'id'
    | 'olang'
    | 'length'
    | 'popularity'
    | 'released'
    | 'votecount'
    | 'rating'
  > {
  /**
   * String search, matches on the VN titles, aliases and release titles. The search algorithm is the same as used on the site.
   */
  search: string;
  /**
   * Language availability.
   */
  lang: string;
  /**
   * Platform availability.
   */
  platform: string;
  /**
   * Integer, number of votes.
   */
  votecount: number;
  /**
   * Only accepts a single value, integer 1. Can of course still be negated with the != operator.
   */
  has_description: 1;
  /**
   * See has_description.
   */
  has_anime: 1;
  /**
   * See has_description.
   */
  has_screenshot: 1;
  /**
   * See has_description.
   */
  has_review: 1;
  /**
   * Development status, integer. See devstatus field.
   */
  devstatus: number;
  /**
   * Tags applied to this VN, also matches parent tags. See below for more details.
   *
   * The tag and dtag filters accept either a plain tag ID or a three-element array containing the tag ID, maximum spoiler level (0, 1 or 2) and minimum tag level (number between 0 and 3, inclusive), for example ["tag","=",["g505",2,1.2]] matches all visual novels that have a Donkan Protagonist with a vote of at least 1.2 at any spoiler level. If only an ID is given, 0 is assumed for both the spoiler and tag levels. For example, ["tag","=","g505"] is equivalent to ["tag","=",["g505",0,0]].
   *
   * Donkan Protagonist: https://vndb.org/g505
   */
  tag: string;
  /**
   * see tag
   */
  dtag: string;
  /**
   * Integer, AniDB anime identifier.
   */
  anime_id: number;
  /**
   * User labels applied to this VN. Accepts a two-element array containing a user ID and label ID. When authenticated or if the "user" request parameter has been set, then it also accepts just a label ID.
   */
  label: string;
  /**
   * Match visual novels that have at least one release matching the given release filters.
   *
   * release filters: https://api.vndb.org/kana#release-filters
   */
  release: ReleaseFilters;
  /**
   * Match visual novels that have at least one character matching the given character filters.
   *
   * character filters: https://api.vndb.org/kana#character-filters
   *
   */
  character: CharacterFilters;
  /**
   * Match visual novels that have at least one staff member matching the given staff filters.
   *
   * staff filters: https://api.vndb.org/kana#staff-filters
   *
   * TODO Staff Filter
   */
  staff: any;
  /**
   * Match visual novels developed by the given producer filters.
   *
   * producer filters: https://api.vndb.org/kana#producer-filters.
   *
   */
  developer: ProducerFilters;
}

/**
 * vn Filters
 */
export type VnFilters = Filters<BaseVnFilters>;
