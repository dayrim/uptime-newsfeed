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
    return this.http.get<Newsmodel>("/api/news");
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

/*
  getAllNews(): Observable<Newsmodel> {
    return this.http.get<Newsmodel>(this.url + "/api/news");
  }
  */
