import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Renderer } from "@angular/core";
import { Newsitem, Newsfeed } from "../models/newsfeed";
import { Pagecontent } from "../models/pagecontent";

@Component({
  selector: "news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  public width: Number;
  public height: Number;
  @Input() newsItems: Newsitem[];

  @Input() pageContent: Pagecontent;
  @Output() itemSelected = new EventEmitter<String>();
  @ViewChild("container") container: ElementRef;
  @ViewChild("upperContainer") upperContainer: ElementRef;
  @ViewChild("newsCard") newsCard: ElementRef;
  constructor(private renderer: Renderer) {}

  linkSelectedItem(link: String): void {
    this.itemSelected.emit(link);
  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    this.changeNewswrapperWidth();

  }
  onResize() {
    this.changeNewswrapperWidth();
  }
  changeNewswrapperWidth(): void {
    var newsentryNumber = this.container.nativeElement.querySelectorAll(
      ".newsCard"
    ).length;
    var containerWidth = parseInt(
      this.upperContainer.nativeElement.offsetWidth
    );
    var newsentryWidth = 400 + 10 + 10;
    var elementsPerRaw = Math.floor(containerWidth / newsentryWidth);
    var newContainerWidth = elementsPerRaw * newsentryWidth;
    console.log("Container width: " + containerWidth);
    console.log("Elements per raw: " + elementsPerRaw);
    console.log("New container width: " + newContainerWidth);
    this.renderer.setElementStyle(
      this.container.nativeElement,
      "flex-basis",
      newContainerWidth.toString() + "px"
    );
    console.log(
      "Final width of container: " + this.container.nativeElement.offsetWidth
    );
  }
}
