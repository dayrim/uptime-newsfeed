import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Newsfeed, Newsitem } from '../models/newsfeed';
import { Pagecontent } from '../models/pagecontent';

export interface NewslistState {
  newsfeed: Newsfeed;
  currentPageContent: Pagecontent;
  spinnerShow: boolean;
}

export const initialState: NewslistState = {
  newsfeed: {
    items: [
      {
        title: '',
        description: '',
        link: '',
        url: '',
        created: 0,
        media: {
          content: [
            {
              url: [''],
              medium: [''],
              type: [''],
              width: [''],
              height: ['']
            }
          ]
        }
      }
    ],
    title: '',
    description: '',
    url: '',
    image: ''
  },
  currentPageContent: {
    title: '',
    content: '',
    author: '',
    date_published: '',
    lead_image_url: '',
    dek: '',
    next_page_url: '',
    domain: '',
    excerpt: '',
    word_count: 0,
    direction: '',
    total_pages: 0,
    rendered_pages: 0
  },
  spinnerShow: true
};

const getNewsfeedFeatureState: MemoizedSelector<object, NewslistState> = createFeatureSelector<
  NewslistState
>('newsfeed');

export const getNewsfeed: MemoizedSelector<object, Newsfeed> = createSelector(
  getNewsfeedFeatureState,
  state => state.newsfeed
);
export const getNewsfeedItems: MemoizedSelector<object, Newsitem[]> = createSelector(
  getNewsfeedFeatureState,
  state => state.newsfeed.items
);
export const getCurrentPageContent: MemoizedSelector<object, Pagecontent> = createSelector(
  getNewsfeedFeatureState,
  state => state.currentPageContent
);
export const isShowing: MemoizedSelector<object, boolean> = createSelector(
  getNewsfeedFeatureState,
  state => state.spinnerShow
);
