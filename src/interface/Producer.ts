import { Filters } from './Filters';

export interface Producer {
  id: string;

  name: string;
  /**
   * String, possibly null, name in the original script.
   */
  original: string | null;
  /**
   * Array of strings.
   */
  aliases: string[];
  /**
   * String, primary language.
   */
  lang: string;
  /**
   * String, producer type, "co" for company, "in" for individual and "ng" for amateur group.
   */
  type: string;
  /**
   * String, possibly null, may contain formatting codes.
   */
  description: string | null;
}

export interface BaseProducerFilters
  extends Pick<Producer, 'id' | 'lang' | 'type'> {
  /** String search. */
  search: string;
}

export type ProducerFilters = Filters<BaseProducerFilters>;
