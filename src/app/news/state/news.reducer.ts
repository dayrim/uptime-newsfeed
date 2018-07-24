import * as NewsfeedAction from '../state/newsfeed.actions';
import { NewslistState, initialState } from '../state';

export function reducer(state = initialState, action: NewsfeedAction.Action): NewslistState {
  switch (action.type) {
    case NewsfeedAction.NewsfeedActionTypes.LoadNewsfeedSuccess: {
      return {
        ...state,
        spinnerShow: false,
        newsfeed: action.payload
      };
    }
    case NewsfeedAction.NewsfeedActionTypes.SetCurrentPageSuccess: {
      return {
        ...state,
        spinnerShow: false,
        currentPageContent: action.payload
      };
    }
    case NewsfeedAction.NewsfeedActionTypes.SpinnerHide:
      return { ...state, spinnerShow: false };
    case NewsfeedAction.NewsfeedActionTypes.SpinnerShow:
      return { ...state, spinnerShow: true };
    default: {
      return state;
    }
  }
}
