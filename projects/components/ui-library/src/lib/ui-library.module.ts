import { NgModule } from '@angular/core';
import { UiButton } from './components/ui-button/ui-button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UiButton
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiButton
  ]
})
export class UiLibraryModule { }
