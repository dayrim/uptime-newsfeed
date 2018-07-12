import { Routes } from "@angular/router";
import { NewsListComponent } from "./news/news-list.component";
import { NewslistResolver } from "./news/news-list.resolver";

export const appRoutes: Routes = [
  {
    path: "news",
    component: NewsListComponent,
    resolve: { news: NewslistResolver }
  },
  { path: "", redirectTo: "news", pathMatch: "full" }
];
