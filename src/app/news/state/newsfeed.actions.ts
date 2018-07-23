import { Newsfeed } from "../models/newsfeed";
import { Pagecontent } from "../models/pagecontent";

export enum NewsfeedActionTypes {
  LoadNewsfeed = "[NEWSFEED] LOAD_NEWSFEED",
  LoadNewsfeedSuccess = "[NEWSFEED] LOAD_NEWSFEED_SUCCESS",
  SetCurrentPage = "[PAGECONTENT] SET_CURRENT_PAGE",
  SetCurrentPageSuccess = "[PAGECONTENT] SET_CURRENT_PAGE_SUCCESS",
  SpinnerShow = "[SPINNER] SHOW",
  SpinnerHide = "[SPINNER] HIDE"
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
export class SpinnerShowAction {
  readonly type = NewsfeedActionTypes.SpinnerShow;
  constructor() {}
}
export class SpinnerHideAction {
  readonly type = NewsfeedActionTypes.SpinnerHide;
  constructor() {}
}

export type Action =
  | LoadNewsfeedAction
  | LoadNewsfeedSuccessAction
  | SetCurrentPageAction
  | SetCurrentPageSuccessAction
  | SpinnerHideAction
  | SpinnerShowAction;
