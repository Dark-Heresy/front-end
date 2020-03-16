import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'dh-error-page-not-found',
  styleUrls: [
    './dh-error-page-not-found.component.scss'
  ],
  templateUrl: './dh-error-page-not-found.component.html'
})
export class DhErrorPageNotFoundComponent {
}
