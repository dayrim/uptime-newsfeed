export interface Newsfeed {
  items: Newsitem[];
  title: string;
  description?: string;
  url: string;
  image?: string;
}
export interface Newsitem {
  title: string;
  description: string;
  link: string;
  url: string;
  created: number;
  media?: {
    content: Newsmedia[];
  };
}
export interface Newsmedia {
  url: string[];
  medium: string[];
  type: string[];
  width: string[];
  height: string[];
}
