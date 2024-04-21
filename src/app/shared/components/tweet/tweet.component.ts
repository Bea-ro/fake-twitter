import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightTweetDirective } from '../../directives/highlight-tweet.directive';
import { UserComponent } from '../user/user.component';
import { Tweet } from '../../../models/tweet.model';

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
  @Input() public isDeleted: boolean = false;
  @Output() favChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public isDeletedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public removeTweet() {
    this.isDeleted = !this.isDeleted;
    this.isDeletedChange.emit(this.isDeleted);
  }

  public favToggle() {
    this.fav = !this.fav;
    this.favChange.emit(this.fav);
  }
}
