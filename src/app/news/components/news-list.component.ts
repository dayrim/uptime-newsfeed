import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList
} from "@angular/core";
import { Renderer } from "@angular/core";
import { Newsitem, Newsfeed } from "../models/newsfeed";
import { Pagecontent } from "../models/pagecontent";

@Component({
  selector: "news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent implements OnInit {
  @Input() newsItems: Newsitem[];

  @Input() pageContent: Pagecontent;
  @Output() itemSelected = new EventEmitter<String>();

  constructor(private renderer: Renderer) {}
  linkSelectedItem(link: string): void {
    this.itemSelected.emit(link);
  }
  ngOnInit() {}
  ngAfterViewInit() {}
}
