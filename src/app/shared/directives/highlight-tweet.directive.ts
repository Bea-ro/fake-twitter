import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightTweet]',
  standalone: true,
})
export class HighlightTweetDirective {
  @HostBinding('style.transform') public zoom: string = 'none';
  @HostListener('mouseover') public onMouseEnter() {
    this.zoom = 'scale(1.1)';
  }
  @HostListener('mouseout') public onMouseOut() {
    this.zoom = 'none';
  }

  constructor() {}
}
