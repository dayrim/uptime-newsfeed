import { Routes, RouterModule } from "@angular/router";
import { NewsListComponent } from "./news/components/news-list.component";
import { NgModule } from "@angular/core";
import { NewsfeedAppComponent } from "./app-root";

export const appRoutes: Routes = [
  { path: "", redirectTo: "news", pathMatch: "full" },
  {
    path: "",
    component: NewsfeedAppComponent,
    children: [
      {
        path: "news",
        loadChildren: "./news/news.module#NewsModule"
      },
      { path: "", redirectTo: "news", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
