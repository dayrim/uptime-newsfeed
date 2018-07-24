import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NewsService } from '../services/news.service';
import * as NewsfeedAction from '../state/newsfeed.actions';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { Newsfeed } from '../models/newsfeed';
import { Observable } from 'rxjs';

@Injectable()
export class NewsfeedEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}
  @Effect()
  loadNewsfeed$ = this.actions$.pipe(
    ofType(NewsfeedAction.NewsfeedActionTypes.LoadNewsfeed),
    mergeMap((action: NewsfeedAction.LoadNewsfeedAction) =>
      this.newsService
        .getAllNews()
        .pipe(
          map(
            (newsfeed: Newsfeed) =>
              new NewsfeedAction.LoadNewsfeedSuccessAction(newsfeed)
          )
        )
    )
  );

  @Effect()
  setCurrentPage$: Observable<NewsfeedAction.Action> = this.actions$.pipe(
    ofType(NewsfeedAction.NewsfeedActionTypes.SetCurrentPage),
    map((action: NewsfeedAction.SetCurrentPageAction) => action.payload),
    switchMap((link: string) =>
      this.newsService
        .getLinkContent(link)
        .pipe(
          map(
            currentPageContent =>
              new NewsfeedAction.SetCurrentPageSuccessAction(currentPageContent)
          )
        )
    )
  );
}
