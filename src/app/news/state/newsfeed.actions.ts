import { Newsfeed } from '../models/newsfeed';
import { Pagecontent } from '../models/pagecontent';

export enum NewsfeedActionTypes {
  LoadNewsfeed = '[NEWSFEED] LOAD_NEWSFEED',
  LoadNewsfeedSuccess = '[NEWSFEED] LOAD_NEWSFEED_SUCCESS',
  SetCurrentPage = '[PAGECONTENT] SET_CURRENT_PAGE',
  SetCurrentPageSuccess = '[PAGECONTENT] SET_CURRENT_PAGE_SUCCESS',
  SpinnerShow = '[SPINNER] SHOW',
  SpinnerHide = '[SPINNER] HIDE'
}
export class LoadNewsfeedAction {
  readonly type: string = NewsfeedActionTypes.LoadNewsfeed;
  constructor(public payload: any = null) {}
}

export class LoadNewsfeedSuccessAction {
  readonly type: string = NewsfeedActionTypes.LoadNewsfeedSuccess;
  constructor(public payload: Newsfeed) {}
}

export class SetCurrentPageAction {
  readonly type: string = NewsfeedActionTypes.SetCurrentPage;
  constructor(public payload: string) {}
}
export class SetCurrentPageSuccessAction {
  readonly type: string = NewsfeedActionTypes.SetCurrentPageSuccess;
  constructor(public payload: Pagecontent) {}
}
export class SpinnerShowAction {
  readonly type: string = NewsfeedActionTypes.SpinnerShow;
  constructor(public payload: any = null) {}
}
export class SpinnerHideAction {
  readonly type: string = NewsfeedActionTypes.SpinnerHide;
  constructor(public payload: any = null) {}
}

export type Action =
  | LoadNewsfeedAction
  | LoadNewsfeedSuccessAction
  | SetCurrentPageAction
  | SetCurrentPageSuccessAction
  | SpinnerHideAction
  | SpinnerShowAction;
