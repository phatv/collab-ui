import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from './toggle-switch.component';

@NgModule({
  declarations: [ToggleSwitchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ToggleSwitchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToggleSwitchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToggleSwitchModule,
      providers: [],
    };
  }
}
