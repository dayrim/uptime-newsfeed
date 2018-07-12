import { Component, AfterViewInit } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd
} from "@angular/router";

@Component({
  selector: "newsfeed-app",
  templateUrl: "./newsfeed-app.html",
  styleUrls: ["./newsfeed-app.css"]
})
export class NewsfeedAppComponent {
  title = "newsfeed-app";
  loading: boolean;
  constructor(private router: Router) {
    this.loading = true;
  }
  ngAfterViewInit() {}
}
