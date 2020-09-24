import { NewsApiService } from './services/news-api.service';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    NewsApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
