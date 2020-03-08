import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'dh-button-container',
  styleUrls: [
    './dh-button-container.component.scss'
  ],
  templateUrl: './dh-button-container.component.html'
})
export class DhButtonContainerComponent {
}
