import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'dh-navbar',
  styleUrls: [
    './dh-navbar.component.scss'
  ],
  templateUrl: './dh-navbar.component.html'
})
export class DhNavbarComponent {
}
