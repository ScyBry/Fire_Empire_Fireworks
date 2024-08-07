export interface MediaItem {
  type: "video" | "img";
  src: string;
}

export interface IWork {
  id: number;
  title: string;
  text: string;
  media: MediaItem[];
}
