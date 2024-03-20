import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css',
})
export class TweetComponent {
  @Output() public tweet = new EventEmitter<string>();

  public postTweet() {
    this.tweet.emit();
  }
}
