export interface Newsmodel {
  items: Newsentry[];
  title: string;
  description?: string;
  url: string;
  image?: string;
}
export interface Newsentry {
  title: string;
  description: string;
  link: string;
  url: string;
  created: number;
  media?: Media;
  info: Newsinfo[];
}

export interface Media {
  content: Newsinfo[];
}
export interface Newsinfo {
  url: string[];
  medium: string[];
  type: string[];
  width: string[];
  height: string[];
}
