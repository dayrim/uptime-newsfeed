import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Pagecontent } from '../models/pagecontent';

@Component({
  selector: 'app-newspopup',
  templateUrl: 'news-popup.component.html',
  styleUrls: ['./news-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsPopupComponent {
  pageContent: Pagecontent;

  constructor(@Inject(MAT_DIALOG_DATA) data, private dialogRef: MatDialogRef<NewsPopupComponent>) {
    this.pageContent = data;
  }
  close(): void {
    this.dialogRef.close();
  }
}
