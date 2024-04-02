import { Component, EventEmitter, Output } from '@angular/core';
import { Tweet } from '../../../models/tweet.model';

@Component({
  selector: 'app-tweet-input',
  standalone: true,
  imports: [],
  templateUrl: './tweet-input.component.html',
  styleUrl: './tweet-input.component.css',
})
export class TweetInputComponent {
  @Output() public tweetPosted = new EventEmitter<Tweet>();

  public postTweet(input: HTMLTextAreaElement): void {
    this.tweetPosted.emit({
      text: input.value,
      isFav: false,
    });
    input.value = '¡¿Qué está pasando?!';
  }
  public deletePrevMessage(event: Event): void {
    (event.target as HTMLTextAreaElement).value = '';
  }
}
