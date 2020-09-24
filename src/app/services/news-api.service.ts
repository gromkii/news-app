import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class NewsApiService {

  constructor(
    private http: HttpClient,
  ) {}

  // Abstract this to an env file.
  private API_KEY = 'removed';

  private newsFeedItems: NewsFeedItem[] = [];
  private baseUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`;

  getFeed(): NewsFeedItem[] {
    if (this.newsFeedItems?.length) {
      return this.newsFeedItems;
    }

    this.fetchFeedItems().pipe(take(1)).subscribe((response: NewsApiResponse) => {
      if (response?.status === 'ok') {
        this.newsFeedItems = response.articles;
      }

      return this.newsFeedItems;
    }, (error: Error) => {
      console.log('Error fetching news feed.');
      return [];
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

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsFeedItem[];
}

export interface NewsFeedItem {
  [key: string]: any;
  author?: string;
  content?: string;
  description?: string;
  publishedAt: string;
  source: {
    id: string;
    name: string
  };
  title: string;
  url: string;
  urlToImage: string;
}
