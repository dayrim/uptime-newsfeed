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
import { trigger, transition, animate, style } from "@angular/animations";

@Component({
  selector: "news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(":leave", [animate(300, style({ opacity: 0 }))])
    ])
  ]
})
export class NewsListComponent implements OnInit {
  @Input() newsItems: Newsitem[];
  @Input() spinnerShow: boolean;
  @Input() pageContent: Pagecontent;
  @Output() itemSelected = new EventEmitter<String>();
  @Output() loadingStarted = new EventEmitter();
  constructor(private renderer: Renderer) {}
  linkSelectedItem(link: string): void {
    this.itemSelected.emit(link);
    this.loadingStarted.emit();
  }

  ngOnInit() {}
  ngAfterViewInit() {}
  onResize() {
    console.log(this.spinnerShow);
  }
}
