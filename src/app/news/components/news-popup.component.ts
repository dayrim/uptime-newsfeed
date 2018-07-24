import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Pagecontent } from '../models/pagecontent';

@Component({
  selector: 'app-newspopup',
  templateUrl: 'news-popup.component.html',
  styleUrls: ['./news-popup.component.scss']
})
export class NewsPopupComponent implements OnInit {
  pageContent: Pagecontent;
  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<NewsPopupComponent>
  ) {
    console.log(data);
    this.pageContent = data;
  }
  close() {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
