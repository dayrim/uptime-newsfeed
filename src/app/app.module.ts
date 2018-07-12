import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./shared/material.module";
import { NewsfeedAppComponent } from "./newsfeed-app";
import { NewsListComponent } from "./news/news-list.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { NewslistResolver } from "./news/news-list.resolver";

import { HttpClientModule } from "@angular/common/http";
import { HtmlToText } from "./shared/htmlToText.pipe";
@NgModule({
  declarations: [NewsfeedAppComponent, NewsListComponent, HtmlToText],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MaterialModule
  ],
  providers: [NewslistResolver],
  bootstrap: [NewsfeedAppComponent]
})
export class AppModule {}
