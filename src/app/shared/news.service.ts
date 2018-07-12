import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Newsmodel } from "./newsmodel.interface";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Response } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private url = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<Newsmodel> {
    return this.http.get<Newsmodel>(this.url + "/api/news");
  }

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
        ? `${error.status} - ${error.statusText}`
        : "Server error";
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

//Real api call. Returns No 'Access-Control-Allow-Origin' header is present on the requested resource.

/*
  getProducts(): Observable<IProduct[]> {
    let options = {
      headers: new HttpHeaders({
        AUTH: 'fae7b9f6-6363-45a1-a9c9-3def2dae206d',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<IProduct[]>(this.apiUrl + '/list', options);
  }
  */
