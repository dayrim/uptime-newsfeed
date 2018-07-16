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
  @ViewChild("container") container: ElementRef;
  @ViewChild("upperContainer") upperContainer: ElementRef;

  @ViewChildren("cardWrapper") newsCards: QueryList<ElementRef>;
  // @ViewChild("newsCard") newsCard: ElementRef;
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
        var containerWidth = parseInt(
          this.upperContainer.nativeElement.offsetWidth
        );
        var newsentryWidth = 400 + 10 + 10;
        var elementsPerRaw = Math.floor(containerWidth / newsentryWidth);
        if (elementsPerRaw <= 1) {
          console.log("Flex grow 1");
          cards.toArray().forEach(card => {
            this.renderer.setElementStyle(card.nativeElement, "flex-grow", "1");
          });
        } else {
          console.log("Flex grow 0");
          cards.toArray().forEach(card => {
            this.renderer.setElementStyle(card.nativeElement, "flex-grow", "0");
          });
        }
      }
    });
    this.changeNewswrapperWidth();
  }
  onResize() {
    this.changeNewswrapperWidth();
  }
  changeNewswrapperWidth(): void {
    var containerWidth = parseInt(
      this.upperContainer.nativeElement.offsetWidth
    );
    var newsentryWidth = 400 + 10 + 10;
    var elementsPerRaw = Math.floor(containerWidth / newsentryWidth);
    var newContainerWidth = elementsPerRaw * newsentryWidth;
    console.log("Container width: " + containerWidth);
    console.log("Elements per raw: " + elementsPerRaw);
    console.log("New container width: " + newContainerWidth);
    if (elementsPerRaw <= 1) {
      if (this.cards) {
        console.log("Flex grow 1");
        this.cards.toArray().forEach(card => {
          this.renderer.setElementStyle(card.nativeElement, "flex-grow", "1");
        });
      }
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
      this.renderer.setElementStyle(
        this.container.nativeElement,
        "flex-basis",
        newContainerWidth.toString() + "px"
      );
    }

    // console.log(
    //   "Final width of container: " + this.container.nativeElement.offsetWidth
    // );
  }
}
