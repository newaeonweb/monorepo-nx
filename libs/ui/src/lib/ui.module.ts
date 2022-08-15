import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarTopComponent],
  exports: [NavbarTopComponent],
})
export class UiModule {}
