import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css',
})
export class TweetComponent {
  @Input() public tweetText: string = '';
  @Input() public fav: boolean = false;

  public favToggle() {
    console.log('aprieto fav');
    this.fav = !this.fav;
  }
}
