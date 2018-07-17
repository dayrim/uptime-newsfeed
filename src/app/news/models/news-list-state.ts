import { Newsfeed } from "./newsfeed";
import { Pagecontent } from "./pagecontent";

export interface NewslistState {
  newsfeed: Newsfeed;
  currentPageContent: Pagecontent;
  newsgridWidth: number;
  newsgridColumnCount: number;
  newsgridColumnWidth: number;
}
