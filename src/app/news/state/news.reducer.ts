import * as NewsfeedAction from "../state/newsfeed.actions";
import { NewslistState } from "../models/news-list-state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
const initialState: NewslistState = {
  newsfeed: {
    items: [
      {
        title: "",
        description: "",
        link: "",
        url: "",
        created: 0,
        media: {
          content: [
            {
              url: [""],
              medium: [""],
              type: [""],
              width: [""],
              height: [""]
            }
          ]
        }
      }
    ],
    title: "",
    description: "",
    url: "",
    image: ""
  },
  currentPageContent: {
    title: "",
    content: "",
    author: "",
    date_published: "",
    lead_image_url: "",
    dek: "",
    next_page_url: "",
    domain: "",
    excerpt: "",
    word_count: 0,
    direction: "",
    total_pages: 0,
    rendered_pages: 0
  },
  newsgridWidth: 0,
  newsgridColumnCount: 0,
  newsgridColumnWidth: 420
};
const getNewsfeedFeatureState = createFeatureSelector<NewslistState>(
  "newsfeed"
);
export const getNewsfeed = createSelector(
  getNewsfeedFeatureState,
  state => state.newsfeed
);
export const getNewsfeedItems = createSelector(
  getNewsfeedFeatureState,
  state => state.newsfeed.items
);
export const getCurrentPageContent = createSelector(
  getNewsfeedFeatureState,
  state => state.currentPageContent
);
export const getNewsgridWidth = createSelector(
  getNewsfeedFeatureState,
  state => state.newsgridWidth
);

export const getNewsgridColumnCount = createSelector(
  getNewsfeedFeatureState,
  state => state.newsgridColumnCount
);

export const getNewsgridColumnWidth = createSelector(
  getNewsfeedFeatureState,
  state => state.newsgridColumnWidth
);

export function reducer(
  state = initialState,
  action: NewsfeedAction.Action
): NewslistState {
  switch (action.type) {
    case NewsfeedAction.NewsfeedActionTypes.LoadNewsfeedSuccess: {
      return {
        ...state,
        newsfeed: action.payload
      };
    }
    case NewsfeedAction.NewsfeedActionTypes.SetCurrentPageSuccess: {
      return {
        ...state,
        currentPageContent: action.payload
      };
    }
    case NewsfeedAction.NewsfeedActionTypes.UpdateNewsgridColumnCount: {
      return {
        ...state,
        newsgridColumnCount: action.payload
      };
    }
    case NewsfeedAction.NewsfeedActionTypes.UpdateNewsgridWidth: {
      return {
        ...state,
        newsgridWidth: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
