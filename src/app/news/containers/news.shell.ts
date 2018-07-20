import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { NewslistState } from "../models/news-list-state";
import * as NewsfeedAction from "../state/newsfeed.actions";
import * as NewsfeedSelector from "../state/news.reducer";
import { Newsfeed, Newsitem } from "../models/newsfeed";
import { Pagecontent } from "../models/pagecontent";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { NewsPopup } from "../components/news-popup.component";
import { NewsListComponent } from "../components/news-list.component";

@Component({
  template: `
   <news-list 
   [newsgridColumnWidth]="columnWidth$ | async"
   [newsItems]="newsItems$ | async" 
   (itemSelected)="linkSelectedItem($event)"
   (columnCountChanged)="updateNewsgridColumnCount($event)" 
   (widthChanged)="updateNewsgridWidth($event)">
   </news-list>`
})
export class NewsShellComponent implements OnInit {
  news$: Observable<Newsfeed>;
  newsItems$: Observable<Newsitem[]>;
  newsgridWidth$: Observable<Number>;
  columnCount$: Observable<Number>;
  columnWidth$: Observable<Number>;
  pageContent$: Observable<Pagecontent>;
  dialogRef: MatDialogRef<NewsPopup>;
  @ViewChild(NewsListComponent) newslist;

  constructor(private store: Store<NewslistState>, public dialog: MatDialog) {}
  ngOnInit() {
    this.store.dispatch(new NewsfeedAction.LoadNewsfeedAction());

    this.news$ = this.store.pipe(select(NewsfeedSelector.getNewsfeed));
    this.newsItems$ = this.store.pipe(
      select(NewsfeedSelector.getNewsfeedItems)
    );
    this.columnWidth$ = this.store.pipe(
      select(NewsfeedSelector.getNewsgridColumnWidth)
    );

    this.columnCount$ = this.store.pipe(
      select(NewsfeedSelector.getNewsgridColumnCount)
    );
    this.columnCount$.subscribe(count => {
      this.newslist.changeColumnGrowth(count);
    });
    this.newsgridWidth$ = this.store.pipe(
      select(NewsfeedSelector.getNewsgridWidth)
    );
    this.newsgridWidth$.subscribe(width => {
      this.newslist.changeNewsgridWidth(width);
    });
    this.pageContent$ = this.store.pipe(
      select(NewsfeedSelector.getCurrentPageContent)
    );
    this.pageContent$.subscribe(pageContent => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = pageContent;
      if (pageContent.total_pages != 0) {
        console.log(this.dialogRef);
        if (
          this.dialogRef == null ||
          this.dialogRef.componentInstance == null
        ) {
          this.dialogRef = this.dialog.open(NewsPopup, dialogConfig);
        }
      }
    });
  }
  linkSelectedItem(link: string): void {
    this.store.dispatch(new NewsfeedAction.SetCurrentPageAction(link));
  }
  updateNewsgridWidth(width: number): void {
    this.store.dispatch(new NewsfeedAction.UpdateNewsgridWidth(width));
  }
  updateNewsgridColumnCount(width: number): void {
    this.store.dispatch(new NewsfeedAction.UpdateNewsgridColumnCount(width));
  }
}
