import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Newsitem } from '../models/newsfeed';
import { Pagecontent } from '../models/pagecontent';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-newslist',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(':leave', [animate(300, style({ opacity: 0 }))])
    ])
  ]
})
export class NewsListComponent {
  @Input() newsItems: Newsitem[];
  @Input() spinnerShow: boolean;
  @Input() pageContent: Pagecontent;
  @Output() itemSelected = new EventEmitter<String>();
  @Output() loadingStarted = new EventEmitter();

  constructor() {}
  linkSelectedItem(link: string): void {
    this.itemSelected.emit(link);
    this.loadingStarted.emit();
  }
}
