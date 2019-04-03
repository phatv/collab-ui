import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { PopoverDirective } from './popover.directive';


@NgModule({
  declarations: [PopoverComponent, PopoverDirective],
  imports: [
    CommonModule
  ],
  exports: [PopoverComponent, PopoverDirective ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ PopoverComponent ]
})
export class PopoverModule { }
