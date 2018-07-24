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
    return this.http.get<Newsfeed>('/api/news');
  }
  getLinkContent(link: string): Observable<Pagecontent> {
    return this.http
      .get<Pagecontent>('/api/pagecontent/' + encodeURI(link))
      .pipe(catchError(this.handleError));
  }

  private handleError(err) {
    // console.error(err);
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
