import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Pagecontent } from "../models/pagecontent";

@Component({
  selector: "news-popup",
  templateUrl: "news-popup.component.html",
  styleUrls: ["./news-popup.component.scss"]
})
export class NewsPopup implements OnInit {
  pageContent: Pagecontent;
  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<NewsPopup>
  ) {
    this.pageContent = data;
  }
  close() {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
