import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class NewsApiService {

  constructor(
    private http: HttpClient,
  ) {}

  private newsFeedItems: NewsFeedItem[] = [];
  private baseUrl = 'http://google.com';

  getFeed(): NewsFeedItem[] {
    if (this.newsFeedItems) {
      return this.newsFeedItems;
    }

    this.fetchFeedItems().pipe(take(1)).subscribe((response) => {
      this.newsFeedItems = response;

      return this.newsFeedItems;
    });
  }

  private fetchFeedItems(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      map((res: any) => {
        return JSON.parse(res);
      })
    );
  }
}

// TODO: Define when we actually know the schema.
export interface NewsFeedItem {
  [key: string]: any;
}
