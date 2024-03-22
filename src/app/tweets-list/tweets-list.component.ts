import { Component, Output } from '@angular/core';
import { TweetComponent } from '../shared/components/tweet/tweet.component';
import { Tweet } from '../models/tweet.model';
import { CommonModule } from '@angular/common';
import { TweetInputComponent } from '../shared/components/tweet-input/tweet-input.component';

@Component({
  selector: 'app-tweets-list',
  standalone: true,
  imports: [TweetComponent, CommonModule, TweetInputComponent],
  templateUrl: './tweets-list.component.html',
  styleUrl: './tweets-list.component.css',
})
export class TweetsListComponent {
  public tweetsList: Tweet[] = [];

  public tweetPosted(tweet: Tweet) {
    this.tweetsList.push(tweet);
    console.log('llega a la lista al postear');
  }
}
