import { Newsfeed } from "./newsfeed";
import { Pagecontent } from "./pagecontent";

export interface NewslistState {
  newsfeed: Newsfeed;
  currentPageContent: Pagecontent;
}
