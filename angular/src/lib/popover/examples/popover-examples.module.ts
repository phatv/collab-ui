import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDefaultComponent } from './popover-default.component';
import { PopoverModule } from '.././popover.module';
import { BadgeModule } from '@collab-ui/angular';

@NgModule({
  declarations: [PopoverDefaultComponent],
  imports: [
    CommonModule,
    BadgeModule,
    PopoverModule
  ],
  exports: [PopoverDefaultComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopoverExamplesModule { }
