import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  Newsmodel,
  Newsentry,
  Newsinfo,
  Media
} from "../shared/newsmodel.interface";
import { ActivatedRoute } from "@angular/router";
import { Renderer } from "@angular/core";
import { QueryList } from "@angular/core/src/render3";
import { HostListener } from "@angular/core";

@Component({
  selector: "news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  news: Newsmodel;
  newsEntries: Newsentry[];
  public width: Number;
  public height: Number;
  @ViewChild("container") container: ElementRef;
  @ViewChild("upperContainer") upperContainer: ElementRef;
  @ViewChild("newsCard") newsCard: ElementRef;
  constructor(private renderer: Renderer, private route: ActivatedRoute) {}

  ngOnInit() {
    this.news = this.route.snapshot.data["news"];
    this.newsEntries = this.news.items;
    //console.log(this.container.nativeElement.offsetWidth);
  }
  ngAfterViewInit() {
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
  onResize(event) {
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
