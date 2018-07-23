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
import { style } from "@angular/animations";

@Component({
  template: `
  <mat-toolbar layout-align="center center" color="primary">
  <h1>Newsfeed</h1>
</mat-toolbar>
<mat-divider>asd</mat-divider>
  <news-list 
  
   [newsItems]="newsItems$ | async" 
   (itemSelected)="linkSelectedItem($event)"
  >
   </news-list>`
})
export class NewsShellComponent implements OnInit {
  news$: Observable<Newsfeed>;
  newsItems$: Observable<Newsitem[]>;

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

    this.pageContent$ = this.store.pipe(
      select(NewsfeedSelector.getCurrentPageContent)
    );
    this.pageContent$.subscribe(pageContent => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = pageContent;
      dialogConfig.panelClass = "newsPopup";
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
}
