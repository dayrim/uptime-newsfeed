import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { Newsfeed } from "../models/newsfeed";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Pagecontent } from "../models/pagecontent";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private url = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<Newsfeed> {
    return this.http.get<Newsfeed>("/api/news");
  }
  getLinkContent(link: string): Observable<Pagecontent> {
    return this.http
      .get<Pagecontent>("/api/pagecontent/" + encodeURI(link))
      .pipe(catchError(this.handleError));
  }

  private handleError(err) {
    console.error(err);
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

/*
  getAllNews(): Observable<Newsmodel> {
    return this.http.get<Newsmodel>(this.url + "/api/news");
  }
  */
