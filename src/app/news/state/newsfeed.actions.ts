import { Newsfeed } from "../models/newsfeed";
import { Pagecontent } from "../models/pagecontent";

export enum NewsfeedActionTypes {
  LoadNewsfeed = "[NEWSFEED] LOAD_NEWSFEED",
  LoadNewsfeedSuccess = "[NEWSFEED] LOAD_NEWSFEED_SUCCESS",
  SetCurrentPage = "[PAGECONTENT] SET_CURRENT_PAGE",
  SetCurrentPageSuccess = "[PAGECONTENT] SET_CURRENT_PAGE_SUCCESS",
  UpdateNewsgridWidth = "[NEWSGRID] UPDATE_NEWSGRID_WIDTH",
  UpdateNewsgridColumnCount = "[NEWSGRID] UPDATE_NEWSGRID_COLUMN_COUNT"
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
export class UpdateNewsgridWidth {
  readonly type = NewsfeedActionTypes.UpdateNewsgridWidth;
  constructor(public payload: number) {}
}
export class UpdateNewsgridColumnCount {
  readonly type = NewsfeedActionTypes.UpdateNewsgridColumnCount;
  constructor(public payload: number) {}
}

export type Action =
  | LoadNewsfeedAction
  | LoadNewsfeedSuccessAction
  | SetCurrentPageAction
  | SetCurrentPageSuccessAction
  | UpdateNewsgridWidth
  | UpdateNewsgridColumnCount;
