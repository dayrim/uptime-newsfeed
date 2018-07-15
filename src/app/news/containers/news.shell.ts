import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { NewslistState } from "../models/news-list-state";
import * as NewsfeedAction from "../state/newsfeed.actions";
import * as NewsfeedSelector from "../state/news.reducer";
import { Newsfeed, Newsitem } from "../models/newsfeed";
import { Pagecontent } from "../models/pagecontent";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { NewsPopup } from "../components/news-popup.component";

@Component({
  templateUrl: "./news.shell.html"
})
export class NewsShellComponent implements OnInit {
  news$: Observable<Newsfeed>;
  newsItems$: Observable<Newsitem[]>;
  pageContent$: Observable<Pagecontent>;

  dialogRef: MatDialogRef<NewsPopup>;

  constructor(private store: Store<NewslistState>, public dialog: MatDialog) {}
  ngOnInit() {
    console.log("Init news shell");
    this.store.dispatch(new NewsfeedAction.LoadNewsfeedAction());
    this.news$ = this.store.pipe(select(NewsfeedSelector.getNewsfeed));
    this.newsItems$ = this.store.pipe(
      select(NewsfeedSelector.getNewsfeedItems)
    );
    this.store
      .pipe(select(NewsfeedSelector.getCurrentPageContent))
      .subscribe(pageContent => {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = pageContent;
        console.log(pageContent);
        if (pageContent.total_pages != 0) {
          console.log(this.dialogRef);
          if (
            this.dialogRef == null ||
            this.dialogRef.componentInstance == null
          ) {
            this.dialogRef = this.dialog.open(NewsPopup, dialogConfig);
          }
        }
        // this.dialog.open(NewsPopup, dialogConfig);
      });
  }
  linkSelectedItem(link: string): void {
    console.log("Link selected item");
    console.log(link);
    this.store.dispatch(new NewsfeedAction.SetCurrentPageAction(link));
  }
}
