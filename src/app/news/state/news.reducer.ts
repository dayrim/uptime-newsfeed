import * as NewsfeedAction from "../state/newsfeed.actions";
import { Newsfeed } from "../models/newsfeed";
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
  }
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

export function reducer(
  state = initialState,
  action: NewsfeedAction.Action
): NewslistState {
  console.log("Reducer call");
  switch (action.type) {
    case NewsfeedAction.NewsfeedActionTypes.LoadNewsfeedSuccess: {
      console.log("Load success newsfeed");
      console.log(action.payload);
      return {
        ...state,
        newsfeed: action.payload
      };
    }
    case NewsfeedAction.NewsfeedActionTypes.SetCurrentPageSuccess: {
      console.log("Load success currentpage");
      console.log(action.payload);
      return {
        ...state,
        currentPageContent: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
