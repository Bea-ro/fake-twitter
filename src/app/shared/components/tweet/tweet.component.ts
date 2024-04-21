import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightTweetDirective } from '../../directives/highlight-tweet.directive';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [UserComponent, CommonModule, HighlightTweetDirective],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css',
})
export class TweetComponent {
  @Input() public tweetText: string = '';
  @Input() public fav: boolean = false;
  @Output() favToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public tweetDeleted: EventEmitter<string> =
    new EventEmitter<string>();

  public removeTweet(text: string): void {
    this.tweetDeleted.emit(text);
  }

  public favToggle() {
    this.fav = !this.fav;
    this.favToggled.emit(this.fav);
  }
}
