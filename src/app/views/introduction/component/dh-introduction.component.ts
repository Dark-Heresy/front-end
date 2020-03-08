import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'dh-introduction',
  styleUrls: [
    './dh-introduction.component.scss'
  ],
  templateUrl: './dh-introduction.component.html'
})
export class DhIntroductionComponent {
}
