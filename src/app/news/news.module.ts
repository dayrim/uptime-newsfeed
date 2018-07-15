import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsListComponent } from "../news/components/news-list.component";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/news.reducer";
import { NewsShellComponent } from "./containers/news.shell";
import { EffectsModule } from "@ngrx/effects";
import { NewsfeedEffects } from "./effects/news.effects";
import { RemoveTags } from "../shared/pipes/removeTags.pipe";
import { NewsPopup } from "./components/news-popup.component";

export const COMPONENTS = [];
const newsRoutes: Routes = [{ path: "", component: NewsShellComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    RouterModule.forChild(newsRoutes),
    EffectsModule.forFeature([NewsfeedEffects]),
    StoreModule.forFeature("newsfeed", reducer)
  ],
  declarations: [NewsListComponent, NewsShellComponent, RemoveTags, NewsPopup],
  entryComponents: [NewsPopup]
})
export class NewsModule {}
