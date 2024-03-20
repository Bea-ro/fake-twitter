import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TweetsListComponent } from './tweets-list/tweets-list.component';
import { TweetComponent } from './shared/components/tweet/tweet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TweetsListComponent, TweetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fake-twitter';
}
