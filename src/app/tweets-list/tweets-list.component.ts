import { Component, OnInit, Output } from '@angular/core';
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

  ngOnInit() {
    let tweetsPosted = localStorage.getItem('TWEETS_LIST');
    if (tweetsPosted) {
      this.tweetsList = JSON.parse(tweetsPosted);
    }
  }

  public tweetPosted(tweet: Tweet) {
    this.tweetsList.push(tweet);
    this.saveLocalStorage();
    console.log('llega a la lista al postear');
  }
  public toggleFavorite(index: number, newFavState: boolean) {
    this.tweetsList[index].isFav = newFavState; // Actualizar el estado de favorito en el tweet correspondiente
    this.saveLocalStorage();
  }
  public saveLocalStorage() {
    localStorage.setItem('TWEETS_LIST', JSON.stringify(this.tweetsList));
  }
}
