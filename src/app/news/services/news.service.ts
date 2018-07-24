import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Newsfeed } from '../models/newsfeed';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Pagecontent } from '../models/pagecontent';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<Newsfeed> {
    return this.http.get<Newsfeed>('/api/news').pipe(catchError(err => throwError(err)));
  }
  getLinkContent(link: string): Observable<Pagecontent> {
    return this.http
      .get<Pagecontent>('/api/pagecontent/' + encodeURI(link))
      .pipe(catchError(err => throwError(err)));
  }
}
