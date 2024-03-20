import { Component, Output } from '@angular/core';
import { TweetComponent } from '../shared/components/tweet/tweet.component';
import { Tweet } from '../models/tweet.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tweets-list',
  standalone: true,
  imports: [TweetComponent, CommonModule],
  templateUrl: './tweets-list.component.html',
  styleUrl: './tweets-list.component.css',
})
export class TweetsListComponent {
  public tweetsList: Tweet[] = [];

  public addTweetToList(tweet: Tweet) {
    this.TweetsList.push(tweet);
  }
}
