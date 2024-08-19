export interface MediaItem {
  type: "video" | "img";
  src: string;
}

export interface IWork {
  id: number;
  title: string;
  date: string;
  text: string;
  media: MediaItem[];
}

export interface IShowItem {
  id: number;
  imgSrc: string;
  title: string;
  subtitle: string;
  text: string;
}
