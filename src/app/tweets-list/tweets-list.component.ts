import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TweetComponent } from '../shared/components/tweet/tweet.component';
import { Tweet } from '../models/tweet.model';
import { CommonModule } from '@angular/common';
import { TweetInputComponent } from '../shared/components/tweet-input/tweet-input.component';

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
  @Output() public updateFav: EventEmitter<void> = new EventEmitter<void>();
  @Output() public updateDeleted: EventEmitter<void> = new EventEmitter<void>();

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
  public tweetDeleted() {
    this.updateDeleted.emit();
    let filteredTweetsPosted: Tweet[] = this.tweetsList.filter(
      (tweet: Tweet) => !tweet.isDeleted
    );
    this.tweetsList = filteredTweetsPosted;
    this.saveLocalStorage();
  }
  public toggleFavorite() {
    this.updateFav.emit();
    this.saveLocalStorage();
  }
  public saveLocalStorage() {
    localStorage.setItem('TWEETS_LIST', JSON.stringify(this.tweetsList));
  }
}
