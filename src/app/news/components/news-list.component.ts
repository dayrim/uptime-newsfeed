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
import { UpdateNewsgridColumnCount } from "../state/newsfeed.actions";

@Component({
  selector: "news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent implements OnInit {
  @Input() newsItems: Newsitem[];
  @Input() newsgridColumnWidth: number;
  @Input() pageContent: Pagecontent;
  @Output() itemSelected = new EventEmitter<String>();
  @Output() widthChanged = new EventEmitter<Number>();
  @Output() columnCountChanged = new EventEmitter<Number>();
  @ViewChild("container") container: ElementRef;
  @ViewChild("upperContainer") upperContainer: ElementRef;

  @ViewChildren("cardWrapper") newsCards: QueryList<ElementRef>;
  cards: QueryList<ElementRef>;
  constructor(private renderer: Renderer) {}
  linkSelectedItem(link: string): void {
    this.itemSelected.emit(link);
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.newsCards.changes.subscribe(cards => {
      if (cards) {
        console.log(cards);
        this.cards = cards;
        this.updateNewsGrid();
      }
    });
    this.updateNewsGrid();
  }
  onResize() {
    this.updateNewsGrid();
  }
  changeNewsgridWidth(width: number) {
    console.log("Change newsgrid width ", width);

    this.renderer.setElementStyle(
      this.container.nativeElement,
      "flex-basis",
      width.toString() + "px"
    );
  }
  changeColumnGrowth(count: number) {
    console.log("Change column growrth", count);
    if (count <= 1) {
      if (this.cards) {
        console.log("Flex grow 1");
        this.cards.toArray().forEach(card => {
          this.renderer.setElementStyle(card.nativeElement, "flex-grow", "1");
        });
      }
      console.log("Flex basis auto");
      this.renderer.setElementStyle(
        this.container.nativeElement,
        "flex-basis",
        "auto"
      );
    } else {
      console.log("Flex grow 0");
      if (this.cards) {
        this.cards.toArray().forEach(card => {
          this.renderer.setElementStyle(card.nativeElement, "flex-grow", "0");
        });
      }
    }
  }
  updateNewsGrid() {
    var newsgridWidth = parseInt(this.upperContainer.nativeElement.offsetWidth);
    var columnCount = Math.floor(newsgridWidth / this.newsgridColumnWidth);

    this.widthChanged.emit(columnCount * this.newsgridColumnWidth);
    this.columnCountChanged.emit(columnCount);
  }
}
