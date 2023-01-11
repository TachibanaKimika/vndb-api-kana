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
  release: {
    /**
     * only support id
     *
     * Release object. All release fields can be selected. It is very common for all screenshots of a VN to be assigned to the same release, so the fields you select here are likely to get duplicated several times in the response. If you want to fetch more than just a few fields, it is more efficient to only select release.id here and then grab detailed release info with a separate request.
     */
    id: number;
  };
}
