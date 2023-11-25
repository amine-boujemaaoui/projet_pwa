export interface Video {
  name: string;
  key: string;
  site: Sites | string;
  type: VideoTypes | string;
}

export enum VideoTypes {
  TRAILER = "Trailer",
  TEASER = "Teaser",
}

export enum Sites {
  YOUTUBE = "YouTube"
}
