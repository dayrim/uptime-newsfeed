import { Newsfeed } from "../models/newsfeed";
import { Pagecontent } from "../models/pagecontent";

export enum NewsfeedActionTypes {
  LoadNewsfeed = "LOAD_NEWSFEED",
  LoadNewsfeedSuccess = "LOAD_NEWSFEED_SUCCESS",
  SetCurrentPage = "SET_CURRENT_PAGE",
  SetCurrentPageSuccess = "SET_CURRENT_PAGE_SUCCESS"
}
export class LoadNewsfeedAction {
  readonly type = NewsfeedActionTypes.LoadNewsfeed;
  constructor() {}
}

export class LoadNewsfeedSuccessAction {
  readonly type = NewsfeedActionTypes.LoadNewsfeedSuccess;
  constructor(public payload: Newsfeed) {}
}

export class SetCurrentPageAction {
  readonly type = NewsfeedActionTypes.SetCurrentPage;
  constructor(public payload: string) {}
}
export class SetCurrentPageSuccessAction {
  readonly type = NewsfeedActionTypes.SetCurrentPageSuccess;
  constructor(public payload: Pagecontent) {}
}

export type Action = LoadNewsfeedAction | LoadNewsfeedSuccessAction 
| SetCurrentPageAction | SetCurrentPageSuccessAction;
