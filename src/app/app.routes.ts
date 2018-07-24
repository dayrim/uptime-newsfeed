import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsfeedAppComponent } from './app-root';
import { PageNotFoundComponent } from './news/components/not-found-component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  {
    path: '',
    component: NewsfeedAppComponent,
    children: [
      {
        path: 'news',
        loadChildren: './news/news.module#NewsModule'
      },
      { path: '', redirectTo: 'news', pathMatch: 'full' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
