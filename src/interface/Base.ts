import { Release } from './release';

export interface Image {
  /**
   * String, image identifier.
   */
  id: number;
  /**
   * String.
   */
  url: string;
  /**
   * Pixel dimensions of the image, array with two integer elements indicating the width and height.
   */
  dims: [number, number];
  /**
   * Number between 0 and 2 (inclusive), average image flagging vote for sexual content.
   */
  sexual: number;
  /**
   * Number between 0 and 2 (inclusive), average image flagging vote for violence.
   */
  violence: number;
  /**
   * Integer, number of image flagging votes.
   */
  votecount: number;
}

export interface ScreenShot extends Image {
  thumbnail: string;
  thumbnail_dims: [number, number];
  /**
   *Release object. All release fields can be selected. It is very common for all screenshots of a VN to be assigned to the same release, so the fields you select here are likely to get duplicated several times in the response. If you want to fetch more than just a few fields, it is more efficient to only select release.id here and then grab detailed release info with a separate request.
   *
   * https://api.vndb.org/kana#release-fields
   */
  release: Omit<Release, 'vns'>;
}
/**
 * titles associated with the VN
 */
export interface Title {
  /**
   * String, language. Each language appears at most once in the titles list.
   */
  lang: string;
  /**
   * String, title in the original script.
   */
  title: string;
  /**
   * String, can be null, romanized version of title.
   */
  latin: string | null;
  /**
   * Boolean.
   */
  official: boolean;
  /**
   * Boolean, whether this is the “main” title for the visual novel entry. Exactly one title has this flag set in the titles array and it’s always the title whose lang matches the VN’s olang field. This field is included for convenience, you can of course also use the olang field to grab the main title.
   */
  main: boolean;
}

export interface Languages {
  /**
   * String, title in the original script. Can be null, in which case the title for this language is the same as the “main” language.
   */
  lang: string;
  /**
   * String, can be null, romanized version of title.
   */
  latin: string | null;
  /**
   * Boolean, whether this is a machine translation.
   */
  mtl: boolean;
  /**
   * Boolean, whether this language is used to determine the “main” title for the release entry.
   */
  main: boolean;
}

export interface Media {
  /**
   * String.
   */
  medium: string;
  /**
   * Integer, quantity. This is 0 for media where a quantity does not make sense, like “internet download”.
   */
  qty: number;
}

export interface ExtLink {
  /**
   * String, URL.
   */
  url: string;
  /**
   * String, English human-readable label for this link.
   */
  label: string;
  /**
   * Internal identifier of the site, intended for applications that want to localize the label or to parse/format/extract remote identifiers. Keep in mind that the list of supported sites, their internal names and their ID types are subject to change, but I’ll try to keep things stable.
   */
  name: string;
  /**
   * Remote identifier for this link. Not all sites have a sensible identifier as part of their URL format, in such cases this field is simply equivalent to the URL.
   */
  id: string;
}
