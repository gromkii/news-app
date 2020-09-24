import { NewsApiService } from './../services/news-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  constructor(
    private newsApiService: NewsApiService,
  ) {}

  ngOnInit(): void {
    this.newsApiService.getFeed();
  }
}