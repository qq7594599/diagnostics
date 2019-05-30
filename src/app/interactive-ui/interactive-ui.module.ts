import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { VarDirective } from './directives/var.directive';

@NgModule({
  declarations: [
    MenuComponent,
    VarDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class InteractiveUiModule { }
