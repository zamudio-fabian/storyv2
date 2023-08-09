import { NgModule } from '@angular/core';
import { QrButtonCustom } from './components/qr-button-custom/qr-button-custom.component';
import { QrButton } from './components/qr-button/qr-button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    QrButton,
    QrButtonCustom
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QrButton,
    QrButtonCustom
  ]
})
export class QrUiLibraryModule { }
