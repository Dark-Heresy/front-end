import { EventEmitter } from '@angular/core';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import { IDhButtonClickEvent } from '@dh/components/buttons/button/interfaces/dh-button-click-event';
import { DhOptional } from '@dh/types/dh-optional';

export interface IDhButton {
  size: DhButtonSizeEnum;
  type: DhButtonTypeEnum;
  clickEvent: EventEmitter<IDhButtonClickEvent>;
  isDisabled: DhOptional<boolean | string>;

  onButtonClick(mouseEvent: Readonly<MouseEvent>): void;
}
