import { Filters } from './Filters';
import { Vn, VnFilters } from './Vn';
import { Languages, Media, ExtLink } from './Base';
import { Producer, ProducerFilters } from './Producer';

export interface VnInRelease extends Vn {
  /**
   * The release type for this visual novel, can be "trial", "partial" or "complete".
   */
  rtype: 'trial' | 'partial' | 'complete';
}

/**
 * Accepted values for "sort": id, title, released.
/**
 *
 *
 * @export
 * @interface Release
 */
export interface Release {
  /**
   * vndbid.
   */
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
   * Array of objects, languages this release is available in. There is always exactly one language that is considered the “main” language of this release, which is only used to select the titles for the title and alttitle fields.
   */
  languages: Languages[];
  /**
   * Array of strings.
   */
  platforms: string[];
  /**
   * Array of objects, the list of visual novels this release is linked to.
   */
  vns: VnInRelease[];
  /**
   * Array of objects.
   */
  producers: Producer[];
  /**
   * Release date.
   */
  released: string;
  /**
   * Integer, possibly null, age rating.
   */
  minage: number;
  /**
   * Boolean.
   */
  patch: boolean;
  /**
   * Boolean.
   */
  freeware: boolean;
  /**
   * Boolean, can be null.
   */
  uncensored: boolean | null;
  /**
   * Boolean.
   */
  official: boolean;
  /**
   * Boolean.
   */
  has_ero: boolean;
  /**
   * Can either be null, the string "non-standard" or an array of two integers indicating the width and height.
   */
  resolution: 'non-standard' | [number, number] | null;
  /**
   * String, possibly null.
   */
  engine: string | null;
  /**
   * String, possibly null, may contain formatting codes.
   *
   * @see https://vndb.org/d9#4
   */
  notes: string | null;

  /**
   * Array, links to external websites. This list is equivalent to the links displayed on the release pages on the site, so it may include redundant entries (e.g. if a Steam ID is known, links to both Steam and SteamDB are included) and links that are automatically fetched from external resources (e.g. PlayAsia, for which a GTIN lookup is performed). These extra sites are not listed in the extlinks list of the schema.
   *
   * @see https://api.vndb.org/kana#get-schema
   */
  extlinks: ExtLink[];
}

export interface BaseReleaseFilters
  extends Pick<
    Release,
    | 'id'
    | 'released'
    | 'minage'
    | 'resolution'
    | 'engine'
    | 'freeware'
    | 'official'
    | 'has_ero'
    | 'uncensored'
  > {
  /**
   * String search.
   */
  search: string;
  /**
   * Match on available languages.
   */
  lang: string;
  /**
   * Match on available platforms.
   */
  platform: string;
  /**
   * Match on the image resolution, in pixels. Value must be a two-element integer array to which the width and height, respectively, are compared. For example, ["resolution","<=",[640,480]] matches releases with a resolution smaller than or equal to 640x480.
   */
  resolution: Release['resolution'];
  /**
   * 	Same as the resolution filter, but additionally requires that the aspect ratio matches that of the given resolution.
   */
  resolution_aspect: any;
  /**
   * String.
   */
  medium: string;
  /**
   * 	Integer, see voiced field.
   */
  voiced: number;
  /**
   * String, see vns.rtype field. If this filter is used when nested inside a visual novel filter, then this matches the rtype of the particular visual novel. Otherwise, this matches the rtype of any linked visual novel.
   */
  rtype: VnInRelease['rtype'];

  /**
   * The extlink filter can be used with three types of values:
   *
   * Just a site name, e.g. ["extlink","=","steam"] matches all releases that have a steam ID.
   *
   * A two-element array indicating the site name and the remote identifier, e.g. ["extlink","=",["steam",702050]] to match the Saya no Uta release on Steam. The second element can be either an int or a string, depending on the site, but integer identifiers are also accepted when formatted as a string.
   *
   * A URL, e.g. ["extlink","=","https://store.steampowered.com/app/702050/"] is equivalent to the above example.
   */
  extlink: string;
  /**
   * 	Integer, only accepts the value 1.
   */
  patch: 1;
  /**
   * 	Match releases that are linked to at least one visual novel matching the given visual novel filters.
   */
  vn: VnFilters;
  /**
   * Match releases that have at least one producer matching the given producer filters.
   *
   */
  producer: ProducerFilters;
}

export type ReleaseFilters = Filters<BaseReleaseFilters>;
