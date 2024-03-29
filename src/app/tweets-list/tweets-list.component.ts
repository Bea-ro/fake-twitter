import { Component, OnInit, Output } from '@angular/core';
import { TweetComponent } from '../shared/components/tweet/tweet.component';
import { Tweet } from '../models/tweet.model';
import { CommonModule } from '@angular/common';
import { TweetInputComponent } from '../shared/components/tweet-input/tweet-input.component';
import { HighlightTweetDirective } from '../shared/directives/highlight-tweet.directive';

const TWEETS_LIST_KEY = 'TWEETS_LIST';
@Component({
  selector: 'app-tweets-list',
  standalone: true,
  imports: [TweetComponent, CommonModule, TweetInputComponent],
  templateUrl: './tweets-list.component.html',
  styleUrl: './tweets-list.component.css',
})
export class TweetsListComponent implements OnInit {
  public tweetsList: Tweet[] = [];

  ngOnInit() {
    let tweetsPosted = localStorage.getItem('TWEETS_LIST');
    if (tweetsPosted) {
      this.tweetsList = JSON.parse(tweetsPosted);
    }
  }

  public tweetPosted(tweet: Tweet) {
    this.tweetsList.push(tweet);
    this.saveLocalStorage();
  }
  public tweetDeleted(text: string) {
    this.tweetsList = this.tweetsList.filter((tweet) => tweet.text !== text);
    this.saveLocalStorage();
  }
  public toggleFavorite(index: number, newFavState: boolean) {
    this.tweetsList[index].isFav = newFavState;
    this.saveLocalStorage();
  }
  public saveLocalStorage() {
    localStorage.setItem('TWEETS_LIST', JSON.stringify(this.tweetsList));
  }
}
